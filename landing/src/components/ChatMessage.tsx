import { useState } from "react";
import type { ChatMessage as ChatMessageType } from "./chatbot-data";

interface ChatMessageProps {
  message: ChatMessageType;
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-700/80 text-emerald-400 text-xs font-mono">$1</code>')
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="mt-2 p-3 rounded-lg bg-slate-900/80 border border-slate-700/50 overflow-x-auto group/code relative"><button class="absolute top-2 right-2 p-1 rounded bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50 opacity-0 group-hover/code:opacity-100 transition-all" onclick="navigator.clipboard.writeText(this.nextElementSibling.textContent)"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button><code class="text-xs text-slate-300 font-mono">$2</code></pre>')
    .replace(/\n/g, '<br/>');
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-3 animate-in fade-in slide-in-from-bottom-2 duration-200`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          message.isUser
            ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-br-sm"
            : "bg-slate-800/80 border border-slate-700/50 text-slate-200 rounded-bl-sm"
        }`}
      >
        {!message.isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-violet-400">Second Brain AI</span>
          </div>
        )}
        <div
          className="text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
        />
        <div className={`text-[10px] mt-1.5 ${message.isUser ? "text-white/50 text-right" : "text-slate-500"}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
