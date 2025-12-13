import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/useTheme";
import Typography from "./ui/Typography";
import { resumeContext } from "../data/ResumeContext";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose }) => {
  const { themeState } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add a welcome message when the chatbot is opened for the first time
      setMessages([
        {
          text: "Hello! I'm Abhiyan's AI assistant. Ask me anything about his skills, projects, or experience.",
          sender: "ai",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      const errorMsg = "API Key is not configured. This feature is disabled.";
      setMessages((prev) => [...prev, { text: errorMsg, sender: "ai" }]);
      setIsLoading(false);
      setError(errorMsg);
      return;
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const prompt = `
      You are a professional, helpful AI assistant for Abhiyan Sainju's portfolio website.
      Your goal is to answer questions about Abhiyan based ONLY on the context provided below.
      Do not make up information. If the answer is not in the context, say "I don't have information on that, but you can reach out to Abhiyan to ask."
      Keep your answers concise and professional.

      CONTEXT:
      ${resumeContext}

      ---
      QUESTION:
      "${input}"

      ANSWER:
    `;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) {
        throw new Error(
          "The AI is currently unavailable. Please try again later.",
        );
      }

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!aiText) {
        throw new Error("The AI returned an empty response.");
      }

      const aiResponse: Message = { text: aiText, sender: "ai" };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred.";
      setMessages((prev) => [...prev, { text: errorMessage, sender: "ai" }]);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-24 right-8 w-96 h-[32rem] shadow-2xl rounded-2xl overflow-hidden flex flex-col z-50 bg-bg-surface border border-border-primary"
        >
          {/* Header */}
          <header
            className={`p-4 flex justify-between items-center border-b ${themeState.isDarkMode ? "border-white/10" : "border-black/10"}`}
          >
            <Typography
              variant="h6"
              color="primary"
              isDark={themeState.isDarkMode}
            >
              AI Concierge
            </Typography>
            <button
              onClick={onClose}
              className="p-1 rounded-full transition-colors hover:bg-chat-bot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === "user" ? "btn-primary" : "bg-chat-bot"}`}
                  >
                    <Typography variant="body">{msg.text}</Typography>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-chat-bot">
                    <Typography variant="body" className="animate-pulse">
                      ...
                    </Typography>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-chat">
            {error && (
              <p className="text-center pb-2 text-sm text-red-500">{error}</p>
            )}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && !isLoading && handleSend()
                }
                placeholder="Ask about Abhiyan..."
                className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary bg-chat-input"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                className="p-3 btn-primary rounded-full transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChatbot;
