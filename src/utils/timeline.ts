import type { Experience } from "../data/experience";

export type TimelineTrack = "Experience" | "Education";

export type TimelineExperience = Experience & { track: TimelineTrack };

const EDUCATION_IDS = new Set<string>(["gwu-ms", "sx-bscsit"]);

/** Start calendar year from a date range string, e.g. "Aug 2024 – ..." → "2024" */
export function getStartYear(dates: string): string {
  const start = dates.split("–")[0].trim();
  return start.split(" ").slice(-1)[0];
}

export function parseStartDate(dates: string): number {
  const [start] = dates.split("–").map((part) => part.trim());
  return new Date(`${start} 1`).getTime();
}

export function withTimelineTrack(experience: Experience): TimelineExperience {
  return {
    ...experience,
    track: EDUCATION_IDS.has(experience.id) ? "Education" : "Experience",
  };
}

export function sortExperiencesNewestFirst(
  items: TimelineExperience[],
): TimelineExperience[] {
  return [...items].sort(
    (a, b) => parseStartDate(b.dates) - parseStartDate(a.dates),
  );
}

export function timelineTrackStyle(track: TimelineTrack) {
  if (track === "Experience") {
    return {
      pill: "border-accent-primary/45 bg-accent-primary/12 text-accent-primary",
      node: "bg-accent-primary",
      bullet: "bg-accent-primary/80",
      company: "text-accent-primary",
    };
  }
  return {
    pill: "border-success/40 bg-success/12 text-success",
    node: "bg-success",
    bullet: "bg-success/75",
    company: "text-success",
  };
}
