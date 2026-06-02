import { chats } from "../data/chats";
import ChatCard from "./ChatCard";
import type { Chat } from "../types/chat.types";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface Props {
  selectedChat: Chat;
  onSelectChat: (chat: Chat) => void;
}

const ChatList = ({ selectedChat, onSelectChat }: Props) => {
  return (
    <div
      className="
        w-full
        md:w-[38%]
        xl:w-[32%]
        border-r
        border-[#ECECEC]
        flex
        flex-col
        bg-white
      "
    >
      {/* SEARCH */}
      <div className="px-4 py-4 border-b border-[#F5F5F5]">
        <div className="flex items-center gap-3">
          <button
            className="
              w-9
              h-9
              rounded-full
              bg-primary
              text-white
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <HiOutlinePencilAlt size={18} />
          </button>

          <div
            className="
              flex-1
              h-10
              rounded-full
              bg-[#F8F8F8]
              flex
              items-center
              px-4
              gap-2
            "
          >
            <FiSearch className="text-[#A1A1A1]" />

            <input
              type="text"
              placeholder="Search anything..."
              className="
                bg-transparent
                outline-none
                text-sm
                flex-1
              "
            />
          </div>
        </div>
      </div>

      {/* CHATS */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatCard
            key={chat.id}
            chat={chat}
            active={selectedChat.id === chat.id}
            onClick={() => onSelectChat(chat)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
