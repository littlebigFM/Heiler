import { FiPlus } from "react-icons/fi";

import { caseNotes } from "../data/caseNotes";

import CaseNoteCard from "./CaseNoteCard";

interface Props {
  chatId: string;
}

const CaseNotePanel = ({ chatId }: Props) => {
  const notes = caseNotes.filter((note) => note.chatId === chatId);

  return (
    <div
      className="
        hidden
        lg:flex
        lg:w-[25%]
        border-r
        border-[#ECECEC]
        bg-[#FCFCFC]
        flex-col
      "
    >
      {/* TOP */}
      <div
        className="
          h-18
          border-b
          border-[#ECECEC]
          px-4
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h2 className="font-semibold text-[#1B1B1B]">Case Note</h2>

          <p className="text-xs text-[#8B8B8B]">Patient medical notes</p>
        </div>

        <button
          className="
            w-10
            h-10
            rounded-full
            bg-primary
            text-white
            flex
            items-center
            justify-center
          "
        >
          <FiPlus size={18} />
        </button>
      </div>

      {/* NOTES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {notes.map((note) => (
          <CaseNoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default CaseNotePanel;
