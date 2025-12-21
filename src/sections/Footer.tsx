import {
  FaFacebookF,
  FaInstagram,
  FaMapLocation,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import GlassIcons from "@/components/ui/GlassIcons";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socials = [
    {
      icon: <FaInstagram />,
      color: "pink",
      label: "Instagram",
      href: "https://www.instagram.com/speedbirdtourandtravels/",
    },
    {
      icon: <FaFacebookF />,
      color: "blue",
      label: "Facebook",
      href: "https://www.facebook.com/speedbird55/",
    },
    {
      icon: <FaWhatsapp />,
      color: "green",
      label: "WhatsApp",
      href: "https://wa.me/917889757436",
    },
  ];

  return (
    <footer
      className="w-dvw h-fit flex justify-center items-center mt-8 p-2 border border-white/10"
      style={{
        backgroundImage: `url(/footer.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="relative w-[95%] h-fit lg:w-[82%] text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto rounded-2xl border border-white/20 z-10 overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow:
            "0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 8 }}
          className="flex flex-col items-start md:items-center order-3 md:order-1 mb-4"
        >
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/3Q4F8Wovr19J1ctRA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
            >
              <span className="mr-2">
                <FaMapLocation />
              </span>
              Rajbagh, Srinagar, Kashmir - 190008, India
            </a>
            <a
              href="mailto:contact@speedbirdtourandtravel.in"
              className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
            >
              <span className="mr-2">
                <IoMail />
              </span>
               contact@speedbirdtourandtravel.in
            </a>
            <a
              href="tel:+917889757436"
              className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300"
            >
              <span className="mr-2">
                <BsFillTelephoneFill />
              </span>
              +917889757436
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 8 }}
          className="flex flex-col items-start  order-1 md:order-2 md:mb-4"
        >
          <div className="w-full flex justify-start md:justify-center overflow-hidden">
            <img
              className="w-60 -ml-4 md:ml-0 md:-mt-3 lg:-mt-2 h-15 object-cover"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center md:text-center text-sm">
              Step into the magic of the mountains and let us guide you through
              moments of freedom, wonder, and unforgettable experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 8 }}
          className="flex flex-col items-start md:items-center order-2 md:order-3"
        >
          <h3 className=" font-semibold text-lg mb-2">Follow Us</h3>
          <div className="h-fit w-fit relative">
            <GlassIcons items={socials} className="text-[10px] gap-[1em]" />
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 text-center">
          <motion.a
            href="https://www.linkedin.com/in/yamin-haqani-30868b2b1?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-gray-500/90 hover:text-amber-600 transition-colors duration-300"
          >
            © 2025 Yamin Haqani. All rights reserved.
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
