'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function UpcomingEventsPage() {
  const [filter, setFilter] = useState('all')

  const upcomingEvents = [
    {
      id: 1,
      title: "The Rwanda Anesthesia and Critical Care Conference (RACCC 2025)",
      date: "2025",
      time: "TBA",
      location: "Kigali, Rwanda",
      category: "conference",
      attendees: "Expected Participants TBA",
      description: "The Rwanda Anesthesia and Critical Care Conference (RACCC 2025) is our flagship annual conference bringing together anesthesia and critical care professionals.",
      highlights: [
        "International and local expert speakers",
        "Hands-on workshops and training sessions",
        "Research presentations and poster sessions",
        "Networking opportunities with healthcare professionals",
        "Latest advances in anesthesia and critical care"
      ],
      registrationUrl: "https://forms.rsacc.pro/",
      status: "open"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'conference', label: 'Conferences' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'seminar', label: 'Seminars' },
    { value: 'meeting', label: 'Meetings' }
  ]

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === filter)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <CalendarIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Stay updated with our latest conferences, workshops, and educational programs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold uppercase">
                      {event.category}
                    </span>
                    {event.status === 'open' && (
                      <span className="inline-block bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                        Registration Open
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {event.title}
                  </h3>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700 space-x-3">
                    <CalendarIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 space-x-3">
                    <ClockIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-700 space-x-3">
                    <MapPinIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 space-x-3">
                    <UserGroupIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{event.attendees}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed pt-4">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-4">
                    <h4 className="font-semibold text-primary mb-3">Event Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Registration Button */}
                  <div className="pt-6">
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Register Now</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No Events Found</h3>
              <p className="text-gray-500">Check back later for upcoming {filter} events</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Our Events
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events and educational opportunities
            </p>
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
