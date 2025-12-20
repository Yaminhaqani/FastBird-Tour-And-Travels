import { WhyCard } from "@/components/WhyCard";
import { whyChooseUs } from "@/data/whyChooseUs";
import { motion } from "motion/react";
const HeroTwo = () => {
  return (
    <div className="w-full h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="mt-8 text-3xl tracking-tight text-gray-900 font-bold">
          Why Choose Us?
        </h1>
      </motion.div>

      <div className="flex justify-center w-full h-fit mt-3">
        <div className="grid w-[95%] lg:w-[80%] gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <WhyCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
