import "./App.css";
import AboutUs from "./sections/about_us/AboutUs";

import Home from "./sections/home/Home";
import Introduce from "./sections/introduce/Introduce";
import PracticeArea from "./sections/practice-area/PracticeArea";
import Clients from "./sections/clients/Clients";
import OurTeam from "./sections/our_team/OurTeam";
import Faqs from "./sections/faqs/Faqs";
import Subscribe from "./sections/subscribe/Subscribe";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div className="App center">
      <Home />
      <Introduce />
      <AboutUs />
      <PracticeArea />
      <Clients />
      <OurTeam />
      <Faqs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
