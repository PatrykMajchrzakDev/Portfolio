// ============= Import Modules =============
import { Outlet } from "react-router-dom";

// ============= Import Components =============
import SideNavigation from "@/components/navigation/SideNavigation";
import "./scss/Root.scss";

const Root = () => {
  return (
    <div className="test">
      <SideNavigation />
      <Outlet />
    </div>
  );
};

export default Root;
