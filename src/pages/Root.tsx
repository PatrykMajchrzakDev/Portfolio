// ============= Import Modules =============
import { Outlet } from "react-router-dom";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import { useRef } from "react";

// ============= Import Components =============
import SideNavigation from "@/components/navigation/SideNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "../components/footer/Footer";

const Root = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollRefs = {
    contact: contactRef,
    aboutMe: aboutMeRef,
    projects: projectsRef,
  };
  return (
    <NavigationScrollContext.Provider value={scrollRefs}>
      <TopNavigation />
      <SideNavigation />
      <Outlet />
      <Footer />
    </NavigationScrollContext.Provider>
  );
};

export default Root;
