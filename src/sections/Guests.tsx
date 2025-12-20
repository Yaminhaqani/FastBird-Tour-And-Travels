import DomeGallery from "@/components/ui/DomeGallery";
import { guestImgs } from "@/data/guests";
import { motion } from "motion/react";

const Guests = () => {
  return (
    <section className="mt-8 w-full h-fit">
      <div className="flex flex-col items-center w-full h-fit">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl tracking-tight text-gray-900 font-bold">
            Our Guests
          </h1>
        </motion.div>

        <div className="w-[99vw] lg:w-[84%] h-[50vh] lg:h-[65vh] overflow-hidden mx-auto mt-3 mb-8 px-4">
          <DomeGallery images={guestImgs} grayscale={false} />
        </div>
      </div>
    </section>
  );
};

export default Guests;
