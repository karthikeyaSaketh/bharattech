
import './App.css';
import ImgSlider from './Components/ImgSlider';
import Navbar from './Components/Navbar';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Description from './Components/Description';

function App() {
  return (
    <div className='flex flex-col align-center justify-center w-full'>
      <Navbar/>
      <ImgSlider/>
      <Description/>
      <Events/>
      <Footer/>

    </div>
    
  );
}

export default App;
