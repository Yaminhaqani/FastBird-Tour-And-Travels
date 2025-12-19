import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
const KashmirTours = lazy(() => import("./sections/KashmirTours"));
const HeroTwo = lazy(() => import("./sections/HeroTwo"));
const TopDestinations = lazy(() => import("./sections/TopDestinations"));
const Guests = lazy(() => import("./sections/Guests"));
const ContactForm = lazy(()=> import("./sections/ContactForm"));

const App = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <KashmirTours />

      <Suspense
        fallback={
          <div className="min-h-75 flex items-center justify-center text-gray-400">
            Loading...
          </div>
        }
      >
        <HeroTwo />
        <TopDestinations />
        <Guests />
      </Suspense>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
