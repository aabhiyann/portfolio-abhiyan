/**
 * Interactive Theme Timeline Slider
 * 
 * A slider component that allows users to change the time of day
 * and automatically switches between light and dark themes.
 * Based on the designer's inspiration code.
 */

import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

export interface ThemeSliderProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeSlider: React.FC<ThemeSliderProps> = ({ 
  className = '', 
  showLabel = true 
}) => {
  const { themeState, setTimeRatio, setIsAutoMode, updateThemeFromTime } = useTheme();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Update theme based on time ratio
  const updateTheme = useCallback((ratio: number) => {
    const shouldBeDark = ratio < 0.25 || ratio > 0.75;
    updateThemeFromTime(ratio);
  }, [updateThemeFromTime]);

  // Handle mouse/touch interactions
  const handleInteraction = useCallback((clientX: number) => {
    if (!timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    let newRatio = (clientX - rect.left) / rect.width;
    newRatio = Math.max(0, Math.min(1, newRatio)); // Clamp between 0 and 1
    
    setTimeRatio(newRatio);
    updateTheme(newRatio);
    setIsAutoMode(true); // Enable auto mode when user interacts
  }, [setTimeRatio, updateTheme, setIsAutoMode]);

  // Set initial time on component mount and window resize
  const setInitialTime = useCallback(() => {
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    const initialRatio = totalMinutes / (24 * 60);
    
    if (themeState.isAutoMode) {
      setTimeRatio(initialRatio);
      updateTheme(initialRatio);
    }
  }, [themeState.isAutoMode, setTimeRatio, updateTheme]);

  // Mouse/Touch event handlers
  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleInteraction(clientX);
  };

  const handleInteractionMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleInteraction(clientX);
  }, [isDragging, handleInteraction]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Effect to manage global event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleInteractionMove);
      window.addEventListener('touchmove', handleInteractionMove, { passive: false });
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchend', handleInteractionEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('touchmove', handleInteractionMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleInteractionMove, handleInteractionEnd]);

  // Initialize time on mount
  useEffect(() => {
    setInitialTime();
    window.addEventListener('resize', setInitialTime);
    return () => window.removeEventListener('resize', setInitialTime);
  }, [setInitialTime]);

  // Calculate handle position and theme
  const handlePosition = themeState.timeRatio * 100;
  const isDarkMode = themeState.isDarkMode;
  const handleColor = isDarkMode ? '#8B5CF6' : '#FBBF24'; // Purple for dark, yellow for light

  // Generate time labels
  const timeLabels = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const ampm = hour < 12 ? 'AM' : 'PM';
    const isNight = hour < 6 || hour > 18;
    
    return {
      hour,
      displayHour,
      ampm,
      isNight,
      position: (hour / 24) * 100,
    };
  });

  return (
    <div className={`w-full max-w-md flex flex-col items-center space-y-4 ${className}`}>
      {/* Interactive Timeline */}
      <div 
        ref={timelineRef}
        className="w-full h-10 flex items-center justify-between px-2 cursor-pointer relative touch-none bg-slate-100 dark:bg-slate-800 rounded-full"
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
        role="slider"
        aria-label="Time of day slider"
        aria-valuemin={0}
        aria-valuemax={24}
        aria-valuenow={themeState.timeRatio * 24}
        tabIndex={0}
        onKeyDown={(e) => {
          const step = 0.05; // 5% increments
          if (e.key === 'ArrowLeft') {
            const newRatio = Math.max(0, themeState.timeRatio - step);
            setTimeRatio(newRatio);
            updateTheme(newRatio);
            setIsAutoMode(true);
          } else if (e.key === 'ArrowRight') {
            const newRatio = Math.min(1, themeState.timeRatio + step);
            setTimeRatio(newRatio);
            updateTheme(newRatio);
            setIsAutoMode(true);
          }
        }}
      >
        {/* Tick marks for each hour */}
        {timeLabels.map(({ hour, position, isNight }) => (
          <div 
            key={hour}
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{ left: `${position}%` }}
          >
            <div 
              className={`w-0.5 h-3 rounded-full transition-colors duration-300 ${
                isNight 
                  ? 'bg-slate-400 dark:bg-slate-500' 
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          </div>
        ))}

        {/* Draggable handle */}
        <motion.div 
          className="absolute top-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-950 transition-colors duration-300 transform-gpu cursor-grab active:cursor-grabbing"
          style={{ 
            left: `${handlePosition}%`, 
            transform: `translateX(-50%) translateY(-50%)`,
            backgroundColor: handleColor 
          }}
          animate={{ 
            scale: isDragging ? 1.1 : 1,
            rotate: isDragging ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { duration: 0.3 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? (
            <Moon size={16} className="text-white" />
          ) : (
            <Sun size={16} className="text-slate-900" />
          )}
        </motion.div>

        {/* Day/Night indicators */}
        <div className="absolute -top-8 left-0 right-0 flex justify-between pointer-events-none">
          <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400">
            <Sun size={12} />
            <span>Day</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400">
            <Moon size={12} />
            <span>Night</span>
          </div>
        </div>
      </div>

      {/* Current time display */}
      <div className="text-center">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {(() => {
            const currentHour = Math.floor(themeState.timeRatio * 24);
            const currentMinute = Math.floor((themeState.timeRatio * 24 - currentHour) * 60);
            const displayHour = currentHour === 0 ? 12 : currentHour > 12 ? currentHour - 12 : currentHour;
            const ampm = currentHour < 12 ? 'AM' : 'PM';
            return `${displayHour}:${currentMinute.toString().padStart(2, '0')} ${ampm}`;
          })()}
        </p>
        {showLabel && (
          <p className="text-xs text-slate-400 dark:text-slate-500 select-none mt-1">
            {themeState.isAutoMode 
              ? "Auto mode: Drag to change time" 
              : "Manual mode: Theme locked"
            }
          </p>
        )}
      </div>
    </div>
  );
};

export default ThemeSlider;
