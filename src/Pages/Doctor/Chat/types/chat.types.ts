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
