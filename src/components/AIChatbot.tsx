import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/useTheme';
import { Typography } from './ui/Typography';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose }) => {
  const { themeState } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // --- AI INTEGRATION POINT ---
    // In a real application, you would make an API call to the Gemini API here.
    // For this placeholder, we'll simulate a response.
    setTimeout(() => {
      const aiResponse: Message = {
        text: `Thanks for your message: "${input}". As a demo, I'm just echoing your input. In a real app, I would provide a thoughtful response based on my training data about Abhiyan.`,
        sender: 'ai',
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed bottom-24 right-8 w-96 h-[32rem] shadow-2xl rounded-2xl overflow-hidden flex flex-col z-50 ${themeState.isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
        >
          {/* Header */}
          <header className={`p-4 flex justify-between items-center border-b ${themeState.isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
            <Typography variant="h6" color="primary" isDark={themeState.isDarkMode}>AI Concierge</Typography>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-accent-primary text-white' : (themeState.isDarkMode ? 'bg-white/10' : 'bg-black/10')}`}>
                    <Typography variant="body">{msg.text}</Typography>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${themeState.isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Typography variant="body" className="animate-pulse">...</Typography>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${themeState.isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Abhiyan..."
                className={`w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary ${themeState.isDarkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}
              />
              <button onClick={handleSend} className="p-3 bg-accent-primary text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50" disabled={isLoading}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChatbot;
