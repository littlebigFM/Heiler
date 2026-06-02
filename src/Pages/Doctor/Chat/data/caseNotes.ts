import type { CaseNote } from "../types/chat.types";

export const caseNotes: CaseNote[] = [
  {
    id: "note-1",
    chatId: "chat-1",
    title: "Case Note 1",
    description: "Patient complained about severe headache.",
    createdAt: "2 mins ago",
  },

  {
    id: "note-2",
    chatId: "chat-1",
    title: "Case Note 2",
    description: "Prescribed medication for 5 days.",
    createdAt: "1 hour ago",
  },
];
