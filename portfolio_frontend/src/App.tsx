import './App.css'
import Navbar from './components/Navbar';
import About from './sections/About';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from "@/sections/Footer.tsx";

function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
