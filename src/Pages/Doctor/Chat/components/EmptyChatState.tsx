interface EmptyChatStateProps {
  participantName: string;
}

const EmptyChatState = ({ participantName }: EmptyChatStateProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center  animate-fade-in-up">
      {/* Figma Illustration Wrapper */}
      {/* <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-4 shadow-sm border border-[#ECECEC]">
        <svg
          className="w-full h-full text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            className="opacity-40"
          />
          <path d="M13 8H7m6 4H7" />
        </svg>
      </div> */}

      {/* Main Copy strings from your Figma screen specs */}
      <p className="text-xs font-medium text-[#8E8E93] tracking-wide mb-1">
        No messages here ...
      </p>

      <h3 className="text-base font-semibold text-[#1B1B1B]">
        Start by sending a message.
      </h3>
    </div>
  );
};

export default EmptyChatState;
