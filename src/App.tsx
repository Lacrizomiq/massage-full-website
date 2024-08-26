import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { RenforcementDetail } from "./pages/services/RenforcementDetails";
import { MobiliteDetails } from "./pages/services/MobiliteDetails";
import { MassageBienEtre } from "./pages/services/MassageBienEtre";
import { MassageSportif } from "./pages/services/MassageSportif";
import { SmallGroup } from "./pages/services/SmallGroup";
import { AutonomieMobilite } from "./pages/services/AutonomieMobilite";
import { AboutUs } from "./pages/home/AboutUs";
import { ContactPage } from "./pages/home/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="coaching-massage" element={<RenforcementDetail />} />
      <Route path="mobilite-massage" element={<MobiliteDetails />} />
      <Route path="massage-bien-etre" element={<MassageBienEtre />} />
      <Route path="massage-sportif" element={<MassageSportif />} />
      <Route path="small-group" element={<SmallGroup />} />
      <Route path="autonomie-mobilite" element={<AutonomieMobilite />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
