import { motion } from "motion/react"
import logo from "@/assets/logo.png";
const Navbar = () => {
  return (
    <motion.nav
    initial={{y:-60}}
    animate={{y:0}}
    transition={{type:"spring", stiffness: 120, damping: 6}}
     className="w-full h-15 md:h-17.5 flex items-center justify-center overflow-hidden backdrop-blur-md bg-black/10 border-b border-white/20 z-50">
      <img
      className="h-45 w-fit object-contain"
       src={logo}
        alt="logo"/>

    </motion.nav>
  )
}

export default Navbar