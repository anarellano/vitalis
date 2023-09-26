import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Header from "./pages/header";
import Footer from "./pages/footer";
import AboutUs from "./pages/aboutUs";
import Jobs from "./pages/jobs";
import Services from "./pages/services";
import ApplyNow from "./pages/applyNow";
import CNA from "./pages/cna";
import RN from "./pages/rn";
import LVN from "./pages/lvn";
import NurseTalent from "./pages/nurseTalent";
import FillOutForm from "./pages/fillOutForm";
import FreeEducation from "./pages/freeEducation";
import Rows from "./pages/rows";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes className="Routes">
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ApplyNow" element={<ApplyNow />} />
          <Route path="/CNA" element={<CNA />} />
          <Route path="/LVN" element={<LVN />} />
          <Route path="/NurseTalent" element={<NurseTalent />} />
          <Route path="/RN" element={<RN />} />
          <Route path="/FillOutForm" element={<FillOutForm />} />
          <Route path="/FreeEducation" element={<FreeEducation />} />
          <Route path="/rows" element={<Rows />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
