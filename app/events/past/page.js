'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  CalendarIcon, 
  MapPinIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function PastEventsPage() {
  const [selectedYear, setSelectedYear] = useState('2024')

  const pastEvents = [
    {
      id: 1,
      year: "2024",
      title: "All Africa Anaesthesiology Congress",
      date: "2024",
      location: "Africa",
      attendees: "International Participants",
      category: "conference",
      description: "RSACC participated in the All Africa Anaesthesiology Congress, connecting with anesthesia professionals across the continent.",
      outcomes: [
        "International collaboration opportunities",
        "Knowledge exchange with African colleagues",
        "Presentation of Rwanda's advances in anesthesia",
        "Networking with continental experts"
      ],
      gallery: 8
    },
    {
      id: 2,
      year: "2024",
      title: "The 5th Annual Conference",
      date: "2024",
      location: "Kigali, Rwanda",
      attendees: "300+ Participants",
      category: "conference",
      description: "The 5th Annual RSACC Conference brought together local and international experts in anesthesia and critical care.",
      outcomes: [
        "Multiple research presentations",
        "Hands-on clinical workshops",
        "Policy discussions on anesthesia standards",
        "Award ceremony recognizing excellence"
      ],
      gallery: 12
    }
  ]

  const years = ['2024', '2023', '2022']
  
  const filteredEvents = selectedYear === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.year === selectedYear)

  const eventStats = {
    total: pastEvents.length,
    attendees: "500+",
    workshops: pastEvents.filter(e => e.category === 'workshop').length,
    conferences: pastEvents.filter(e => e.category === 'conference').length
  }

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
            <CheckCircleIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Past Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Explore our successful conferences, workshops, and educational programs
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{eventStats.total}+</div>
              <div className="text-gray-600 font-medium">Total Events</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{eventStats.attendees}</div>
              <div className="text-gray-600 font-medium">Attendees</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{eventStats.workshops}</div>
              <div className="text-gray-600 font-medium">Workshops</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{eventStats.conferences}</div>
              <div className="text-gray-600 font-medium">Conferences</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedYear === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:shadow-md'
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className="relative pb-12 last:pb-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Timeline Line */}
                {index !== filteredEvents.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>
                )}
                
                {/* Event Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Event Info */}
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} relative`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
                      {/* Category Badge */}
                      <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold uppercase mb-4">
                        {event.category}
                      </span>
                      
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700 space-x-2">
                          <CalendarIcon className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700 space-x-2">
                          <MapPinIcon className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700 space-x-2">
                          <UserGroupIcon className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{event.attendees}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Outcomes */}
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Key Outcomes:</h4>
                        <ul className="space-y-2">
                          {event.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Visual/Year */}
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative flex items-center justify-center`}>
                    {/* Year Badge - Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-xl border-4 border-white">
                        {event.year}
                      </div>
                    </div>
                    
                    {/* Gallery Placeholder */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 w-full">
                      <div className="bg-white rounded-xl p-6 text-center">
                        <PhotoIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <div className="text-gray-600 font-medium mb-2">Event Gallery</div>
                        <div className="text-sm text-gray-500">{event.gallery} Photos Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No Events Found</h3>
              <p className="text-gray-500">No events for the selected year</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Future Events
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss out on our upcoming conferences, workshops, and educational opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events/upcoming"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                View Upcoming Events
              </a>
              <a
                href="https://forms.rsacc.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
