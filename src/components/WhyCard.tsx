import type { IconType } from "react-icons"
import {motion} from "motion/react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
type WhyCardProps = {
    icon: IconType
    title: string
    description: string
}

export const WhyCard = ({
    icon: Icon,
    title,
    description,
}: WhyCardProps) =>(

     <motion.div
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0,  boxShadow:
      "0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4)" }}
    whileHover={{scale:1.02 ,y:-6,}}
    whileTap={{scale:0.9}}
    viewport={{amount: 0.3, once: true}}
    transition={{type:"spring", stiffness: 100, damping: 10}}
    className="rounded-2xl" 
    >
    <Card className="relative w-full items-center justify-center gap-2 border h-48 p-0 overflow-hidden"
    style={{backgroundImage: `url(/heroImages/glass.webp)`, backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",}}
    >

        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <CardHeader className="justify-center w-full z-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            <Icon className="h-8 w-8 text-orange-500" />
        </CardHeader>

          <CardTitle className="text-xl tracking-tight text-white font-semibold z-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
        {title}
      </CardTitle>

       <CardContent className="z-10 text-center text-gray-300 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          {description}
      </CardContent>
        
    </Card>

    </motion.div>

)