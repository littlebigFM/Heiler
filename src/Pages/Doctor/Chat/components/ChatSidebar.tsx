// import { FiSearch } from "react-icons/fi";
// import { HiOutlinePencilAlt } from "react-icons/hi";

// import ChatListItem from "./ChatListItem";
// import { Chat } from "../types/chat.types";
// import { BiSolidMessageRoundedAdd } from "react-icons/bi";
// import SearchInput from "../../../../Components/Common/SearchInput";
// import { useState } from "react";

// interface Props {
//   chats: Chat[];
//   selectedChat: Chat | null;
//   onSelectChat: (chat: Chat) => void;
// }

// const ChatSidebar = ({ chats, selectedChat, onSelectChat }: Props) => {
//   const [search, setSearch] = useState("");

//   const filteredPatients = chats.filter((patient) =>
//     patient.participantName.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div
//       //  w-full
//       //     md:w-[35%]
//       //     xl:w-[30%]

//       className="
//       w-full
//        min-[1030px]:w-[40%]
//         border-r-2
//         border-[#a8a4a440]
//         bg-[#FAFAFA]
//         flex
//         flex-col
//         h-full
//       "
//     >
//       {/* TOP */}
//       <div className="p-4 my-4">
//         <div className="flex items-center gap-3">
//           <button className="cursor-pointer">
//             <BiSolidMessageRoundedAdd className="text-primary" size={20} />
//           </button>

//           <SearchInput
//             className="w-full placeholder:text-[#A1A1A1] rounded-full"
//             placeholder="Search anything..."
//             value={search}
//             onChange={setSearch}
//           />

//           <button className="cursor-pointer text-[#474747]">Edit</button>
//         </div>
//       </div>

//       {/* CHAT LIST */}
//       <div className="flex flex-col gap-2 overflow-y-auto">
//         {filteredPatients.map((chat) => (
//           <ChatListItem
//             key={chat.id}
//             chat={chat}
//             active={selectedChat?.id === chat.id}
//             onClick={() => onSelectChat(chat)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatSidebar;
import { useState } from "react";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import SearchInput from "../../../../Components/Common/SearchInput";
import ChatListItem from "./ChatListItem";
import type { Chat } from "../types/chat.types";

interface Props {
  chats: Chat[];
  selectedChat: Chat | null;
  onSelectChat: (chat: Chat) => void;
}

const ChatSidebar = ({ chats, selectedChat, onSelectChat }: Props) => {
  const [search, setSearch] = useState("");

  // Filter the incoming chats array based on the search state input
  const filteredPatients = chats.filter((patient) =>
    patient.participantName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
        w-full
        min-[1030px]:w-[40%]
        border-r-2
        border-[#a8a4a440]
        bg-[#FAFAFA]
        flex
        flex-col
        h-full
      "
    >
      {/* TOP SEARCH BAR CONTAINER */}
      <div className="p-4 my-4">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer">
            <BiSolidMessageRoundedAdd className="text-primary" size={20} />
          </button>

          <SearchInput
            className="w-full placeholder:text-[#A1A1A1] rounded-full"
            placeholder="Search anything..."
            value={search}
            onChange={setSearch}
          />

          <button className="cursor-pointer text-[#474747]">Edit</button>
        </div>
      </div>

      {/* CHAT LIST */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {/* Loop through filteredPatients so checking and navigation parameters work reactively */}
        {filteredPatients.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            active={selectedChat?.id === chat.id}
            onClick={() => onSelectChat(chat)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
