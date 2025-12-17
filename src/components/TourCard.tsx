// components/TourCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {motion} from "motion/react"

type Props = {
  title: string
  duration: string
  image: string
  tags: string[]
}


export function TourCard({
  title,
  duration,
  image,
  tags,
}: Props) {
  return (
    <motion.div
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0,  boxShadow:
      "-10px -15px 20px -9px rgba(0,0,0,0.7)" }}
    whileHover={{scale:1.02 ,y:-6,}}
    whileTap={{scale:0.9}}
    viewport={{amount: 0.3, once: true}}
    transition={{type:"spring", stiffness: 120, damping: 6}}
    className="rounded-2xl"
    >
    <Card
    style={{backgroundImage: `url(${image})`,  backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",}}
     className="relative flex flex-col justify-end overflow-hidden rounded-2xl h-96 p-0">

        {/* GRADIENT FOR READABILITY */}
  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="w-full pt-0.5 pb-4 backdrop-blur-md bg-black/10 border border-white/10 shadow-xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg text-gray-50 ">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-300">{duration}</span>
      </CardContent>

      {/* TAGS */}
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full text-gray-200 border border-white/10 bg-white/20 px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </CardFooter>
      </div>
    </Card>
    </motion.div>
  )
}
