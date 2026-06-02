import type { Message } from "../types/chat.types";

interface Props {
  message: Message;
}

const ChatMessage = ({ message }: Props) => {
  const isDoctor = message.sender === "doctor";

  return (
    <div className={`flex ${isDoctor ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[75%]
          px-4
          py-3
          rounded-2xl
          text-sm
          ${
            isDoctor
              ? "bg-[#F8FFFB] text-[#1B1B1B] rounded-br-md"
              : "bg-white text-[#1B1B1B] border border-[#ECECEC] rounded-bl-md"
          }
        `}
      >
        <p className="leading-relaxed">{message.content}</p>

        <p
          className={`
            text-[10px]
            mt-2
            text-[#7C7C7C]
          `}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
