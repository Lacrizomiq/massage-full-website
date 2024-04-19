import { NavigationMenuHeader } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const Layout: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <NavigationMenuHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
