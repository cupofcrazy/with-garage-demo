"use client"

import * as React from "react"
import { forwardRef } from "react"

interface InputSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputSlider = forwardRef<HTMLInputElement, InputSliderProps>(({ className, ...props }, ref) => {
  return (
    <input 
      type="range" 
      {...props}
      className="w-full h-2 bg-neutral-100 border border-neutral-200 rounded-2xl appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:border-0 flex-[1]" 
    />
  )
})

InputSlider.displayName = "InputSlider"

export { InputSlider }