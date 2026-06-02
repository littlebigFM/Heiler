import type { Chat } from "../types/chat.types";

export const chats: Chat[] = [
  {
    id: "chat-1",
    participantName: "Jessica Drew",
    participantRole: "Pediatrics",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Ok, see you later",
    lastMessageTime: "18:30",
    unread: 2,
    online: true,
  },

  {
    id: "chat-2",
    participantName: "David Moore",
    participantRole: "General Medicine",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "We can schedule a visit later.",
    lastMessageTime: "18:16",
    unread: 0,
    online: true,
  },

  {
    id: "chat-3",
    participantName: "Greg James",
    participantRole: "Physician",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Your test results are back.",
    lastMessageTime: "17:30",
    unread: 1,
    online: false,
  },

  {
    id: "chat-4",
    participantName: "Emily Dorson",
    participantRole: "Dentistry",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "I booked your appointment.",
    lastMessageTime: "17:02",
    unread: 0,
    online: true,
  },
];
