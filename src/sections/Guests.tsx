import DomeGallery from "@/components/ui/DomeGallery"
import { guestImgs } from "@/data/guests"

const Guests = () => {
  return (
        <section className="mt-8 w-full h-fit">
      <div className="flex flex-col items-center w-full h-fit">
        <h1 className="text-3xl tracking-tight text-black font-bold text-center">
          Our Guests
        </h1>

      <div className="w-[99vw] lg:w-[84%] h-[50vh] lg:h-[65vh] overflow-hidden mx-auto mt-3 mb-8 px-4">
      <DomeGallery
      images={guestImgs} 
      grayscale={false}
      />
    </div>
        
      </div>
    </section>
  )
}

export default Guests