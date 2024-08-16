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
import RazorpayPayment from './pages/Juniors';
import RazorpayPayment2 from './pages/Seniors';
import Confirmation1 from './pages/Confirmation1';
import Confirmation2 from './pages/Confirmation2';
import ScrollToTop from './Components/ScrollToTop';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Printing3d from './pages/Competitions/Printing3d'
import RoboticsJunior from './pages/Competitions/RoboticsJunior';
import DroneJunior from './pages/Competitions/DroneJunior'
import RenewableEnergy from './pages/Competitions/RenewableEnergy'
import AISenior from './pages/Competitions/AISenior'
import RoboticsSenior from './pages/Competitions/RoboticsSenior';
import DroneSenior from './pages/Competitions/DroneSenior'
import IotSenior from './pages/Competitions/IotSenior'

const App = () => {
  return (

    <div className='flex flex-col align-center justify-center w-full'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bharatteck/AboutBTL' element={<AboutBtl />} />
          <Route path='/bharatteck/Events' element={<Eventpage />} />

          <Route path='/bharatteck/Events/3dprinting' element={<Printing3d/>} />
          <Route path='/bharatteck/Events/roboticsjunior' element={<RoboticsJunior/>} />
          <Route path='/bharatteck/Events/dronejunior' element={<DroneJunior/>} />
          <Route path='/bharatteck/Events/cleanEnergy' element={<RenewableEnergy/>} />
          <Route path='/bharatteck/Events/AISenior' element={<AISenior/>} />
          <Route path='/bharatteck/Events/roboticsSenior' element={<RoboticsSenior/>} />
          <Route path='/bharatteck/Events/droneSenior' element={<DroneSenior/>} />
          <Route path='/bharatteck/Events/iot' element={<IotSenior/>} />

          <Route path='/bharatteck/Gallery' element={<Gallery />} />
          <Route path='/bharatteck/Registration' element={<Registration />} />
          <Route path='/bharatteck/ContactUs' element={<ContactUs />} />
          <Route path='/bharatteck/Registration/Juniors' element={<RazorpayPayment />} />
          <Route path='/bharatteck/Registration/Seniors' element={<RazorpayPayment2 />} />
          <Route path='/bharatteck/Registration/Juniors/Confirmation' element={<Confirmation1 />} />
          <Route path='/bharatteck/Registration/Seniors/Confirmation' element={<Confirmation2 />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </div>

  );
}

export default App;
