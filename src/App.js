
// import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
