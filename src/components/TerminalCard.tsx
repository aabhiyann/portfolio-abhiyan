import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { getCommand } from "./Terminal/commands";

interface HistoryEntry {
  input: string;
  output: string;
}

const TerminalCard: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      input: "",
      output: `Welcome to my portfolio terminal!
Type 'help' to see available commands.`,
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new history
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string): string => {
    const trimmed = cmd.trim();
    if (!trimmed) return "";

    const [commandName, ...args] = trimmed.split(" ");
    const command = getCommand(commandName);

    if (!command) {
      return `Command not found: ${commandName}
Type 'help' for available commands.`;
    }

    return command.execute(args);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const output = handleCommand(input);

    // Handle clear command
    if (output === "CLEAR_TERMINAL") {
      setHistory([
        {
          input: "",
          output: "Terminal cleared. Type 'help' for commands.",
        },
      ]);
      setInput("");
      return;
    }

    setHistory([...history, { input, output }]);
    setInput("");
  };

  // Focus input when clicking terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleTerminalClick}
      className="w-full h-full bg-black backdrop-blur-md rounded-xl border border-accent-primary/20 shadow-2xl shadow-accent-primary/5 p-5 font-mono text-sm overflow-hidden flex flex-col cursor-text hover:border-accent-primary/30 transition-colors"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-semibold tracking-wider">
          <span className="text-accent-primary">●</span>
          <span>INTERACTIVE MODE</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-accent-primary/20 scrollbar-track-transparent pr-2"
      >
        {history.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            {entry.input && (
              <div className="flex items-start gap-2">
                <span className="text-accent-primary font-bold select-none flex-shrink-0">
                  ➜
                </span>
                <span className="text-slate-300 font-medium">
                  {entry.input}
                </span>
              </div>
            )}
            {entry.output && (
              <div className="text-slate-400 whitespace-pre-wrap pl-5 leading-relaxed text-[13px]">
                {entry.output}
              </div>
            )}
          </motion.div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-start gap-2 pt-2">
          <span className="text-accent-primary font-bold select-none flex-shrink-0 mt-0.5">
            ➜
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-slate-300 font-medium outline-none caret-accent-primary placeholder:text-slate-600"
            placeholder="type 'help' for commands..."
            autoFocus
            spellCheck={false}
          />
        </form>

        {/* Blinking Cursor Effect */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-accent-primary inline-block ml-7"
        />
      </div>

      {/* Terminal Footer Hint */}
      <div className="mt-3 pt-3 border-t border-slate-800/50 text-[10px] text-slate-600 flex items-center justify-between">
        <span>Press Enter to execute</span>
        <span>Type 'clear' to reset</span>
      </div>
    </div>
  );
};

export default TerminalCard;
