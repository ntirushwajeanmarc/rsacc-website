'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const members = [
    {
      name: "Prof. Paulin R. BANGUTI",
      position: "Chief consultant, Legal representative and Chairperson of RSACC",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr Christian MUKWESI",
      position: "Senior Consultant, Deputy Legal Representative and Vice-Chair of the RSACC",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr Egide BUREGEYA",
      position: "Senior Consultant, Secretary General of the RSACC",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Gashame Dona Fabiola",
      position: "Anesthesiologist",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Christian NDARIBITSE",
      position: "Anesthesiologist",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Samuel Muhumuza",
      position: "Senior consultant Anesthesiologist",
      image: "/api/placeholder/300/300"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === members.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? members.length - 3 : prevIndex - 1
    )
  }

  const visibleMembers = members.slice(currentIndex, currentIndex + 3)

  return (
    <section id="members" className="section-padding bg-gray-50">
      <div className="container-page">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="eyebrow">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team consists of dedicated professionals committed to advancing anesthesia and critical care in Rwanda.
          </p>
        </div>

        {/* Members Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary" />
          </button>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member, index) => (
              <div 
                key={index}
                className="card overflow-hidden card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Member Image */}
                <div className="relative h-64 gradient-brand-br">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserGroupIcon className="w-20 h-20 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {member.position}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.position}</p>
                    <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="/members"
            className="btn-secondary inline-flex items-center space-x-3"
          >
            <UserGroupIcon className="w-5 h-5" />
            <span>ALL MEMBERS</span>
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(members.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index ? 'bg-secondary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}