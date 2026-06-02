import type { Chat } from "../types/chat.types";

interface Props {
  chat: Chat;
  active: boolean;
  onClick: () => void;
}

const ChatCard = ({ chat, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-start
        gap-3
        px-4
        py-3
        transition-all
        border-b
        border-[#F5F5F5]
        hover:bg-[#FAFAFA]
        ${active ? "bg-[#F8FFFB]" : ""}
      `}
    >
      {/* AVATAR */}
      <div className="relative">
        <img
          src={chat.avatar}
          alt={chat.participantName}
          className="w-12 h-12 rounded-full object-cover"
        />

        {chat.online && (
          <div
            className="
              absolute
              bottom-0
              right-0
              w-3
              h-3
              rounded-full
              bg-[#16C15E]
              border-2
              border-white
            "
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 text-left min-w-0">
        {/* TOP */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <h3
              className="
                text-[15px]
                font-semibold
                text-[#1B1B1B]
                truncate
              "
            >
              {chat.participantName}
            </h3>

            <span
              className="
                text-[10px]
                px-2
                py-0.5
                rounded-full
                bg-[#F044A7]
                text-white
                whitespace-nowrap
              "
            >
              {chat.participantRole}
            </span>
          </div>

          <p
            className="
              text-[11px]
              text-[#8B8B8B]
              whitespace-nowrap
            "
          >
            {chat.lastMessageTime}
          </p>
        </div>

        {/* MESSAGE */}
        <div className="flex items-center justify-between mt-1 gap-3">
          <p
            className="
              text-[13px]
              text-[#8B8B8B]
              truncate
            "
          >
            {chat.lastMessage}
          </p>

          {chat.unread > 0 && (
            <div
              className="
                min-w-5
                h-5
                rounded-full
                bg-primary
                text-white
                text-[10px]
                flex
                items-center
                justify-center
                px-1
              "
            >
              {chat.unread}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChatCard;
