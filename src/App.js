import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Skill } from './Components/Skills/Skill';
import ContactUs from './Components/contactUs/ContactUs';
import { WorkExperience } from './Components/WorkExperience/WorkExperience';
import MobileNav from './Components/navbar/MobileNav/MobileNav';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skill />
        <WorkExperience />
        <ContactUs />
      </div>
      <Footer />
      </>
    </div>
  );
}

export default App;
