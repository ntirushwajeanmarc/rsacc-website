'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  UserGroupIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')

  const members = [
    {
      id: 1,
      name: "Prof. Paulin R. BANGUTI",
      position: "Chief Consultant & Chairperson",
      role: "leadership",
      institution: "Rwanda Society of Anesthesia & Critical Care",
      specialty: "Anesthesiology & Critical Care",
      email: "p.banguti@rsacc.pro",
      phone: "+250 788 772 114",
      bio: "Professor Banguti is the chief consultant and legal representative of RSACC. He has over 20 years of experience in anesthesiology and critical care medicine."
    },
    {
      id: 2,
      name: "Dr. Christian MUKWESI",
      position: "Senior Consultant & Vice-Chair",
      role: "leadership",
      institution: "King Faisal Hospital",
      specialty: "Anesthesiology",
      email: "c.mukwesi@rsacc.pro",
      phone: "+250 788 000 001",
      bio: "Dr. Mukwesi serves as the deputy legal representative and vice-chair of RSACC, bringing extensive expertise in clinical anesthesia practice."
    },
    {
      id: 3,
      name: "Dr. Egide BUREGEYA",
      position: "Senior Consultant & Secretary General",
      role: "leadership",
      institution: "Rwanda Military Hospital",
      specialty: "Anesthesiology & Critical Care",
      email: "e.buregeya@rsacc.pro",
      phone: "+250 788 000 002",
      bio: "As Secretary General, Dr. Buregeya oversees the administrative functions and coordinates society activities."
    },
    {
      id: 4,
      name: "Dr. Gashame Dona Fabiola",
      position: "Anesthesiologist",
      role: "member",
      institution: "CHUK Hospital",
      specialty: "Anesthesiology",
      email: "d.gashame@rsacc.pro",
      phone: "+250 788 000 003",
      bio: "Dr. Gashame specializes in obstetric and pediatric anesthesia with a focus on maternal health."
    },
    {
      id: 5,
      name: "Dr. Christian NDARIBITSE",
      position: "Anesthesiologist",
      role: "member",
      institution: "King Faisal Hospital",
      specialty: "Anesthesiology",
      email: "c.ndaribitse@rsacc.pro",
      phone: "+250 788 000 004",
      bio: "Dr. Ndaribitse has expertise in cardiac anesthesia and perioperative medicine."
    },
    {
      id: 6,
      name: "Dr. Samuel MUHUMUZA",
      position: "Senior Consultant Anesthesiologist",
      role: "member",
      institution: "Rwanda Military Hospital",
      specialty: "Anesthesiology & Pain Management",
      email: "s.muhumuza@rsacc.pro",
      phone: "+250 788 000 005",
      bio: "Dr. Muhumuza is a senior consultant with special interest in pain management and regional anesthesia."
    },
    {
      id: 7,
      name: "Jean Habimana",
      position: "Anesthesiologist",
      role: "member",
      institution: "Rwanda Military Hospital",
      specialty: "Anesthesiology",
      email: "j.habimana@rsacc.pro",
      phone: "+250 788 000 006",
      bio: "Dr. Habimana is an experienced anesthesiologist serving at Rwanda Military Hospital."
    },
    {
      id: 8,
      name: "Edouard Uwamahoro",
      position: "Senior Consultant Anesthesiologist",
      role: "member",
      institution: "King Faisal Hospital",
      specialty: "Anesthesiology",
      email: "e.uwamahoro@rsacc.pro",
      phone: "+250 788 000 007",
      bio: "Dr. Uwamahoro is a senior consultant anesthesiologist with extensive clinical experience."
    },
    {
      id: 9,
      name: "Dr. Rosemary MUKUNZI",
      position: "Chief Consultant Anaesthesiologist and Senior Clinical Lecturer UR",
      role: "member",
      institution: "University of Rwanda",
      specialty: "Anesthesiology & Medical Education",
      email: "r.mukunzi@rsacc.pro",
      phone: "+250 788 000 008",
      bio: "Dr. Mukunzi is a chief consultant anaesthesiologist and senior clinical lecturer at the University of Rwanda."
    },
    {
      id: 10,
      name: "Claudine Uzamukunda",
      position: "Anesthesiologist",
      role: "member",
      institution: "CHUK Hospital",
      specialty: "Anesthesiology",
      email: "c.uzamukunda@rsacc.pro",
      phone: "+250 788 000 009",
      bio: "Dr. Uzamukunda is a dedicated anesthesiologist practicing at CHUK Hospital."
    },
    {
      id: 11,
      name: "Jean Damascène NYANDWI",
      position: "Anesthesiologist",
      role: "member",
      institution: "Rwanda Military Hospital",
      specialty: "Anesthesiology",
      email: "jd.nyandwi@rsacc.pro",
      phone: "+250 788 000 010",
      bio: "Dr. Nyandwi is an anesthesiologist contributing to excellent patient care at Rwanda Military Hospital."
    }
  ]

  const roles = [
    { value: 'all', label: 'All Members' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'member', label: 'Members' }
  ]

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.institution.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'all' || member.role === selectedRole
    return matchesSearch && matchesRole
  })

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
            <UserGroupIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Our Members
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Meet the dedicated professionals advancing anesthesia and critical care in Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Total Members</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600 font-medium">Institutions</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600 font-medium">Specialties</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Combined</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, position, or institution..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {/* Role Filter */}
            <div className="flex gap-2 w-full md:w-auto">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedRole === role.value
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:shadow-md'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Member Header */}
                <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white relative">
                  <div className="absolute top-4 right-4">
                    {member.role === 'leadership' && (
                      <span className="bg-yellow-500 px-3 py-1 rounded-full text-xs font-semibold">
                        Leadership
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <UserGroupIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-center text-sm">
                    {member.position}
                  </p>
                </div>

                {/* Member Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <BriefcaseIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Institution</div>
                      <div className="text-gray-700 font-medium">{member.institution}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <AcademicCapIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Specialty</div>
                      <div className="text-gray-700 font-medium">{member.specialty}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 space-y-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <UserGroupIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No Members Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Become a Member
              </h2>
              <p className="text-xl text-gray-600">
                Join a community of dedicated anesthesia and critical care professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Professional Development",
                  description: "Access to continuous education, workshops, and training programs"
                },
                {
                  title: "Networking Opportunities",
                  description: "Connect with peers and experts in anesthesia and critical care"
                },
                {
                  title: "Research Support",
                  description: "Collaboration opportunities and research funding guidance"
                },
                {
                  title: "Advocacy & Recognition",
                  description: "Voice in professional matters and recognition of excellence"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Apply for Membership
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
