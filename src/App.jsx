import Footer from './Component/footer'
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}>

      </Route>
      </Routes>
      <Footer/>
    </Router> {/* Fixed the closing tag */}
    </>
  )
}

export default App;