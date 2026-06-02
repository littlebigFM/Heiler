import type { CaseNote } from "../types/chat.types";

interface Props {
  note: CaseNote;
}

const CaseNoteCard = ({ note }: Props) => {
  return (
    <div
      className="
        p-4
        rounded-2xl
        border
        border-[#ECECEC]
        bg-white
      "
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-[#1B1B1B]">{note.title}</h3>

        <p className="text-[11px] text-[#8B8B8B]">{note.createdAt}</p>
      </div>

      <p
        className="
          mt-2
          text-sm
          text-[#666]
          leading-relaxed
        "
      >
        {note.description}
      </p>
    </div>
  );
};

export default CaseNoteCard;
