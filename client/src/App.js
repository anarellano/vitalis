import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Staffing from "./pages/Staffing";
import FreeEducation from "./pages/freeEducation";
import MedicalConcierge from "./pages/MedicalConcierge";
import Contact from "./pages/Contact";

const websiteRoutes = [
  { path: "/", component: Home },
  { path: "/aboutUs", component: AboutUs },
  { path: "/Careers", component: Careers },
  { path: "/Staffing", component: Staffing },
  { path: "/FreeEducation", component: FreeEducation },
  { path: "/MedicalConcierge", component: MedicalConcierge },
  { path: "/Contact", component: Contact },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes className="Routes">
          {websiteRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
