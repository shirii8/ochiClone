import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import  LandingPage  from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
    </div>
  )
}
export default App;
