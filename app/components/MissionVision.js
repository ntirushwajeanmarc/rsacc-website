'use client'

import { 
  HeartIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

export default function MissionVision() {
  const values = [
    {
      icon: HeartIcon,
      title: "Our Mission",
      description: "To improve patient outcomes in anesthesia and critical care through professional development, advocacy, and promotion of best practices in the field.",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: AcademicCapIcon,
      title: "Our Vision",
      description: "To be a leading professional society in Africa, recognized for improving healthcare standards and patient safety in anesthesia and critical care.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Our Values",
      description: "Excellence, Integrity, Collaboration, Innovation, and Compassion.",
      color: "from-green-400 to-emerald-600"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Core Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our mission, vision, and values, we strive to advance the practice of anesthesia and critical care in Rwanda.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 group-hover:scale-110`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our society is built on a foundation of professional excellence, continuous learning, and unwavering commitment to patient safety and quality care.
              </p>
              <div className="space-y-3">
                {[
                  "Continuous Professional Development",
                  "Evidence-Based Practice",
                  "Patient-Centered Care",
                  "Innovation and Research"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white">
              <div className="text-center">
                <AcademicCapIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-4">Professional Growth</h4>
                <p className="text-white/90 leading-relaxed">
                  We provide opportunities for continuous learning, skill development, and professional networking to enhance the quality of anesthesia and critical care services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}