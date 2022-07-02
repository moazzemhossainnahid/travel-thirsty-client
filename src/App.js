import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
// import RequireAuth from './Components/RequireAuth';
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import NotFound from "./Pages/NotFound/NotFound";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Tour from "./Pages/Tour/Tour";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
