import { cn } from "@/lib/utils"
import { motion } from "motion/react"

type SendButtonProps = {
  label?: string
  className?: string
  type?: "button" | "submit" | "reset"
}

export function SendButton({
  label = "Send",
  className,
  type = "button",
}: SendButtonProps) {
  return (
    <motion.button
    initial={{opacity: 0, x: 50}}
    whileInView={{opacity: 1, x: 0}}
      type={type}
      className={cn(
        // structure (DO NOT hardcode colors here)
        "group relative flex items-center overflow-hidden rounded-2xl",
        "px-4 py-3 text-base font-medium",
        "transition-all duration-200",
        "active:scale-95",
        className // ← colors come from here
      )}
    >
      {/* SVG */}
      <div className="svg-wrapper-1">
        <div
          className="
            svg-wrapper
            transition-transform duration-300
            group-hover:animate-[fly_0.6s_ease-in-out_infinite_alternate]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="
              block
              transition-transform duration-300 ease-in-out
              group-hover:translate-x-[1.2em]
              group-hover:rotate-45
              group-hover:scale-110
            "
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <span
        className="
          ml-1
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-[5em]
        "
      >
        {label}
      </span>
    </motion.button>
  )
}
