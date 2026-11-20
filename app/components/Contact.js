'use client'

import { useState } from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    subject: '',
    message: '',
    isHuman: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      subject: '',
      message: '',
      isHuman: false
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-white/80 font-semibold text-lg uppercase tracking-wider">
                  Contact Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Get in Touch!
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Have questions or want to join our community? Reach out to us and we'll be happy to assist you.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={formData.isHuman}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label className="text-white/80 text-sm">
                    Click if you are human
                  </label>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-w-16 aspect-h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white/80">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Our Location</p>
                  <p className="text-sm">KK 228 st, Kigali, Rwanda</p>
                  <button className="mt-4 bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors">
                    View on Map
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-6">
              {/* Address */}
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-white/80">KK 228 st</p>
                  <p className="text-white/80">Kigali, Rwanda</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-white/80">Main Email: contact@rsacc.pro</p>
                  <p className="text-white/80">Inquiries: info@rsacc.pro</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-white/80">Office: 250-788-772-114</p>
                  <p className="text-white/80">Mobile: 250-788-772-114</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-white/80 text-lg mb-6">
              Become a member today and be part of Rwanda's leading professional society for anesthesia and critical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/membership"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Join RSACC
              </a>
              <a 
                href="/events"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}