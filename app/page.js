'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Members from './components/Members'
import Membership from './components/Membership'
import MissionVision from './components/MissionVision'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary font-medium">Loading RSACC...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Members />
      <Membership />
      <MissionVision />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}