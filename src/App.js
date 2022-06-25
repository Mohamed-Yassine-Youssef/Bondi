import "./App.css";
import BtsNavBar from "./components/BtsNavBar";
import LandingSection from "./components/LandingSection";
import Features from "./components/Features";
import Work from "./components/Work";
import Stuff from "./components/Stuff";
import OurTeam from "./components/OurTeam";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BtsNavBar />
      <LandingSection />
      <Features />
      <Work />
      <Stuff />
      <OurTeam />
      <Techs />
      <Projects />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
