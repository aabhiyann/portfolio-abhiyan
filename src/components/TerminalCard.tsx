import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const script = [
  "> implai --init",
  "> Initializing Neural Network...",
  "> Loading PyTorch weights...",
  "> Connecting to AWS Region: us-east-1...",
  "> Deploying Microservices...",
  "> System Online: Ready to Build.",
];

const TerminalCard: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= script.length) return;

    const currentLineText = script[currentLineIndex];

    if (currentCharIndex < currentLineText.length) {
      const timeout = setTimeout(
        () => {
          setLines((prev) => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = currentLineText.slice(
              0,
              currentCharIndex + 1,
            );
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        },
        30 + Math.random() * 30,
      ); // Random typing speed

      return () => clearTimeout(timeout);
    } else {
      // Line finished
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 400); // Pause between lines

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full h-full bg-slate-950/90 backdrop-blur-md rounded-lg border border-slate-800/60 p-4 font-mono text-xs overflow-hidden shadow-2xl flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-3 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        <div className="ml-auto text-[10px] text-slate-400">bash — 80x24</div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 space-y-1 text-slate-300 font-medium">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-emerald-400 mr-2">$</span>
            <span
              className={
                line.includes("Error")
                  ? "text-red-400"
                  : line.includes("Online")
                    ? "text-emerald-400"
                    : line.includes("Loading")
                      ? "text-blue-400"
                      : "text-slate-200"
              }
            >
              {line}
            </span>
          </motion.div>
        ))}
        {/* Cursor */}
        {currentLineIndex < script.length && (
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-emerald-500/50 inline-block align-middle ml-1"
          />
        )}
      </div>
    </div>
  );
};

export default TerminalCard;
