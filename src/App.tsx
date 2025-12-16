import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"


const App = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero/>
    </div>
  )
}

export default App