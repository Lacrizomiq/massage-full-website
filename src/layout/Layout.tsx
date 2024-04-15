import { NavigationMenuHeader } from "./Header";
import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <div>
      <NavigationMenuHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
