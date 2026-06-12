import type { ChatMessage as ChatMessageType } from "./chatbot-data";

interface ChatMessageProps {
  message: ChatMessageType;
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-700/80 text-emerald-400 text-xs font-mono">$1</code>')
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="mt-2 p-3 rounded-lg bg-slate-900/80 border border-slate-700/50 overflow-x-auto"><code class="text-xs text-slate-300 font-mono">$2</code></pre>')
    .replace(/\n/g, '<br/>');
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-3`}>
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
