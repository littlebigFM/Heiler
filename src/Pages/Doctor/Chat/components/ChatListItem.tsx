import { useState } from "react";
import { mockPatients } from "../../../../Data/mockData";
import { chats } from "../data/chats";
import type { Chat } from "../types/chat.types";

interface Props {
  chat: Chat;
  active: boolean;
  onClick: () => void;
}

const ChatListItem = ({ chat, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-start
        gap-3
        px-4
        py-4
       hover:bg-secondary
        transition-all
        text-left
        cursor-pointer
        
      `}
    >
      {/* AVATAR */}
      <div className="relative shrink-0">
        <img
          src={chat.avatar}
          alt={chat.participantName}
          className="w-12 h-12 rounded-full object-cover"
        />

        {chat.online && (
          <span
            className="
              absolute
              bottom-0
              right-0
              w-3
              h-3
              rounded-full
              bg-[#00B45E]
              border-2
              border-white
            "
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        {/* TOP */}
        <div className="flex items-center justify-between gap-2">
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
                bg-[#EEF7F1]
                text-primary
                whitespace-nowrap
              "
            >
              {chat.participantRole}
            </span>
          </div>

          <p
            className="
              text-[12px]
              text-[#8E8E93]
              whitespace-nowrap
            "
          >
            {chat.lastMessageTime}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-2 mt-1">
          <p
            className="
              text-[13px]
              text-[#8E8E93]
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
                px-1
                rounded-full
                bg-[#00A651]
                flex
                items-center
                justify-center
                text-white
                text-[10px]
                font-medium
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

export default ChatListItem;
