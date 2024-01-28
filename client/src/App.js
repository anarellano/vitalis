import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Staffing from "./pages/Staffing";
import MedicalConcierge from "./pages/MedicalConcierge";
import Contact from "./pages/Contact";

const websiteRoutes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Careers", component: Careers },
  { path: "/Staffing", component: Staffing },
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
