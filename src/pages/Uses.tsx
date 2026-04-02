import Page from "../components/Page";
import SEO from "../components/SEO";

const sections = [
  {
    label: "Editor",
    items: [
      {
        title: "Cursor",
        body: "VS Code fork with AI built in. I use it for everything now.",
      },
      {
        title: "VS Code",
        body: "Fallback and for anything that needs a clean slate.",
      },
    ],
  },
  {
    label: "Terminal",
    items: [
      {
        title: "iTerm2",
        body: "Zsh with a minimal prompt. No plugins I don't understand.",
      },
    ],
  },
  {
    label: "AI Tools",
    items: [
      {
        title: "Claude Code",
        body: "CLI agent for agentic coding tasks. Runs in the terminal, reads the repo, and ships — the one I use most.",
      },
      {
        title: "Codex",
        body: "OpenAI's coding agent. Good for isolated tasks and quick code generation.",
      },
      {
        title: "GitHub Copilot",
        body: "Inline completions inside the editor. Still useful for boilerplate.",
      },
    ],
  },
  {
    label: "Stack & Services",
    items: [
      {
        title: "Vercel",
        body: "Frontend deployments. Zero config for Next.js and Vite projects.",
      },
      {
        title: "GitHub",
        body: "All code lives here. I use GitHub Actions for CI/CD.",
      },
      {
        title: "Cloudflare",
        body: "DNS, domain management, and Workers for edge functions.",
      },
      {
        title: "Render",
        body: "Backend API deployments. FastAPI services run here.",
      },
    ],
  },
  {
    label: "Productivity",
    items: [
      { title: "Notion", body: "Notes, project planning, and research dumps." },
      {
        title: "Figma",
        body: "UI work and quick wireframes before writing any code.",
      },
      {
        title: "Chrome",
        body: "DevTools are still the best. React and Redux extensions loaded.",
      },
    ],
  },
];

function Uses() {
  return (
    <Page>
      <SEO
        title="Uses – Abhiyan Sainju"
        description="The software and tools Abhiyan Sainju uses day to day."
      />

      <section className="py-24 border-b border-border-primary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-4">
            Setup
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary font-heading mb-4">
            Uses
          </h1>
          <p className="text-text-muted leading-relaxed max-w-xl">
            A living document of the software and tools I rely on. Updated when
            things change.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl space-y-14">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                  {section.label}
                </p>
                <div>
                  {section.items.map((item, i, arr) => (
                    <div
                      key={item.title}
                      className={`py-4 ${i < arr.length - 1 ? "border-b border-border-primary/40" : ""}`}
                    >
                      <p className="text-sm font-semibold text-text-primary mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Uses;
