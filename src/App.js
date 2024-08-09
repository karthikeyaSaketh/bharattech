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
import Printing3d from './pages/Competitions/Printing3d'
import RoboticsJunior from './pages/Competitions/RoboticsJunior';
import DroneJunior from './pages/Competitions/DroneJunior'
import RenewableEnergy from './pages/Competitions/RenewableEnergy'
import AISenior from './pages/Competitions/AISenior'
import RoboticsSenior from './pages/Competitions/RoboticsSenior';
import DroneSenior from './pages/Competitions/DroneSenior'
import IotSenior from './pages/Competitions/IotSenior'

import RazorpayPayment from './Components/Payment'

const App = () => {
  return (

    <div className='flex flex-col align-center justify-center w-full'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bharattech' element={<Home />} />
          <Route path='/bharattech/payments' element={<RazorpayPayment />} />
          <Route path='/bharattech/AboutBTL' element={<AboutBtl />} />
          <Route path='/bharattech/Events' element={<Eventpage />} />

          <Route path='/bharattech/Events/3dprinting' element={<Printing3d/>} />
          <Route path='/bharattech/Events/roboticsjunior' element={<RoboticsJunior/>} />
          <Route path='/bharattech/Events/dronejunior' element={<DroneJunior/>} />
          <Route path='/bharattech/Events/cleanEnergy' element={<RenewableEnergy/>} />
          <Route path='/bharattech/Events/AISenior' element={<AISenior/>} />
          <Route path='/bharattech/Events/roboticsSenior' element={<RoboticsSenior/>} />
          <Route path='/bharattech/Events/droneSenior' element={<DroneSenior/>} />
          <Route path='/bharattech/Events/iot' element={<IotSenior/>} />

          <Route path='/bharattech/Gallery' element={<Gallery />} />
          <Route path='/bharattech/Registration' element={<Registration />} />
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
