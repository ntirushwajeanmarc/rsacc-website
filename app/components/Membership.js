'use client'

export default function Membership() {
  const benefits = [
    "Networking opportunities with professionals in the field",
    "Access to the latest research and best practices",
    "Opportunities for professional development through workshops and conferences",
    "Advocacy on behalf of anesthesiologists and critical care practitioners in Rwanda"
  ]

  return (
    <section id="membership" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-secondary font-semibold text-lg uppercase tracking-wider">
                  Membership
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Become part of Rwanda's leading professional society for anesthesia and critical care practitioners.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a 
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Join Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 transform -rotate-2">
              <div className="bg-white rounded-2xl p-6 transform rotate-2 shadow-2xl">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-primary mb-2">Professional Network</p>
                    <p className="text-gray-600">Connect with experts in the field</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-8 w-8 h-8 bg-secondary rounded-lg transform rotate-45 opacity-60"></div>
            <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-primary rounded-lg transform -rotate-45 opacity-60"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Members" },
            { number: "10+", label: "Years Experience" },
            { number: "5+", label: "Annual Conferences" },
            { number: "100+", label: "Patients Impacted" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}