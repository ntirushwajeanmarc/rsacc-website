'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Our Location",
      details: [
        "KK 228 St, Kigali, Rwanda",
        "Kigali Convention Centre Area",
        "Gasabo District"
      ]
    },
    {
      icon: PhoneIcon,
      title: "Phone Numbers",
      details: [
        "+250 788 772 114",
        "+250 788 000 000",
        "Mon-Fri: 8:00 AM - 5:00 PM"
      ]
    },
    {
      icon: EnvelopeIcon,
      title: "Email Addresses",
      details: [
        "info@rsacc.pro",
        "contact@rsacc.pro",
        "membership@rsacc.pro"
      ]
    },
    {
      icon: ClockIcon,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ]

  const departments = [
    {
      name: "General Inquiries",
      email: "info@rsacc.pro",
      phone: "+250 788 772 114",
      description: "For general questions about RSACC"
    },
    {
      name: "Membership",
      email: "membership@rsacc.pro",
      phone: "+250 788 000 001",
      description: "Membership applications and renewals"
    },
    {
      name: "Events & Training",
      email: "events@rsacc.pro",
      phone: "+250 788 000 002",
      description: "Event registration and training programs"
    },
    {
      name: "Research & Publications",
      email: "research@rsacc.pro",
      phone: "+250 788 000 003",
      description: "Research collaboration and publications"
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
            <EnvelopeIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Get in touch with us for any questions, membership inquiries, or collaboration opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <Contact />

      {/* Departments Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Contact Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the specific department that best addresses your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span className="font-medium">{dept.email}</span>
                  </a>
                  <a 
                    href={`tel:${dept.phone}`}
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span className="font-medium">{dept.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office in Kigali, Rwanda
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4865884324595!2d30.0589!3d-1.9578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMjguMSJTIDMwwrAwMyczMi4wIkU!5e0!3m2!1sen!2srw!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="RSACC Location Map"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Address</h3>
                    <p className="text-white/90">
                      KK 228 St, Kigali, Rwanda<br />
                      Kigali Convention Centre Area, Gasabo District<br />
                      P.O. Box: 1234 Kigali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How can I become a member of RSACC?",
                  answer: "To become a member, you need to be a qualified anesthesiologist or critical care specialist practicing in Rwanda. Fill out the membership application form and submit it along with required documents. Our membership committee will review your application and contact you within 2 weeks."
                },
                {
                  question: "Do you offer continuing medical education (CME) credits?",
                  answer: "Yes, all our workshops, conferences, and training programs offer CME credits accredited by the Rwanda Medical and Dental Council. Certificates are provided upon successful completion of the programs."
                },
                {
                  question: "How can I register for upcoming events?",
                  answer: "You can register for our events through our online registration portal at forms.rsacc.pro or contact our events department directly. Early registration is recommended as spaces are limited."
                },
                {
                  question: "Does RSACC support research activities?",
                  answer: "Yes, we actively support research in anesthesia and critical care. We provide guidance on research proposals, facilitate collaborations, and assist with finding funding opportunities. Contact our research department for more information."
                },
                {
                  question: "What are the membership fees?",
                  answer: "Membership fees vary based on category (full member, associate member, student member). Please contact our membership department for current fee structure and payment options."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 card-hover animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Still have questions?
              </p>
              <a
                href="mailto:info@rsacc.pro"
                className="text-secondary hover:text-primary font-semibold transition-colors"
              >
                Send us an email →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Links */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Follow us on social media for the latest updates, news, and events
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80">
                For urgent matters or emergencies, please contact us directly at{' '}
                <a href="tel:+250788772114" className="font-bold text-white hover:underline">
                  +250 788 772 114
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
