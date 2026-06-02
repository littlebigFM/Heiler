// import { Role } from "./user.types";

// export interface ChatPreview {
//   id: string;
//   participantId: string;
//   participantName: string;
//   participantRole: Role;
//   lastMessage: string;
//   unread: number;
//   online: boolean;

// }

// export interface ChatUser {
//   id: string;
//   fullName: string;
//   avatar?: string | null;
//   online?: boolean;
//   specialty?: string;
// }

// export interface Chat {
//   id: string;

//   participantId: string;

//   participantName: string;

//   participantRole: "doctor" | "patient";

//   specialty?: string;

//   lastMessage: string;

//   lastMessageTime: string;

//   unread: number;

//   online?: boolean;

//   avatar?: string | null;
// }

// export interface Message {
//   id: string;

//   chatId: string;

//   content: string;
//   createdAt: string;

//   senderId: string;

//   text: string;

//   time: string;

//   date?: string;

//   type: "text" | "voice" | "image" | "file";
// }

// export interface CaseNote {
//   id: string;
//   chatId: string;
//   content: string;
//   createdAt: string;
// }

export interface Chat {
  id: string;
  participantName: string;
  participantRole: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  online: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  sender: "doctor" | "patient";
  type: "text" | "voice";
  content: string;
  time: string;
}

export interface CaseNote {
  id: string;
  chatId: string;
  title: string;
  description: string;
  createdAt: string;
}
