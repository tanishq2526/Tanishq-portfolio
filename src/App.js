
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import About from './component/About';
import SocialLinks from './component/footersocial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <SocialLinks />      
    </div>
  );
}

export default App;
