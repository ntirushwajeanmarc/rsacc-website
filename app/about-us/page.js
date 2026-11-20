'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import MissionVision from '../components/MissionVision'
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  ChartBarIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function AboutUsPage() {
  const objectives = [
    {
      icon: AcademicCapIcon,
      title: "Research and Innovation",
      description: "Innovation is at the core of our mission. RSACC actively engages in research endeavors, clinical trials, and collaborative projects to drive medical advancements in anesthesia and critical care."
    },
    {
      icon: HeartIcon,
      title: "Patient-Centric Care",
      description: "We prioritize delivering exceptional patient care through advanced anesthesia techniques, meticulous critical care management, and effective pain relief strategies."
    },
    {
      icon: UserGroupIcon,
      title: "Community Engagement",
      description: "We believe in the power of community outreach and education. RSACC conducts health awareness campaigns, public seminars, and workshops to raise awareness about anesthesia, critical care, and related healthcare topics."
    },
    {
      icon: GlobeAltIcon,
      title: "Training Programs",
      description: "RSACC offers comprehensive training programs including VAST, MEPA, INSPIRE, and FCCS for medical professionals, equipping them with advanced skills in anesthesia, critical care, and pain management."
    }
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              About RSACC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Rwanda Society of Anesthesia and Critical Care - Leading the advancement of anesthesia and critical care excellence in Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-fadeInUp">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-600 font-medium">Awards Win</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">1.5K</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Objectives Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              True Healthcare For A Nation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At the Rwanda Society of Anesthesia and Critical Care (RSACC), we are dedicated to advancing the field of anesthesia and critical care to improve healthcare outcomes for patients across Rwanda. Our multifaceted approach encompasses a range of services, initiatives, and collaborations aimed at enhancing medical practice, education, research, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <objective.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be part of a professional society dedicated to advancing anesthesia and critical care in Rwanda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Contact Us
              </a>
              <a 
                href="/members"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 inline-block"
              >
                View Members
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
