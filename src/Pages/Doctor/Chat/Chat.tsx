// import { useMemo, useState } from "react";

// import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";

// import ChatSidebar from "./components/ChatSidebar";
// import CaseNotePanel from "./components/CaseNotePanel";
// import ChatWindow from "./components/ChatWindow";

// import { chats } from "./data/chats";
// import { messages as allMessages } from "./data/messages";

// import type { Chat, Message } from "./types/chat.types";

// const Chat = () => {
//   const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const messages = useMemo<Message[]>(() => {
//     if (!selectedChat) return [];

//     return allMessages.filter((message) => message.chatId === selectedChat.id);
//   }, [selectedChat]);

//   const handleSelectChat = (chat: Chat) => {
//     setSelectedChat(chat);

//     if (typeof window !== "undefined" && window.innerWidth < 1030) {
//       setIsChatOpen(true);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div
//         className="
//           h-[calc(100vh-120px)]
//           overflow-hidden
//           flex
//         "
//       >
//         {/* MOBILE */}
//         <div
//           className={`${isChatOpen ? "hidden" : "flex"} min-[1030px]:hidden w-full h-full`}
//         >
//           <ChatSidebar
//             chats={chats}
//             selectedChat={selectedChat}
//             onSelectChat={handleSelectChat}
//           />
//         </div>

//         <div
//           className={`${isChatOpen ? "flex" : "hidden"} min-[1030px]:hidden w-full h-full`}
//         >
//           {selectedChat && (
//             <ChatWindow
//               selectedChat={selectedChat}
//               messages={messages}
//               onBack={() => setIsChatOpen(false)}
//             />
//           )}
//         </div>

//         {/* DESKTOP */}
//         <div className="hidden min-[1030px]:flex w-full h-full">
//           {/* SIDEBAR */}
//           <ChatSidebar
//             chats={chats}
//             selectedChat={selectedChat}
//             onSelectChat={handleSelectChat}
//           />

//           {/* CASE NOTE */}
//           <div className="hidden">
//             {selectedChat && <CaseNotePanel chatId={selectedChat.id} />}
//           </div>

//           {/* CHAT WINDOW */}
//           {selectedChat ? (
//             <ChatWindow selectedChat={selectedChat} messages={messages} />
//           ) : (
//             <div className=" bg-[#FAFAFA] flex-1 flex items-center justify-center text-sm text-gray-500">
//               Select a chat to start messaging.
//             </div>
//           )}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Chat;
import { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import ChatSidebar from "./components/ChatSidebar";
import CaseNotePanel from "./components/CaseNotePanel";
import ChatWindow from "./components/ChatWindow";

import { chats } from "./data/chats";
import { messages as initialMessages } from "./data/messages";
import type { Chat as ChatType, Message } from "./types/chat.types";

const Chat = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Core state holding all active messages in memory to allow appending new items
  const [allMessages, setAllMessages] = useState<Message[]>(initialMessages);

  // Sync mobile view visibility state automatically based on URL parameter path
  useEffect(() => {
    if (chatId) {
      setIsChatOpen(true);
    } else {
      setIsChatOpen(false);
    }
  }, [chatId]);

  const selectedChat = useMemo<ChatType | null>(() => {
    if (!chatId) return null;
    return chats.find((c) => c.id === chatId) || null;
  }, [chatId]);

  // Dynamically filter active messages matching the URL parameter string
  const currentChatMessages = useMemo<Message[]>(() => {
    if (!chatId) return [];
    return allMessages.filter((message) => message.chatId === chatId);
  }, [chatId, allMessages]);

  const handleSelectChat = (chat: ChatType) => {
    navigate(`/doctor/chat/${chat.id}`); // Updates URL bar instantly for both views
  };

  // Handler passed down to ChatWindow -> ChatInput to trigger message sending
  const handleSendMessage = (text: string) => {
    if (!chatId) return;

    const newMessage: Message = {
      id: Math.random().toString(),
      chatId: chatId,
      sender: "doctor", // Marking as doctor matching your ChatMessage condition rules
      content: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "text",
    };

    setAllMessages((prev) => [...prev, newMessage]);
  };

  return (
    <DashboardLayout label="Chat">
      <div className="h-[calc(100vh-120px)] overflow-hidden flex w-full">
        {/* MOBILE RESPONSIVE WRAPPERS */}
        <div
          className={`${isChatOpen ? "hidden" : "flex"} min-[1030px]:hidden w-full h-full`}
        >
          <ChatSidebar
            chats={chats}
            selectedChat={selectedChat}
            onSelectChat={handleSelectChat}
          />
        </div>
        <div
          className={`${isChatOpen ? "flex" : "hidden"} min-[1030px]:hidden w-full h-full`}
        >
          {selectedChat && (
            <ChatWindow
              selectedChat={selectedChat}
              messages={currentChatMessages}
              onSendMessage={handleSendMessage}
              onBack={() => navigate("/doctor/chat")}
            />
          )}
        </div>

        {/* DESKTOP WORKSPACE */}
        <div className="hidden min-[1030px]:flex w-full h-full">
          <ChatSidebar
            chats={chats}
            selectedChat={selectedChat}
            onSelectChat={handleSelectChat}
          />

          <div className="hidden">
            {selectedChat && <CaseNotePanel chatId={selectedChat.id} />}
          </div>

          {selectedChat ? (
            <ChatWindow
              selectedChat={selectedChat}
              messages={currentChatMessages}
              onSendMessage={handleSendMessage}
              onBack={() => navigate("/doctor/chat")}
            />
          ) : (
            <div className="bg-[#FAFAFA] flex-1 flex items-center justify-center text-sm text-gray-500">
              Select a chat to start messaging.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
