/**
 * Theme Demo Component
 * 
 * A demonstration component that showcases the theme system
 * and interactive timeline slider functionality.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSlider from './ui/ThemeSlider';
import Typography from './ui/Typography';

export const ThemeDemo: React.FC = () => {
  const { themeState, setCurrentTheme, toggleTheme } = useTheme();

  const themes = [
    { key: 'default', name: 'Yellow + Blue', description: 'Warm and professional' },
    { key: 'kathmanduFog', name: 'Kathmandu Fog', description: 'Soft and ethereal' },
    { key: 'creativeVoltage', name: 'Creative Voltage', description: 'Bold and energetic' },
  ];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-500 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" color="primary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
            Interactive Theme Timeline
          </Typography>
          <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} className="mt-4 max-w-2xl mx-auto">
            Experience the power of time-based theming. Drag the slider to change the time of day and watch as the theme automatically transitions between light and dark modes.
          </Typography>
        </motion.div>

        {/* Theme Slider */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ThemeSlider />
        </motion.div>

        {/* Theme Palette Selector */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography variant="h3" color="primary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} className="mb-6 text-center">
            Choose Your Palette
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <motion.button
                key={theme.key}
                onClick={() => setCurrentTheme(theme.key)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  themeState.currentTheme === theme.key
                    ? 'border-accent bg-accent/10'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Typography variant="h5" color="primary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                  {theme.name}
                </Typography>
                <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} className="mt-2">
                  {theme.description}
                </Typography>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Current State Display */}
        <motion.div
          className="bg-card-light dark:bg-card-dark rounded-lg p-6 border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Typography variant="h4" color="primary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme} className="mb-4">
            Current Theme State
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                <strong>Mode:</strong> {themeState.isDarkMode ? 'Dark' : 'Light'}
              </Typography>
              <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                <strong>Palette:</strong> {themes.find(t => t.key === themeState.currentTheme)?.name || themeState.currentTheme}
              </Typography>
              <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                <strong>Auto Mode:</strong> {themeState.isAutoMode ? 'Enabled' : 'Disabled'}
              </Typography>
            </div>
            <div>
              <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                <strong>Time Ratio:</strong> {(themeState.timeRatio * 100).toFixed(1)}%
              </Typography>
              <Typography variant="body" color="secondary" isDark={themeState.isDarkMode} currentTheme={themeState.currentTheme}>
                <strong>Current Time:</strong> {(() => {
                  const currentHour = Math.floor(themeState.timeRatio * 24);
                  const currentMinute = Math.floor((themeState.timeRatio * 24 - currentHour) * 60);
                  const displayHour = currentHour === 0 ? 12 : currentHour > 12 ? currentHour - 12 : currentHour;
                  const ampm = currentHour < 12 ? 'AM' : 'PM';
                  return `${displayHour}:${currentMinute.toString().padStart(2, '0')} ${ampm}`;
                })()}
              </Typography>
            </div>
          </div>
        </motion.div>

        {/* Manual Controls */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={toggleTheme}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-80 transition-opacity font-medium"
          >
            Toggle Theme Manually
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeDemo;
