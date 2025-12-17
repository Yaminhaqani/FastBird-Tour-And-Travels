"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const Hero = () => {
  const heroImages = [
    "/heroImages/hero1.webp",
    "/heroImages/hero2.webp",
    "/heroImages/hero3.webp",
    "/heroImages/hero4.webp",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5500) 

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <div className="w-full h-[60dvh] md:h-[60dvh] lg:h-[76dvh] relative overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex} // Key is vital for AnimatePresence to detect change
          src={heroImages[currentIndex]}
          alt={`Hero ${currentIndex + 1}`}
          fetchPriority="high"
          className="absolute w-full h-full object-cover"
          
    
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Fade duration
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/40 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.7 }}
            className="space-y-2 absolute top-45 md:top-60 lg:top-48 py-2 md:py-4 left-1/2 -translate-x-1/2 w-[95dvw] lg:w-[60dvw] backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl
  rounded-3xl"
        >

            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Experience Paradise
            </h1>


            <p className="text-xs md:text-sm text-gray-200/90 max-w-2xl mx-auto font-light drop-shadow-md">
              Discover the timeless beauty of Kashmir. From the shikaras of Dal Lake to the slopes of Gulmarg.
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero