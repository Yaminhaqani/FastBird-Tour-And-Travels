import CircularGallery from "@/components/ui/CircularGallery";
import { destinations } from "@/data/destinations";
import { motion } from "motion/react";

const TopDestinations = () => {
  return (
    <section className="mt-8 h-fit">
      <div className="max-w-6xl h-fit mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="mt-8 text-3xl tracking-tight text-gray-900 font-bold">
            Top Destinations
          </h1>
        </motion.div>
        {/* REQUIRED wrapper */}
        <div
          className="relative h-90 mt-3 mb-8 border border-white/10 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(/heroImages/glass2.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            boxShadow:
              "0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)",
          }}
        >
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <CircularGallery
            items={destinations}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
