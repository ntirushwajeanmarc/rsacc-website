'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      title: "Professional Conference",
      description: "Annual RSACC conference bringing together experts in anesthesia and critical care"
    },
    {
      id: 2,
      title: "Workshop Session",
      description: "Hands-on training sessions for medical professionals"
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Our members working together to advance healthcare standards"
    },
    {
      id: 4,
      title: "Educational Event",
      description: "Knowledge sharing and professional development sessions"
    },
    {
      id: 5,
      title: "Networking Event",
      description: "Building professional relationships within the medical community"
    },
    {
      id: 6,
      title: "Research Presentation",
      description: "Sharing latest research findings and best practices"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 4 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 4 : prevIndex - 1
    )
  }

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + 4)

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our conferences, workshops, and community events that showcase our commitment to advancing anesthesia and critical care.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary" />
          </button>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                    <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                      View More
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 4) === index ? 'bg-secondary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of our activities and events?
          </p>
          <a 
            href="/gallery"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View Full Gallery</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}