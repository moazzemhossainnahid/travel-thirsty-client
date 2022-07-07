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
import Profile from './Pages/Profile/Profile';
import Bookings from './Pages/Bookings/Bookings';
import AddReview from './Pages/Reviews/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageUsers from './Pages/Dashboard/NastedPages/ManageUsers/ManageUsers';
import AddHotel from './Pages/Dashboard/NastedPages/AddHotel/AddHotel';
import Welcome from './Pages/Dashboard/NastedPages/Welcome/Welcome';
import ManageHotels from './Pages/Dashboard/NastedPages/ManageHotels/ManageHotels';
import ManageTours from './Pages/Dashboard/NastedPages/ManageTours/ManageTours';
import AddTour from './Pages/Dashboard/NastedPages/AddTour/AddTour';
import ManageReviews from './Pages/Dashboard/NastedPages/ManageReviews/ManageReviews';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path='/addreview' element={<RequireAuth><AddReview/></RequireAuth>} />
        <Route path='/bookings' element={<RequireAuth><Bookings/></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<Welcome/>}/>
          <Route path="addtour" element={<AddTour/>}/>
          <Route path="addhotel" element={<AddHotel/>}/>
          <Route path="manageusers" element={<ManageUsers/>}/>
          <Route path="managehotels" element={<ManageHotels/>}/>
          <Route path="managetours" element={<ManageTours/>}/>
          <Route path="managereviews" element={<ManageReviews/>}/>
        </Route>
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
