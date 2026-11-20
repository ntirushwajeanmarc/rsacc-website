'use client'

import Image from 'next/image'
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      {/* Footer Widgets */}
      <div className="border-b border-dark-light">
        <div className="container-page py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <div>
                <Image
                  src="/logo-rsacc.png"
                  alt="RSACC logo"
                  width={128}
                  height={128}
                  className="mb-4 h-14 w-14"
                />
                <h3 className="text-2xl font-bold text-white mb-4">RSACC</h3>
                <h4 className="text-xl font-semibold text-white mb-6">
                  Rwanda Society of Anesthesia and Critical Care – Committed to Excellence in Patient Care.
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                We are a professional body dedicated to the advancement of anesthesia and critical care services in Rwanda. 
                Our mission is to promote excellence in clinical practice, education, and research in the field of anesthesia 
                and critical care medicine.
              </p>
            </div>

            {/* Membership Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">MEMBERSHIP</h3>
                <h4 className="text-xl font-semibold text-white mb-6">
                  Join Our Community
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Networking opportunities with professionals in the field.<br />
                Access to the latest research and best practices.<br />
                Opportunities for professional development through workshops and conferences.<br />
                Advocacy on behalf of anesthesiologists and critical care practitioners in Rwanda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-dark-light">
        <div className="container-page py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Address</h4>
                <p className="text-gray-300">KK 228 st</p>
                <p className="text-gray-300">Kigali, Rwanda</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-gray-300">Main Email: contact@rsacc.pro</p>
                <p className="text-gray-300">Inquiries: info@rsacc.pro</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-gray-300">Office Telephone: 250-788-772-114</p>
                <p className="text-gray-300">Mobile: 250-788-772-114</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dark-light border-t border-dark">
        <div className="container-page py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400">
              <p>© rsacc.pro {currentYear} | All Rights Reserved</p>
            </div>

            {/* Footer Navigation */}
            <nav className="flex space-x-6">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="/sitemap" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-secondary hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}