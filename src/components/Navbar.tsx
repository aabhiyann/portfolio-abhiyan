import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, colorUtils, designSystem } from "./ui";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentTheme: string;
  switchColorTheme: (theme: string) => void; // eslint-disable-line no-unused-vars
}

interface ThemeOption {
  id: string;
  name: string;
  color: string;
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  currentTheme,
  switchColorTheme: switchTheme,
}) => {
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const availableThemes: ThemeOption[] = [
    { id: "default", name: "Default", color: "#f9a825" },
    { id: "kathmanduFog", name: "Kathmandu Fog", color: "#f472b6" },
    { id: "creativeVoltage", name: "Creative Voltage", color: "#8b5cf6" },
  ];

  const headerStyles: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: designSystem.zIndex.sticky,
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${colorUtils.getThemeColor(
      "border",
      isDark,
      currentTheme
    )}`,
    backgroundColor: `${colorUtils.getThemeColor(
      "surface",
      isDark,
      currentTheme
    )}CC`,
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: "80rem",
    margin: "0 auto",
    padding: `0 ${designSystem.spacing.lg}`,
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyles: React.CSSProperties = {
    fontWeight: designSystem.typography.fontWeight.semibold,
    fontFamily: designSystem.typography.fontFamily.heading,
    color: colorUtils.getThemeColor("text", isDark, currentTheme),
    textDecoration: "none",
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
  };

  const navStyles: React.CSSProperties = {
    display: "none",
    gap: designSystem.spacing.lg,
    alignItems: "center",
  };

  const linkStyles: React.CSSProperties = {
    fontSize: designSystem.typography.fontSize.sm,
    fontWeight: designSystem.typography.fontWeight.medium,
    color: colorUtils.getThemeColor("textSecondary", isDark, currentTheme),
    textDecoration: "none",
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
  };

  const controlsStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: designSystem.spacing.sm,
  };

  const buttonStyles: React.CSSProperties = {
    padding: designSystem.spacing.sm,
    borderRadius: designSystem.borderRadius.lg,
    backgroundColor: colorUtils.getThemeColor("surface", isDark, currentTheme),
    color: colorUtils.getThemeColor("text", isDark, currentTheme),
    border: `1px solid ${colorUtils.getThemeColor(
      "border",
      isDark,
      currentTheme
    )}`,
    cursor: "pointer",
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
  };

  const themeMenuStyles: React.CSSProperties = {
    position: "absolute",
    right: 0,
    top: "100%",
    marginTop: designSystem.spacing.sm,
    width: "12rem",
    borderRadius: designSystem.borderRadius.lg,
    boxShadow: designSystem.shadows.lg,
    border: `1px solid ${colorUtils.getThemeColor(
      "border",
      isDark,
      currentTheme
    )}`,
    backgroundColor: colorUtils.getThemeColor("surface", isDark, currentTheme),
    padding: designSystem.spacing.sm,
  };

  const themeOptionStyles: React.CSSProperties = {
    width: "100%",
    textAlign: "left",
    padding: `${designSystem.spacing.sm} ${designSystem.spacing.md}`,
    fontSize: designSystem.typography.fontSize.sm,
    color: colorUtils.getThemeColor("text", isDark, currentTheme),
    backgroundColor: "transparent",
    border: "none",
    borderRadius: designSystem.borderRadius.md,
    cursor: "pointer",
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
    display: "flex",
    alignItems: "center",
    gap: designSystem.spacing.md,
  };

  const handleThemeSelect = (themeId: string) => {
    switchTheme(themeId);
    setShowThemeMenu(false);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = colorUtils.getThemeColor(
      "surface",
      isDark,
      currentTheme
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "transparent";
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <Link to="/" style={logoStyles}>
          <Typography
            variant="h6"
            color="primary"
            isDark={isDark}
            currentTheme={currentTheme}
          >
            AS
          </Typography>
        </Link>

        <nav style={navStyles} aria-label="Main navigation">
          <Link to="/projects" style={linkStyles}>
            <Typography
              variant="caption"
              color="secondary"
              isDark={isDark}
              currentTheme={currentTheme}
            >
              Projects
            </Typography>
          </Link>
          <Link to="/photography" style={linkStyles}>
            <Typography
              variant="caption"
              color="secondary"
              isDark={isDark}
              currentTheme={currentTheme}
            >
              Photography
            </Typography>
          </Link>
          <Link to="/deep-dives" style={linkStyles}>
            <Typography
              variant="caption"
              color="secondary"
              isDark={isDark}
              currentTheme={currentTheme}
            >
              Deep Dives
            </Typography>
          </Link>
          <Link to="/about" style={linkStyles}>
            <Typography
              variant="caption"
              color="secondary"
              isDark={isDark}
              currentTheme={currentTheme}
            >
              About
            </Typography>
          </Link>
        </nav>

        <div style={controlsStyles}>
          {/* Color Theme Selector */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              style={buttonStyles}
              aria-label="Select color theme"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-4 4H9"
                />
              </svg>
            </button>

            {showThemeMenu && (
              <div style={themeMenuStyles}>
                {availableThemes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => handleThemeSelect(themeOption.id)}
                    style={{
                      ...themeOptionStyles,
                      backgroundColor:
                        currentTheme === themeOption.id
                          ? `${colorUtils.getAccentColor(
                              "primary",
                              isDark,
                              currentTheme
                            )}20`
                          : "transparent",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      style={{
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        border: `1px solid ${colorUtils.getThemeColor(
                          "border",
                          isDark,
                          currentTheme
                        )}`,
                        backgroundColor: themeOption.color,
                      }}
                    />
                    <Typography
                      variant="small"
                      color="primary"
                      isDark={isDark}
                      currentTheme={currentTheme}
                    >
                      {themeOption.name}
                    </Typography>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            style={buttonStyles}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
