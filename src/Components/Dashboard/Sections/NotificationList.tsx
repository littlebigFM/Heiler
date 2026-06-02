import NotificationCard from "../Cards/NotificationCard";

interface Notification {
  id: string;
  title: string;
  message: string;
}

interface Props {
  notifications: Notification[];
}

const NotificationList = ({ notifications }: Props) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-[#F1F1F1]
        p-5
        w-full
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Notifications</h3>

        <button className="text-primary text-sm font-semibold">See all</button>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
