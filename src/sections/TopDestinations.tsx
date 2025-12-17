import CircularGallery from "@/components/ui/CircularGallery"
import { destinations } from "@/data/destinations"

const TopDestinations = () => {
    return (
    <section className="mt-8 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-black font-semibold text-center">
          Top Destinations
        </h2>
        {/* REQUIRED wrapper */}
        <div className="relative h-90 border mb-8"
        style={{backgroundImage: `url(/heroImages/glass.webp)`, backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",}}>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
          <CircularGallery
            items={destinations}
            bend={3} 
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
    )
}

export default TopDestinations