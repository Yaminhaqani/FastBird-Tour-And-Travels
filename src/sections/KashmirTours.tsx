import { TourCard } from "@/components/TourCard";
import { cards } from "@/data/card";
import { motion } from "motion/react";

const KashmirTours = () => {
  return (
    <div className="w-full h-fit ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-8 text-3xl tracking-tight text-gray-900 font-bold"
      >
        Popular Kashmir Tours
      </motion.h1>

      <div className="flex justify-center mt-3 w-full">
        <div className="grid w-[95%] lg:w-[70%] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <TourCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KashmirTours;
