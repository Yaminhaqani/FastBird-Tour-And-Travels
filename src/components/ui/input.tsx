import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // base
        "h-10 w-full min-w-0 rounded-xl bg-transparent px-4 py-2 text-sm text-amber-200/80",
        // border
        "border border-amber-400/40",
        // placeholder
        "placeholder:text-amber-200/45",
        // focus
        "outline-none focus-visible:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400/40",
        // invalid (zod / RHF)
        "aria-invalid:border-red-400 aria-invalid:ring-red-400/30",
        // disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // file input (keep shadcn behavior)
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        // transitions
        "transition-[color,box-shadow,border]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
