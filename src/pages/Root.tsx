// ============= Import Modules =============
import { Outlet } from "react-router-dom";

// ============= Import Components =============
import SideNavigation from "@/components/navigation/SideNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <TopNavigation />
      <SideNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
