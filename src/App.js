import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import AboutBtl from './pages/AboutBtl'
import ContactUs from './pages/ContactUs'
import Eventpage from './pages/Eventpage'
import Gallery from './pages/Gallery'
import Open from './pages/Open'
import Registration from './pages/Registration'
import Juniors from './pages/Juniors';
import Seniors from './pages/Seniors';
import Confirmation1 from './pages/Confirmation1';
import Confirmation2 from './pages/Confirmation2';
import ScrollToTop from './Components/ScrollToTop';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Competitions from './Components/Competitions';

const App = () => {
  return (

    <div className='flex flex-col align-center justify-center w-full'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bharattech' element={<Home />} />
          <Route path='/bharattech/AboutBTL' element={<AboutBtl />} />
          <Route path='/bharattech/Events' element={<Eventpage />} />
          <Route path='/bharattech/Events/dronetechnology' element={<Competitions/>} />
          <Route path='/bharattech/Events/RoboticsJunior' element={<Eventpage />} />
          <Route path='/bharattech/Events/DroneTechnologyJunior' element={<Eventpage />} />
          <Route path='/bharattech/Events/RenewableEnergy' element={<Eventpage />} />
          <Route path='/bharattech/Gallery' element={<Gallery />} />
          <Route path='/bharattech/Registration' element={<Open />} />
          <Route path='/bharattech/ContactUs' element={<ContactUs />} />
          <Route path='/bharattech/Registration/Juniors' element={<Juniors />} />
          <Route path='/bharattech/Registration/Seniors' element={<Seniors />} />
          <Route path='/bharattech/Registration/Juniors/Confirmation' element={<Confirmation1 />} />
          <Route path='/bharattech/Registration/Seniors/Confirmation' element={<Confirmation2 />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </div>

  );
}

export default App;
