import { useNavigate } from "react-router-dom";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import {
  Home,
  Code,
  Briefcase,
  Award,
  Camera,
  Mail,
  FileText,
  Github,
  Linkedin,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import { useTheme } from "../../contexts/useTheme";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { themeState, toggleTheme } = useTheme();

  // Listen for ⌘K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command Menu */}
      <Command className="relative max-w-lg w-full mx-4 bg-bg-card rounded-2xl shadow-2xl border border-border-primary overflow-hidden">
        <div className="flex items-center border-b border-border-primary px-4">
          <svg
            className="w-5 h-5 text-text-muted mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full py-3 text-text-primary bg-transparent outline-none placeholder:text-text-muted"
          />
        </div>

        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-text-muted">
            No results found.
          </Command.Empty>

          {/* Pages Group */}
          <Command.Group heading="Pages" className="mb-2">
            <Command.Item
              onSelect={() => handleNavigate("/")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/projects")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Code className="w-4 h-4" />
              <span>Projects</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/experience")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/skills")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Award className="w-4 h-4" />
              <span>Skills</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/photography")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Camera className="w-4 h-4" />
              <span>Photography</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/contact")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Command.Item>

            <Command.Item
              onSelect={() => handleNavigate("/resume")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator className="h-px bg-border-primary my-1" />

          {/* Actions Group */}
          <Command.Group heading="Actions" className="mb-2">
            <Command.Item
              onSelect={() => {
                window.open("/resume.pdf", "_blank");
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </Command.Item>

            <Command.Item
              onSelect={handleToggleTheme}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              {themeState.isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span>Toggle Theme</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator className="h-px bg-border-primary my-1" />

          {/* Social Links Group */}
          <Command.Group heading="Social" className="mb-2">
            <Command.Item
              onSelect={() =>
                handleExternalLink("https://github.com/aabhiyann")
              }
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </Command.Item>

            <Command.Item
              onSelect={() =>
                handleExternalLink("https://linkedin.com/in/abhiyansainju")
              }
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary aria-selected:bg-accent-primary/10 aria-selected:text-accent-primary"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
};
