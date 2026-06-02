import DashboardLayout from "../../../Components/Dashboard/Layout/DashboardLayout";
import { notification } from "./notification";
// import { notification } from "./notification";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="px-6 pt-4 pb-20">
        <div className="mb-2">
          <h1
            className="
            font-bold
            text-[20px]
              md:text-[28px]
              md:font-bold
              text-[#1E1E1E]
            "
          >
            Notifications
          </h1>
        </div>

        {/* Mobile */}

        <div
          className="
        flex flex-col gap-4
        md:hidden
        "
        >
          {notification.map((notification) => (
            <div className="pl-4 rounded-sm shadow-[0px_8px_30px_0px_#B5B5B51F] bg-[#FFFFFF]">
              <NotificationItem
                key={notification.id}
                title={notification.title}
                message={notification.message}
                icon={notification.icon}
                iconColor={notification.iconColor}
              />
            </div>
          ))}
        </div>

        {/* Desktop */}

        <div
          className="
          hidden md:block
            w-full
            md:max-w-130
            mx-auto
            border
            border-[#EAEAEA]
            rounded-2xl
            px-6
            bg-white
          "
        >
          {notification.map((notification) => (
            <NotificationItem
              key={notification.id}
              title={notification.title}
              message={notification.message}
              icon={notification.icon}
              iconColor={notification.iconColor}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
