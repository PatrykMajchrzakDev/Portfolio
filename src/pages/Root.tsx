// ============= Import Modules =============
import { Outlet } from "react-router-dom";

// ============= Import Components =============
import SideNavigation from "@/components/navigation/SideNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";

const Root = () => {
  return (
    <div>
      <TopNavigation />
      <SideNavigation />
      <Outlet />
    </div>
  );
};

export default Root;
