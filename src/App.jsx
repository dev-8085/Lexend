import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Homepage/Footer';
import Home from './Homepage/Homefile/Home';
import Navbar from "./Homepage/Navbar";
import TermsOfService from "./pages/TermsOfService";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellation from "./pages/RefundCancellation";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;