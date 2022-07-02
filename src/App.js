import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Tour from './Pages/Tour/Tour';
import Hotel from './Pages/Hotel/Hotel';
import NotFound from './Pages/NotFound/NotFound';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Components/RequireAuth';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/hotel' element={<RequireAuth><Hotel/></RequireAuth>} />
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
