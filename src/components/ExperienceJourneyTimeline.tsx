import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import {
  getStartYear,
  sortExperiencesNewestFirst,
  timelineTrackStyle,
  type TimelineExperience,
} from "../utils/timeline";

export type ExperienceJourneyVariant = "featured" | "detailed";

export interface ExperienceJourneyTimelineProps {
  entries: TimelineExperience[];
  variant: ExperienceJourneyVariant;
  /** Intro content above the rail (e.g. Journey heading on home). */
  header?: ReactNode;
  /** Label above year chips on mobile / context for the rail. */
  yearRailLabel?: string;
  /** Max bullets per entry; omit for all. */
  achievementLimit?: number;
  /** e.g. home “View Full Journey” actions. */
  footer?: ReactNode;
  /** Framer layoutId for the active year marker (unique per page if multiple rails). */
  activeMarkerLayoutId?: string;
  /** Labels for “N things in this year” (mobile header + rail subtitle). */
  yearGroupCountLabels?: { single: string; plural: string };
  className?: string;
}

function useTimelineSync(timeline: TimelineExperience[]) {
  const timelineYears = useMemo(
    () => Array.from(new Set(timeline.map((item) => getStartYear(item.dates)))),
    [timeline],
  );

  const groupedTimeline = useMemo(
    () =>
      timelineYears.map((year) => {
        const groupEntries = timeline
          .map((item, index) => ({ item, index }))
          .filter(({ item }) => getStartYear(item.dates) === year);
        return { year, entries: groupEntries };
      }),
    [timeline, timelineYears],
  );

  const yearFirstIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    timeline.forEach((item, index) => {
      const year = getStartYear(item.dates);
      if (!map.has(year)) {
        map.set(year, index);
      }
    });
    return map;
  }, [timeline]);

  const [activeTimelineYear, setActiveTimelineYear] = useState(
    timelineYears[0] ?? "",
  );

  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!timeline.length) return;

    const visibleRatios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.tlIndex);
          if (Number.isNaN(index)) return;
          visibleRatios.set(index, entry.intersectionRatio);
        });

        const mostVisible = [...visibleRatios.entries()]
          .sort((a, b) => b[1] - a[1])
          .find(([, ratio]) => ratio > 0);

        if (!mostVisible) return;
        const [visibleIndex] = mostVisible;
        const year = getStartYear(timeline[visibleIndex].dates);
        setActiveTimelineYear(year);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-25% 0px -35% 0px",
      },
    );

    articleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [timeline, timelineYears]);

  const activeYearIndex = Math.max(
    0,
    timelineYears.indexOf(activeTimelineYear),
  );
  const railProgressPct =
    timelineYears.length > 1
      ? (activeYearIndex / (timelineYears.length - 1)) * 100
      : 0;
  const railProgressHeight = `calc(max(${railProgressPct}%, 0%) - 0.5rem)`;

  const activeYearEntryCount =
    groupedTimeline.find((g) => g.year === activeTimelineYear)?.entries
      .length ?? 0;

  return {
    timelineYears,
    groupedTimeline,
    yearFirstIndexMap,
    activeTimelineYear,
    articleRefs,
    railProgressHeight,
    activeYearEntryCount,
  };
}

export default function ExperienceJourneyTimeline({
  entries,
  variant,
  header,
  yearRailLabel,
  achievementLimit,
  footer,
  activeMarkerLayoutId = "timeline-year-accent",
  yearGroupCountLabels,
  className,
}: ExperienceJourneyTimelineProps) {
  const timeline = useMemo(
    () => sortExperiencesNewestFirst(entries),
    [entries],
  );

  const {
    timelineYears,
    groupedTimeline,
    yearFirstIndexMap,
    activeTimelineYear,
    articleRefs,
    railProgressHeight,
    activeYearEntryCount,
  } = useTimelineSync(timeline);

  const isFeatured = variant === "featured";
  const limit = achievementLimit ?? (isFeatured ? 2 : Number.POSITIVE_INFINITY);

  if (!timeline.length) {
    return null;
  }

  const asideWidth = isFeatured ? "md:w-[13.5rem] lg:w-60" : "md:w-44 lg:w-52";
  const yearDisplay = isFeatured
    ? "text-5xl md:text-6xl"
    : "text-3xl md:text-4xl lg:text-5xl";
  const yearBlockMinH = isFeatured ? "min-h-[7.5rem]" : "min-h-[4.75rem]";
  const flexGap = isFeatured ? "md:gap-10 lg:gap-14" : "md:gap-8 lg:gap-12";
  const railTop = isFeatured ? "mt-10" : "mt-8";

  const label =
    yearRailLabel ?? (isFeatured ? "Recent to Past" : "By start year");

  const countLabels = yearGroupCountLabels ?? {
    single: isFeatured ? "entry" : "role",
    plural: isFeatured ? "entries" : "roles",
  };

  return (
    <div className={className}>
      {header}

      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-text-muted mb-6">
        {label}
      </p>

      <div className={`flex flex-col md:flex-row md:items-start ${flexGap}`}>
        <aside
          className={`hidden md:flex md:flex-col ${asideWidth} md:flex-shrink-0 md:sticky md:top-24 md:self-start z-10`}
        >
          <div className={`${yearBlockMinH} overflow-hidden`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTimelineYear}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  className={`${yearDisplay} font-medium tracking-tight font-display text-text-primary leading-none`}
                >
                  {activeTimelineYear}
                </p>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted">
                  {activeYearEntryCount}{" "}
                  {activeYearEntryCount === 1
                    ? countLabels.single
                    : countLabels.plural}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={`relative ${railTop}`}>
            <div
              className="pointer-events-none absolute left-3.5 top-3 bottom-3 w-px rounded-full bg-border-primary/25"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-3.5 top-3 w-px rounded-full bg-accent-primary/75 transition-[height] duration-300 ease-out"
              style={{ height: railProgressHeight }}
              aria-hidden
            />
            <div className="relative z-[1] space-y-0.5">
              {timelineYears.map((year) => {
                const isActive = activeTimelineYear === year;

                return (
                  <div
                    key={year}
                    className="flex min-h-[2.75rem] items-center gap-6"
                  >
                    <div className="flex h-full w-7 flex-shrink-0 items-center justify-center pr-0.5">
                      {isActive ? (
                        <motion.span
                          layoutId={activeMarkerLayoutId}
                          className="h-[3px] w-4 shrink-0 rounded-full bg-accent-primary"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 34,
                          }}
                        />
                      ) : (
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-border-primary/45"
                          aria-hidden
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      aria-current={isActive ? "true" : "false"}
                      onClick={() => {
                        const targetIndex = yearFirstIndexMap.get(year);
                        if (targetIndex === undefined) return;
                        articleRefs.current[targetIndex]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className={`min-w-0 text-left text-sm font-mono tabular-nums tracking-[0.08em] transition-colors duration-200 ${
                        isActive
                          ? "text-text-primary font-medium"
                          : "text-text-muted/65 hover:text-text-secondary"
                      }`}
                    >
                      {year}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-12">
          <div className="md:hidden -mx-1 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 px-1 min-w-max">
              {timelineYears.map((year) => {
                const isActive = activeTimelineYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    aria-current={isActive ? "true" : "false"}
                    onClick={() => {
                      const targetIndex = yearFirstIndexMap.get(year);
                      if (targetIndex === undefined) return;
                      articleRefs.current[targetIndex]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`rounded-full border px-3 py-1 text-[11px] font-mono tracking-[0.14em] transition-colors ${
                      isActive
                        ? "border-accent-primary/60 bg-accent-primary/10 text-accent-primary"
                        : "border-border-primary text-text-secondary"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </div>

          {groupedTimeline.map((yearGroup, yearGroupIndex) => (
            <motion.section
              key={yearGroup.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: motionTokens.duration.normal / 1000,
                delay: yearGroupIndex * 0.06,
              }}
              className="space-y-6"
            >
              <div className="flex items-baseline gap-4 border-b border-border-primary/50 pb-2 md:hidden">
                <h3 className="text-2xl font-bold font-display text-text-primary">
                  {yearGroup.year}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">
                  {yearGroup.entries.length}{" "}
                  {yearGroup.entries.length === 1
                    ? countLabels.single
                    : countLabels.plural}
                </span>
              </div>

              <div className="space-y-10">
                {yearGroup.entries.map(
                  ({ item: experience, index }, entryIndex) => {
                    const trackStyle = timelineTrackStyle(experience.track);
                    const achievements =
                      limit === Number.POSITIVE_INFINITY
                        ? experience.achievements
                        : experience.achievements.slice(0, limit);

                    return (
                      <motion.article
                        key={experience.id}
                        ref={(el) => {
                          articleRefs.current[index] = el;
                        }}
                        data-tl-index={index}
                        className="relative border-l border-border-primary/25 pl-7 md:pl-9"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: motionTokens.duration.normal / 1000,
                          delay: entryIndex * 0.05,
                        }}
                      >
                        <div
                          className={`absolute left-[-6px] top-2.5 h-3 w-3 rounded-full ring-4 ring-bg-primary ${trackStyle.node}`}
                        />

                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.16em] ${trackStyle.pill}`}
                            >
                              {experience.track}
                            </span>
                            <span className="text-sm font-mono text-text-muted">
                              {experience.dates}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h4 className="text-xl md:text-2xl font-semibold text-text-primary font-display leading-tight">
                              {experience.role}
                            </h4>
                            <p
                              className={`text-sm font-medium ${trackStyle.company}`}
                            >
                              {experience.company}
                              <span className="font-normal text-text-muted">
                                {" "}
                                · {experience.location}
                              </span>
                            </p>
                          </div>

                          <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                            {experience.description}
                          </p>

                          {achievements.length > 0 && (
                            <div className="space-y-2 pt-1">
                              {achievements.map((achievement) => (
                                <div
                                  key={achievement}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <span
                                    className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${trackStyle.bullet}`}
                                  />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.article>
                    );
                  },
                )}
              </div>
            </motion.section>
          ))}

          {footer}
        </div>
      </div>
    </div>
  );
}
