import { FaFacebookF, FaInstagram, FaMapLocation, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import GlassIcons from "@/components/ui/GlassIcons";

const Footer = () => {

    const socials = [
         { icon: <FaInstagram />, color: 'purple', label: 'Instagram',href: "https://www.instagram.com/speedbirdtourandtravels/" },
         { icon: <FaFacebookF />, color: 'blue', label: 'Facebook',href: "https://www.facebook.com/speedbird55/" },
          {
    icon: <FaWhatsapp />,
    color: "green",
    label: "WhatsApp",
    href: "https://wa.me/917889757436",
  },
    ]

  return (
    <footer
      className="w-dvw h-fit flex justify-center items-center mt-8 p-2 border"
      style={{
        backgroundImage: `url(/footer.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-[95%] h-fit lg:w-[82%] text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto rounded-2xl border border-white/20 z-10 overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-start order-3 border md:order-1">

            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <div className="flex flex-col gap-2">
            <a
            href="https://maps.app.goo.gl/3Q4F8Wovr19J1ctRA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300">
              <span className="mr-2"><FaMapLocation /></span>Rajbagh, Srinagar, Kashmir - 190008, India
            </a>
             <a
             href="mailto:info@speedbird.in"
              className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300">
              <span className="mr-2"><IoMail /></span>info@speedbird.in
            </a>
            <a
            href="tel:+917889757436"
             className="flex items-center text-sm hover:text-amber-600 transition-colors duration-300">
              <span className="mr-2"><BsFillTelephoneFill /></span>+917889757436
            </a>
            </div>
        </div>

         <div className="flex flex-col items-start order-1 border md:order-2">
            <div className="w-full flex justify-start overflow-hidden">
            <img
            className="w-60 -ml-4 h-15 object-cover"
             src="src/assets/logo.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
           
             <p
              className="flex items-center text-sm">
              Step into the magic of the mountains and let us guide you through moments of freedom, wonder, and unforgettable experiences.
            </p>
         
            </div>
      
        </div>

        <div className="flex flex-col items-start order-2 border md:order-3">

            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="h-60 overflow-hidden relative">
                <GlassIcons items={socials} />
            </div>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;
