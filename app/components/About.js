'use client'

import { UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    {
      icon: UserGroupIcon,
      title: "Who we are?",
      description: "We are a professional body dedicated to the advancement of anesthesia and critical care services in Rwanda."
    },
    {
      icon: AcademicCapIcon,
      title: "Our mission",
      description: "Is to promote excellence in clinical practice, education, and research in the field of anesthesia and critical care medicine."
    },
    {
      icon: HeartIcon,
      title: "Our vision",
      description: "To be a leading professional society in Africa, recognized for improving healthcare standards and patient safety."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="gradient-brand-r rounded-2xl p-8 rotate-3">
              <div className="bg-white rounded-2xl p-6 -rotate-3 shadow-2xl">
                <div className="aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <UserGroupIcon className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium">RSACC Team</p>
                    <p className="text-sm">Professional Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Welcome to the Rwanda Society of Anesthesia and Critical Care
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are committed to advancing the practice of anesthesia and critical care medicine through education, research, and professional development.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <a 
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}