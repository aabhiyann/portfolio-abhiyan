import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import ThemeSlider from "./ui/ThemeSlider";
import { useTheme } from "../contexts/ThemeContext";
import { Typography, Button, colorUtils, designSystem } from "./ui";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [footballBounce, setFootballBounce] = useState(false);
  const { themeState, toggleTheme, setIsAutoMode } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
    setIsAutoMode(false); // Disable auto mode when manually toggling
  };

  const handleFootballClick = () => {
    setFootballBounce(true);
    setTimeout(() => setFootballBounce(false), 1000);
  };

  const footerStyles: React.CSSProperties = {
    borderTop: `1px solid ${colorUtils.getThemeColor('border', themeState.isDarkMode, themeState.currentTheme)}`,
    backgroundColor: colorUtils.getThemeColor('surface', themeState.isDarkMode, themeState.currentTheme),
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: `${designSystem.spacing['4xl']} ${designSystem.spacing.lg}`,
  };

  const sectionStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: designSystem.spacing.lg,
    marginBottom: designSystem.spacing['3xl'],
  };

  const textCenterStyles: React.CSSProperties = {
    textAlign: 'center',
  };

  const controlsStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: designSystem.spacing.md,
  };

  const statusStyles: React.CSSProperties = {
    fontSize: designSystem.typography.fontSize.xs,
    color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        {/* Row 1: Interactive Theme Switcher */}
        <motion.div
          style={sectionStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.slow / 1000 }}
        >
          <div style={textCenterStyles}>
            <Typography 
              variant="h5" 
              color="primary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ marginBottom: designSystem.spacing.sm }}
            >
              Interactive Theme Timeline
            </Typography>
            <Typography 
              variant="caption" 
              color="secondary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ maxWidth: '28rem' }}
            >
              Drag the slider to change the time of day and see the theme
              transition between light and dark modes automatically.
            </Typography>
          </div>

          <ThemeSlider />

          {/* Manual theme toggle button */}
          <div style={controlsStyles}>
            <Button
              onClick={handleThemeToggle}
              variant="primary"
              size="md"
              isDark={themeState.isDarkMode}
              currentTheme={themeState.currentTheme}
              aria-label={`Switch to ${themeState.isDarkMode ? "light" : "dark"} mode`}
            >
              {themeState.isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>

            <Typography variant="small" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
              {themeState.isAutoMode ? "Auto mode active" : "Manual mode active"}
            </Typography>
          </div>
        </motion.div>

        {/* Row 2: Links */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: designSystem.spacing.xl,
            marginBottom: designSystem.spacing['3xl'],
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.slow / 1000 }}
        >
          <div>
            <Typography 
              variant="small" 
              color="primary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ 
                fontWeight: designSystem.typography.fontWeight.semibold,
                marginBottom: designSystem.spacing.md,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Connect
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.spacing.md }}>
              <a
                href="https://linkedin.com/in/abhiyansainju"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  LinkedIn
                </Typography>
              </a>
              <a
                href="https://github.com/aabhiyann"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  GitHub
                </Typography>
              </a>
              <a
                href="mailto:abhiyan@example.com"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Email
                </Typography>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Resume
                </Typography>
              </a>
            </div>
          </div>

          <div>
            <Typography 
              variant="small" 
              color="primary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ 
                fontWeight: designSystem.typography.fontWeight.semibold,
                marginBottom: designSystem.spacing.md,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Work
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.spacing.md }}>
              <Link
                to="/projects"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Projects
                </Typography>
              </Link>
              <Link
                to="/photography"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Photography
                </Typography>
              </Link>
              <Link
                to="/deep-dives"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Deep Dives
                </Typography>
              </Link>
              <Link
                to="/about"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  About
                </Typography>
              </Link>
            </div>
          </div>

          <div>
            <Typography 
              variant="small" 
              color="primary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ 
                fontWeight: designSystem.typography.fontWeight.semibold,
                marginBottom: designSystem.spacing.md,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Resources
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.spacing.md }}>
              <a
                href="/design-system"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Design System
                </Typography>
              </a>
              <a
                href="/tech-stack"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Tech Stack
                </Typography>
              </a>
              <a
                href="/contact"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Contact
                </Typography>
              </a>
            </div>
          </div>

          <div>
            <Typography 
              variant="small" 
              color="primary" 
              isDark={themeState.isDarkMode} 
              currentTheme={themeState.currentTheme}
              style={{ 
                fontWeight: designSystem.typography.fontWeight.semibold,
                marginBottom: designSystem.spacing.md,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Legal
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.spacing.md }}>
              <a
                href="/privacy"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Privacy Policy
                </Typography>
              </a>
              <a
                href="/terms"
                style={{
                  color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme),
                  textDecoration: 'none',
                  transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorUtils.getAccentColor('primary', themeState.isDarkMode, themeState.currentTheme);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme);
                }}
              >
                <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  Terms of Service
                </Typography>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Currently Listening */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: designSystem.spacing.xl,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.2,
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: designSystem.spacing.md,
            backgroundColor: `${colorUtils.getThemeColor('text', themeState.isDarkMode, themeState.currentTheme)}08`,
            borderRadius: designSystem.borderRadius.full,
            padding: `${designSystem.spacing.md} ${designSystem.spacing.lg}`,
          }}>
            <div style={{
              width: '0.75rem',
              height: '0.75rem',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }}></div>
            <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
              Currently listening:{" "}
              <Typography variant="caption" color="primary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} style={{ fontWeight: designSystem.typography.fontWeight.medium }}>
                "Bohemian Rhapsody" - Queen
              </Typography>
            </Typography>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: colorUtils.getThemeColor('textMuted', themeState.isDarkMode, themeState.currentTheme) }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Row 3: FC Barcelona CTA with Easter Egg */}
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.4,
          }}
        >
          <Typography variant="body" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} style={{ marginBottom: designSystem.spacing.sm }}>
            Let's build, collaborate, or talk{" "}
            <button
              onClick={handleFootballClick}
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                animation: footballBounce ? 'bounce 1s infinite' : 'none',
                transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
              }}
            >
              FC Barcelona ⚽
            </button>
          </Typography>
          <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
            Visca Barça! 🔵🔴
          </Typography>
        </motion.div>

        {/* Copyright */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: designSystem.spacing['3xl'],
            paddingTop: designSystem.spacing.xl,
            borderTop: `1px solid ${colorUtils.getThemeColor('borderMuted', themeState.isDarkMode, themeState.currentTheme)}`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.6,
          }}
        >
          <Typography variant="caption" color="muted" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
            © 2025 Abhiyan Sainju. Built with ❤️ using React, Vite, and Tailwind CSS.
          </Typography>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
