import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import AboutBtl from './pages/AboutBtl'
import ContactUs from './pages/ContactUs'
import Eventpage from './pages/Eventpage'
import Gallery from './pages/Gallery'
import Registration from './pages/Registration'

const App = () => {
  return (

    <div className='flex flex-col align-center justify-center w-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bharattech' element={<Home />} />
          <Route path='/bharattech/AboutBTL' element={<AboutBtl />} />
          <Route path='/bharattech/Events' element={<Eventpage />} />
          <Route path='/bharattech/Gallery' element={<Gallery />} />
          <Route path='/bharattech/Registration' element={<Registration />} />
          <Route path='/bharattech/ContactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
