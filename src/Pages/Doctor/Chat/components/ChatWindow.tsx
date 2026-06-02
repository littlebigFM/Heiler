// import { FiMoreVertical } from "react-icons/fi";

// import type { Chat, Message } from "../types/chat.types";

// import ChatMessage from "./ChatMessage";
// import ChatInput from "./ChatInput";
// import { BsArrowLeft } from "react-icons/bs";
// // import { use } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../../../../Components/Props";
// import { BiNote } from "react-icons/bi";
// import { LuStickyNote } from "react-icons/lu";

// interface Props {
//   selectedChat: Chat;
//   messages: Message[];
//   onBack?: () => void;
// }

// const ChatWindow = ({ selectedChat, messages, onBack }: Props) => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (onBack) {
//       onBack();
//       return;
//     }

//     navigate(-1);
//   };

//   return (
//     <div className="w-[60%] flex flex-1 flex-col bg-[#FAFAFA]">
//       {/* TOP */}
//       <div
//         className="
//           h-22
//           px-5
//           bg-primary
//           flex
//           items-center
//           justify-between
//         "
//       >
//         <div className="flex items-center gap-3">
//           <BsArrowLeft
//             className="text-white cursor-pointer"
//             onClick={handleBack}
//           />

//           <div className="relative">
//             <img
//               src={selectedChat.avatar}
//               alt={selectedChat.participantName}
//               className="w-11 h-11 rounded-full object-cover"
//             />
//           </div>

//           <div>
//             <h3 className="font-semibold text-[#FFFFFF]">
//               {selectedChat.participantName}
//             </h3>

//             <p className="text-xs text-[#BFE1D1]">
//               {selectedChat.online ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>

//         {/* <button>
//           <FiMoreVertical size={20} />
//         </button> */}

//         <Button variant="ghost" className=" text-white" width={24}>
//           <LuStickyNote className="text-[white]" size={24} />
//         </Button>
//       </div>

//       {/* MESSAGES */}
//       <div
//         className="
//           flex-1
//           overflow-y-auto
//           px-5
//           py-6
//           space-y-4

//         "
//       >
//         {messages.length === 0 ? (
//           <div className="flex h-full items-center justify-center text-sm text-gray-500">
//             Chat is empty
//           </div>
//         ) : (
//           messages.map((message) => (
//             <ChatMessage key={message.id} message={message} />
//           ))
//         )}
//       </div>

//       {/* INPUT */}
//       <ChatInput />
//     </div>
//   );
// };

// export default ChatWindow;

import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Components/Props";
import { LuStickyNote } from "react-icons/lu";
import type { Chat, Message } from "../types/chat.types";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import EmptyChatState from "./EmptyChatState";

interface Props {
  selectedChat: Chat;
  messages: Message[];
  onSendMessage: (text: string) => void;
  onBack?: () => void;
}

const ChatWindow = ({
  selectedChat,
  messages,
  onSendMessage,
  onBack,
}: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate(-1);
  };

  return (
    <div className="w-[60%] flex flex-1 flex-col bg-[#FAFAFA]">
      {/* TOP BAR */}
      <div className="h-22 px-5 bg-primary flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BsArrowLeft
            className="text-white cursor-pointer"
            onClick={handleBack}
          />

          <div className="relative">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.participantName}
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[#FFFFFF]">
              {selectedChat.participantName}
            </h3>
            <p className="text-xs text-[#BFE1D1]">
              {selectedChat.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <Button variant="ghost" className="text-white" width={24}>
          <LuStickyNote className="text-[white]" size={24} />
        </Button>
      </div>

      {/* MESSAGES LAYER STREAM */}
      {/* <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            Chat is empty
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
      </div> */}

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {messages.length === 0 ? (
          /* Render the beautiful animated state component when array is empty */
          <EmptyChatState participantName={selectedChat.participantName} />
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
      </div>

      {/* INPUT BAR FORM */}
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;
