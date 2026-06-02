// import { FiPaperclip } from "react-icons/fi";
// import { IoMicOutline } from "react-icons/io5";
// import { RiSendPlaneFill } from "react-icons/ri";

// const ChatInput = () => {
//   return (
//     <div
//       className="
//         h-20
//         shrink-0
//         border-t
//         border-[#ECECEC]
//         px-4
//         flex
//         items-center
//         gap-3
//         bg-white
//       "
//     >
//       {/* ATTACH */}
//       <button
//         className="
//           w-10
//           h-10
//           rounded-full
//           bg-[#F5F5F5]
//           flex
//           items-center
//           justify-center
//           shrink-0
//         "
//       >
//         <FiPaperclip size={18} />
//       </button>

//       {/* INPUT */}
//       <div
//         className="
//           flex-1
//           h-11
//           rounded-full
//           bg-[#F7F7F7]
//           px-4
//           flex
//           items-center
//         "
//       >
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="
//             flex-1
//             bg-transparent
//             outline-none
//             text-sm
//           "
//         />
//       </div>

//       {/* MIC */}
//       <button
//         className="
//           w-10
//           h-10
//           rounded-full
//           bg-[#F5F5F5]
//           flex
//           items-center
//           justify-center
//           shrink-0
//         "
//       >
//         <IoMicOutline size={18} />
//       </button>

//       {/* SEND */}
//       <button
//         className="
//           w-10
//           h-10
//           rounded-full
//           bg-primary
//           text-white
//           flex
//           items-center
//           justify-center
//           shrink-0
//         "
//       >
//         <RiSendPlaneFill size={18} />
//       </button>
//     </div>
//   );
// };

// export default ChatInput;

import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { IoMicOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSendMessage(text);
    setText(""); // Empty input bar form cleanly
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-20 shrink-0 border-t border-[#ECECEC] px-4 flex items-center gap-3 bg-white"
    >
      {/* ATTACH BUTTON */}
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 cursor-pointer"
      >
        <FiPaperclip size={18} />
      </button>

      {/* TEXT INPUT FIELD */}
      <div className="flex-1 h-11 rounded-full bg-[#F7F7F7] px-4 flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent outline-none text-sm text-[#1B1B1B]"
        />
      </div>

      {/* MIC BUTTON */}
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 cursor-pointer"
      >
        <IoMicOutline size={18} />
      </button>

      {/* SEND BUTTON */}
      <button
        type="submit"
        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 cursor-pointer hover:opacity-90 active:scale-95 transition-all"
      >
        <RiSendPlaneFill size={18} />
      </button>
    </form>
  );
};

export default ChatInput;
