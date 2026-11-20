'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Members', href: '/members' },
    { name: 'Contact', href: '/contact' },
    { 
      name: 'Events', 
      href: '#',
      submenu: [
        { name: 'Upcoming', href: '/events/upcoming' },
        { name: 'Abstracts & Registration', href: 'https://forms.rsacc.pro/' },
        { name: 'Past Events', href: '/events/past' }
      ]
    }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 text-primary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Welcome to RSACC</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:250-788-772-114" className="hover:text-secondary transition-colors">
                Call Us: 250-788-772-114
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                RSACC
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-primary">RSACC</h1>
                <p className="text-xs text-gray-500">Rwanda Society of Anesthesia & Critical Care</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-primary hover:text-secondary font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-secondary transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-primary hover:text-secondary transition-colors"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* Phone Info */}
            <div className="hidden md:flex items-center space-x-2 text-primary">
              <PhoneIcon className="w-5 h-5" />
              <div className="text-sm">
                <div className="font-medium">Call Us</div>
                <a href="tel:250-788-772-114" className="hover:text-secondary">
                  250-788-772-114
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-secondary">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-secondary rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}