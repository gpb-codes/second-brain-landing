import type { ChatMessage as ChatMessageType } from "./chatbot-data";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          message.isUser
            ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
            : "bg-slate-800 border border-slate-700 text-slate-200"
        }`}
      >
        {!message.isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
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
            <span className="text-xs font-medium text-emerald-400">
              Second Brain AI
            </span>
          </div>
        )}
        <div className="text-sm leading-relaxed whitespace-pre-line">
          {message.text}
        </div>
        <div
          className={`text-xs mt-2 ${
            message.isUser ? "text-white/60" : "text-slate-500"
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
