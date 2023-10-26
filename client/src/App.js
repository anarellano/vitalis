import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import Jobs from "./pages/jobs";
import Staffing from "./pages/Staffing";
import ApplyNow from "./pages/applyNow";
import CNA from "./pages/cna";
import RN from "./pages/rn";
import LVN from "./pages/lvn";
import NurseTalent from "./pages/nurseTalent";
import FillOutForm from "./pages/fillOutForm";
import FreeEducation from "./pages/freeEducation";
import MedicalConcierge from "./pages/MedicalConcierge";
//
const websiteRoutes = [
  { path: "/", component: Homepage },
  { path: "/aboutUs", component: AboutUs },
  { path: "/jobs", component: Jobs },
  { path: "/Staffing", component: Staffing },
  { path: "/applyNow", component: ApplyNow },
  { path: "/CNA", component: CNA },
  { path: "/LVN", component: LVN },
  { path: "/NurseTalent", component: NurseTalent },
  { path: "/RN", component: RN },
  { path: "/FillOutForm", component: FillOutForm },
  { path: "/FreeEducation", component: FreeEducation },
  { path: "/MedicalConcierge", component: MedicalConcierge },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes className="Routes">
          {websiteRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
