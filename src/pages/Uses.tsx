import Page from "../components/Page";
import SEO from "../components/SEO";

function Uses() {
  return (
    <Page>
      <SEO
        title="Uses – Abhiyan Sainju"
        description="The hardware, software, and tools Abhiyan Sainju uses day to day."
      />
      <section className="py-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-primary/60" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
              Setup
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 font-heading">
            Uses
          </h1>
          <p className="text-text-muted leading-relaxed mb-16">
            A living document of the hardware and software I rely on. Updated
            when things change.
          </p>

          <div className="space-y-14">
            {/* Hardware */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Hardware
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    MacBook Pro M3
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Primary machine. Fast enough that I stopped thinking about
                    the machine.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    External Monitor
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Extra screen real estate for running dev server + browser
                    side by side.
                  </span>
                </li>
              </ul>
            </div>

            {/* Editor */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Editor
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Cursor</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    VS Code fork with AI built in. I use it for everything now.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">VS Code</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Fallback and for anything that needs a clean slate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Terminal */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Terminal
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">iTerm2</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Zsh with a minimal prompt. No plugins I don't understand.
                  </span>
                </li>
              </ul>
            </div>

            {/* Stack & Services */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Stack & Services
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Vercel</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Frontend deployments. Zero config for Next.js and Vite
                    projects.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">GitHub</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    All code lives here. I use GitHub Actions for CI/CD.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    Cloudflare
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    DNS, domain management, and Workers for edge functions.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Render</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Backend API deployments. FastAPI services run here.
                  </span>
                </li>
              </ul>
            </div>

            {/* Productivity */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Productivity
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Notion</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Notes, project planning, and research dumps.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Figma</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    UI work and quick wireframes before writing any code.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">Chrome</span>
                  <span className="text-text-muted text-sm mt-0.5">
                    DevTools are still the best. React and Redux extensions
                    loaded.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Uses;
