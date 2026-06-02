import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNav from "./BottomNav";

interface Props {
  children: ReactNode;
  className?: string;

  headerVariant?: "home" | "page";
  headerTitle?: string;
  headerSubtitle?: string;

  onBack?: () => void;

  showAvatar?: boolean;

  rightContent?: React.ReactNode;
}

const DashboardLayout = ({
  children,
  className,
  headerVariant = "home",
  headerTitle,
  headerSubtitle,

  onBack,

  showAvatar = true,

  rightContent,
}: Props) => {
  return (
    <div
      className={`
        max-w-360
        mx-auto
        flex
        min-h-screen
        ${className}
      `}
    >
      {/* SIDEBAR */}
      <div className="w-60 hidden md:flex">
        <Sidebar />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <Header
          variant={headerVariant}
          title={headerTitle}
          subtitle={headerSubtitle}
          onBack={onBack}
          showAvatar={showAvatar}
          rightContent={rightContent}
        />

        {/* PAGE */}
        <main className=" flex-1">{children}</main>
      </div>

      {/* MOBILE NAV */}
      <div className="min-[768px]:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
