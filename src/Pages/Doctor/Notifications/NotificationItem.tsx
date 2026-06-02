type Props = {
  title: string;
  message: string;
  icon: any;
  iconColor: string;
};

const NotificationItem = ({ title, message, icon: Icon, iconColor }: Props) => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        py-6
        md:border-b
        border-[#EAEAEA]
      "
    >
      <div className="mt-1">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>

      <div className="flex-1">
        <h3
          className="
            text-[16px]
            font-semibold
            text-[#1E1E1E]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-[14px]
            leading-5.5
            text-[#8D8D8D]
            max-w-75
          "
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
