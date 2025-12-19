import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // base (same as Input, but taller)
        "min-h-30 w-full rounded-xl bg-transparent px-4 py-3 text-sm text-amber-200/80",
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
        // textarea-specific
        "resize-none",
        // transitions
        "transition-[color,box-shadow,border]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
