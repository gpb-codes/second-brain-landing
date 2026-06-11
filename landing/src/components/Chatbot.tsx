"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import {
  findResponse,
  quickActions,
  type ChatMessage as ChatMessageType,
} from "./chatbot-data";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome: ChatMessageType = {
        id: "welcome",
        text: "Hola! Soy el asistente de Second Brain. Puedo ayudarte a:\n\n- Entender que es PACE\n- Guiarte con la instalacion\n- Explicar scripts y herramientas\n\nEn que puedo ayudarte?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcome]);
    }
  }, [isOpen, messages.length]);

  const handleSend = (text: string) => {
    const userMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);
    setTimeout(() => {
      const response = findResponse(text);
      const botMessage: ChatMessageType = {
        id: `bot-${Date.now()}`,
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center ${
          isOpen
            ? "bg-slate-700 hover:bg-slate-600"
            : "bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 shadow-violet-500/25 hover:shadow-violet-500/40"
        }`}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
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
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] rounded-2xl bg-slate-900 border border-slate-700/50 shadow-2xl shadow-black/40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Second Brain AI
              </h3>
              <p className="text-xs text-emerald-400">En linea</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 p-3 overflow-x-auto border-b border-slate-700/50 scrollbar-hide">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleSend(action.message)}
                className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full bg-slate-800 border border-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" />
                    <div
                      className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      )}
    </>
  );
}
