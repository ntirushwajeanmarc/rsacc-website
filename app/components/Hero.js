'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Rwanda Society of Anesthesia and Critical Care",
      subtitle: "Committed to Excellence in Patient Care",
      description: "We are a professional body dedicated to the advancement of anesthesia and critical care services in Rwanda.",
      buttons: [
        { text: "The Rwanda Anesthesia and Critical Care Conference (RACCC)", href: "/the-6th-annual-conference" },
        { text: "Abstract submission", href: "https://forms.rsacc.pro/abstractsubmission" },
        { text: "Registration", href: "https://forms.rsacc.pro/participant-registration" }
      ]
    },
    {
      title: "Join Our Professional Community",
      subtitle: "Advancing Healthcare Standards",
      description: "Connect with leading professionals in anesthesia and critical care medicine.",
      buttons: [
        { text: "Contact Us", href: "/contact" },
        { text: "Learn More", href: "/about-us" }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Slide Content */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider">
                Rwanda Society
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl font-medium">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <p className="text-xl leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {slides[currentSlide].buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    index === 0 
                      ? 'bg-secondary hover:bg-primary text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}