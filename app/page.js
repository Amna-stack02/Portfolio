 "use client";
 import React, { useState } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CodeMaster</h1>
                <p className="text-xs text-purple-300">Pakistan's No.1 Online Service Platform</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => navigateTo('home')} className={`${activePage === 'home' ? 'text-purple-400' : 'text-gray-300'} hover:text-purple-400 transition flex items-center space-x-1`}>
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button onClick={() => navigateTo('about')} className={`${activePage === 'about' ? 'text-purple-400' : 'text-gray-300'} hover:text-purple-400 transition flex items-center space-x-1`}>
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => navigateTo('services')} className={`${activePage === 'services' ? 'text-purple-400' : 'text-gray-300'} hover:text-purple-400 transition flex items-center space-x-1`}>
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
              </button>
              <button onClick={() => navigateTo('contact')} className={`${activePage === 'contact' ? 'text-purple-400' : 'text-gray-300'} hover:text-purple-400 transition flex items-center space-x-1`}>
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => navigateTo('home')} className={`${activePage === 'home' ? 'text-purple-400' : 'text-gray-300'} w-full text-left py-2 flex items-center space-x-2`}>
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button onClick={() => navigateTo('about')} className={`${activePage === 'about' ? 'text-purple-400' : 'text-gray-300'} w-full text-left py-2 flex items-center space-x-2`}>
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => navigateTo('services')} className={`${activePage === 'services' ? 'text-purple-400' : 'text-gray-300'} w-full text-left py-2 flex items-center space-x-2`}>
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
              </button>
              <button onClick={() => navigateTo('contact')} className={`${activePage === 'contact' ? 'text-purple-400' : 'text-gray-300'} w-full text-left py-2 flex items-center space-x-2`}>
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">
        {activePage === 'home' && (
          <div className="min-h-screen flex items-center justify-center px-4 relative">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  Sami Ullah
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  A Full-Stack Developer | Building High-Performance Web Apps with Next.js, React & Vue | 
                  TailwindCSS Specialist | JavaScript & TypeScript Enthusiast | Node.js & MongoDB
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <button onClick={() => navigateTo('about')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition">
                  About Me
                </button>
                <button onClick={() => navigateTo('contact')} className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition border border-purple-500">
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'about' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                      alt="Developer workspace" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-50 blur-2xl"></div>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p className="text-lg leading-relaxed">
                    I am passionate about the future of Artificial Intelligence and its transformative potential across industries. 
                    Currently, I am working in Web Development, where I have gained 1 year of hands-on experience building dynamic 
                    and responsive web applications.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My expertise lies in frontend development with strong skills in Next.js, React.js, and TailwindCSS. I am also 
                    enthusiastic about JavaScript and TypeScript, continually expanding my knowledge to create efficient and scalable solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I am eager to grow professionally and contribute to innovative projects that blend cutting-edge AI technologies 
                    with modern web development.
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Web Development', 'Next.js', 'React.js', 'TailwindCSS', 'JavaScript', 'TypeScript'].map((skill) => (
                        <div key={skill} className="bg-slate-800 px-4 py-2 rounded-lg text-center border border-purple-500/30 hover:border-purple-500 transition">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'services' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Web Development', desc: 'Custom web applications built with modern technologies', icon: Code },
                  { title: 'Frontend Design', desc: 'Beautiful and responsive user interfaces', icon: Briefcase },
                  { title: 'Full-Stack Solutions', desc: 'End-to-end development from database to UI', icon: User },
                  { title: 'API Development', desc: 'RESTful APIs with Node.js and MongoDB', icon: Code },
                  { title: 'Digital Marketing', desc: 'Strategic digital marketing solutions to grow your business', icon: Briefcase },
                  { title: 'SEO & Google Ads', desc: 'Search engine optimization and targeted advertising campaigns', icon: User }
                ].map((service, idx) => (
                  <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition hover:shadow-xl hover:scale-105">
                    <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Get In Touch</h2>
              <div className="bg-slate-800 p-8 rounded-2xl border border-purple-500/30">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none h-32" placeholder="Your message"></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CodeMaster</h3>
                  <p className="text-xs text-purple-300">Pakistan's No.1 Online Service Platform</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Gives you all online services</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => navigateTo('home')} className="block text-gray-400 hover:text-purple-400 transition">Home</button>
                <button onClick={() => navigateTo('about')} className="block text-gray-400 hover:text-purple-400 transition">About</button>
                <button onClick={() => navigateTo('services')} className="block text-gray-400 hover:text-purple-400 transition">Services</button>
                <button onClick={() => navigateTo('contact')} className="block text-gray-400 hover:text-purple-400 transition">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/sami-ulllah/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.instagram.com/mesamiullah03/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/su1946275" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CodeMaster. All rights reserved. | Designed & Developed by Sami Ullah</p>
          </div>
        </div>
      </footer>
    </div>
  );
}