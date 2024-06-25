import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import AboutBtl from './pages/AboutBtl'
import ContactUs from './pages/ContactUs'
import Eventpage from './pages/Eventpage'
import Gallery from './pages/Gallery'
import Registration from './pages/Registration'
import Juniors from './pages/Juniors';
import Seniors from './pages/Seniors';
import Confirmation1 from './pages/Confirmation1';
import Confirmation2 from './pages/Confirmation2';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from './Components/NotFound';

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
          <Route path='/bharattech/Gallery' element={<Gallery />} />
          <Route path='/bharattech/Registration' element={<Registration />} />
          <Route path='/bharattech/ContactUs' element={<ContactUs />} />
          <Route path='/bharattech/Registration/Juniors' element={<Juniors />} />
          <Route path='/bharattech/Registration/Seniors' element={<Seniors />} />
          <Route path='/bharattech/Registration/Juniors/Confirmation' element={<Confirmation1 />} />
          <Route path='/bharattech/Registration/Seniors/Confirmation' element={<Confirmation2 />} />
          <Route path='/404' element={NotFound} />
          <Route element={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
