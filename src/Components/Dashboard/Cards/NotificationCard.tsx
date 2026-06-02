interface NotificationCardProps {
  title: string;
  message: string;
}

const NotificationCard = ({ title, message }: NotificationCardProps) => {
  return (
    <div
      className="
        bg-white
        p5
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            w-10 h-10
            rounded-full
            bg-[#EAF8F1]
            flex items-center justify-center
            text-primary
          "
        >
          ✓
        </div>

        <div>
          <h4 className="font-bold text-[16px] text-[#192720] mb-1">{title}</h4>

          <p className="font-regular text-[14px] text-[#A5A5A5] leading-6">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
