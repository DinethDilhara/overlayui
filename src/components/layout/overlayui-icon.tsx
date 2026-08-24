import type { ComponentProps } from "react"
import { cn } from "@/utils/utils"

export interface OverlayuiIconProps extends ComponentProps<"div"> {
    className?: string
}

export function OverlayuiIcon({
    className,
    children = ") :",
    ...props
}: OverlayuiIconProps) {
    return (
        <div
            className={cn(
                "flex size-8.5 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-base shadow-xs transition-transform",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default OverlayuiIcon
