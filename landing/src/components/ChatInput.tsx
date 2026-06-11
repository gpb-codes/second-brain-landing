"use client";

import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t border-slate-700/50"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu pregunta..."
        disabled={disabled}
        className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="p-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:from-violet-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  );
}
