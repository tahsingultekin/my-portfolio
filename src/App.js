import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const showSideBar = () => setToggle(!toggle);

  return (
    <div className="App scroll-smooth">
      <Navbar showSideBar={showSideBar} />
      <MobileNav showSideBar={showSideBar} toggle={toggle} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
