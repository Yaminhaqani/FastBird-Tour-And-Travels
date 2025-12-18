import Navbar from "./components/Navbar";
import Guests from "./sections/Guests";
import Hero from "./sections/Hero";
import HeroTwo from "./sections/HeroTwo";
import KashmirTours from "./sections/KashmirTours";
import TopDestinations from "./sections/TopDestinations";

const App = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <KashmirTours />
      <HeroTwo />
      <TopDestinations />
      <Guests />
    </div>
  );
};

export default App;
