"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface IconSliderProps {
  lineWidth: string
  featuresOffset?: number
}

export function IconSlider({ lineWidth, featuresOffset = 1000 }: IconSliderProps) {
  const iconContainerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Function to calculate the distance to the features section
    const calculateFeaturesDistance = () => {
      const featuresSection = document.getElementById("features")
      if (featuresSection) {
        // Get the distance from the top of the page to the features section
        // Subtract some offset to start slowing down before reaching it
        return featuresSection.getBoundingClientRect().top + window.scrollY - 200
      }
      return featuresOffset // Fallback if features section not found
    }

    // Initial calculation
    let distanceToFeatures = calculateFeaturesDistance()

    // Recalculate on resize
    const handleResize = () => {
      distanceToFeatures = calculateFeaturesDistance()
    }

    const handleScroll = () => {
      if (!iconContainerRef.current || !lineRef.current) return

      const scrollPosition = window.scrollY

      // Get the actual width of the line element
      const lineWidthPx = lineRef.current.offsetWidth

      // Calculate progress based on scroll position relative to features section
      const progress = Math.min(scrollPosition / distanceToFeatures, 1)

      // Slower easing function for more gradual movement
      // This cubic easing makes it start slow, speed up in the middle, and slow down at the end
      const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

      // Calculate move distance, ensuring it never exceeds the line width
      const moveDistance = Math.min(eased * lineWidthPx, lineWidthPx - 24) // Subtract icon radius to stop at end of line

      // Apply the transform
      iconContainerRef.current.style.transform = `translateX(${moveDistance}px)`
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Initial call to position correctly on load
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [featuresOffset])

  return (
    <div className="relative">
      {/* Fixed line that doesn't move */}
      <div
        ref={lineRef}
        className="absolute top-1/2 left-6 md:left-12 h-0.5 bg-gradient-to-r from-[#ED1C24] to-transparent"
        style={{ width: lineWidth }}
      ></div>

      {/* Container for icon and its gradient - will move along the line */}
      <div
        ref={iconContainerRef}
        className="relative transition-transform duration-1000 ease-out"
        style={{ transform: "translateX(0)" }}
      >
        <div className="absolute -left-6 -top-6 w-32 h-32 md:w-48 md:h-48 bg-[#ED1C24]/10 rounded-full blur-xl"></div>
        <div className="bg-white rounded-full shadow-xl p-3 md:p-4 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center relative">
          <Image
            src="/relayhelp-icon.svg"
            alt="RelayHelp"
            width={40}
            height={40}
            className="relative z-10 md:w-[60px] md:h-[60px]"
          />
        </div>
      </div>
    </div>
  )
}
