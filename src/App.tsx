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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="coaching-massage" element={<RenforcementDetail />} />
      <Route path="mobilite-massage" element={<MobiliteDetails />} />
      <Route path="massage-bien-etre" element={<MassageBienEtre />} />
      <Route path="massage-sportif" element={<MassageSportif />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
