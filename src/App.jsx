import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Homepage/Footer';
import Home from './Homepage/Homefile/Home';
import Navbar from "./Homepage/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;