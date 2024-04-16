import { NavigationMenuHeader } from "./Header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export const Layout: React.FC = () => {
  return (
    <div>
      <NavigationMenuHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
