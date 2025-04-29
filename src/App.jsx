import Footer from './Component/footer';
import Home from './Component/Homefile/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
