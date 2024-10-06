// components/ui/button.jsx
import React from 'react'
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "button",
        {
          "button-default": variant === "default",
          "button-dark": variant === "dark",
          "button-read-more": variant === "read-more"
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }