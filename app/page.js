 "use client";
import React, { useState } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Mail, Linkedin, Twitter, MapPin, Send } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`New Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:su1946275@gmail.com?subject=${subject}&body=${body}`;
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
                <p className="text-xs text-purple-300">Pakistan No.1 Service Platform</p>
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
              <button onClick={() => navigateTo('projects')} className={`${activePage === 'projects' ? 'text-purple-400' : 'text-gray-300'} hover:text-purple-400 transition flex items-center space-x-1`}>
                <Code className="w-4 h-4" />
                <span>Projects</span>
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
              <button onClick={() => navigateTo('projects')} className={`${activePage === 'projects' ? 'text-purple-400' : 'text-gray-300'} w-full text-left py-2 flex items-center space-x-2`}>
                <Code className="w-4 h-4" />
                <span>Projects</span>
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
              <div className="flex flex-wrap justify-center gap-4 mt-8">
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

        {activePage === 'projects' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">My Projects</h2>
              <p className="text-gray-400 text-center mb-12 text-lg">Showcasing my best work in web development</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: 'E-Commerce Platform', 
                    desc: 'Full-stack online shopping platform with payment integration, user authentication, and admin dashboard',
                    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
                    tech: ['Next.js', 'MongoDB', 'Stripe']
                  },
                  { 
                    title: 'Task Management App', 
                    desc: 'Collaborative project management tool with real-time updates and drag-and-drop features',
                    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                    tech: ['React', 'Firebase', 'TailwindCSS']
                  },
                  { 
                    title: 'Social Media Dashboard', 
                    desc: 'Analytics dashboard for tracking social media metrics with beautiful charts and graphs',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                    tech: ['Vue.js', 'Chart.js', 'API']
                  },
                  { 
                    title: 'Blog CMS Platform', 
                    desc: 'Content management system for bloggers with markdown support and SEO optimization',
                    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
                    tech: ['Next.js', 'Sanity', 'TypeScript']
                  },
                  { 
                    title: 'Restaurant Booking System', 
                    desc: 'Online reservation platform with table management and automated email confirmations',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
                    tech: ['React', 'Node.js', 'PostgreSQL']
                  },
                  { 
                    title: 'Fitness Tracker App', 
                    desc: 'Mobile-first fitness application tracking workouts, nutrition, and progress',
                    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
                    tech: ['React Native', 'Express', 'MongoDB']
                  }
                ].map((project, idx) => (
                  <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition hover:shadow-2xl hover:scale-105 transform duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition text-sm">
                          View Demo
                        </button>
                        <button className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 transition text-sm">
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'services' && (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Get In Touch</h2>
              <p className="text-gray-400 text-center mb-12 text-lg">Let's work together on your next project</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition cursor-pointer" onClick={() => window.location.href = 'mailto:su1946275@gmail.com'}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                        <a href="mailto:su1946275@gmail.com" className="text-purple-400 hover:text-purple-300 transition break-all" onClick={(e) => e.stopPropagation()}>
                          su1946275@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                        <p className="text-gray-400">Lahore, Punjab, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-purple-500/30">
                    <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://www.linkedin.com/in/sami-ulllah/" target="_blank" rel="noopener noreferrer" className="bg-slate-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-110">
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                      <a href="https://www.instagram.com/mesamiullah03/" target="_blank" rel="noopener noreferrer" className="bg-slate-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/su1946275" target="_blank" rel="noopener noreferrer" className="bg-slate-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-110">
                        <Twitter className="w-6 h-6 text-white" />
                      </a>
                      <a href="mailto:su1946275@gmail.com" className="bg-slate-700 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition transform hover:scale-110" title="Email Me">
                        <Mail className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-8 rounded-2xl border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none transition" 
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none transition" 
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Your Message</label>
                      <textarea   
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none h-32 transition" 
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>
                    <button 
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CodeMaster</h3>
                  <p className="text-xs text-purple-300">Pakistan No.1 Service Platform</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Gives you all online services</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => navigateTo('home')} className="block text-gray-400 hover:text-purple-400 transition">Home</button>
                <button onClick={() => navigateTo('about')} className="block text-gray-400 hover:text-purple-400 transition">About</button>
                <button onClick={() => navigateTo('projects')} className="block text-gray-400 hover:text-purple-400 transition">Projects</button>
                <button onClick={() => navigateTo('services')} className="block text-gray-400 hover:text-purple-400 transition">Services</button>
                <button onClick={() => navigateTo('contact')} className="block text-gray-400 hover:text-purple-400 transition">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/sami-ulllah/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition transform hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.instagram.com/mesamiullah03/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </a>
                <a href="https://x.com/su1946275" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition transform hover:scale-110">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:su1946275@gmail.com" className="bg-slate-800 p-3 rounded-full hover:bg-purple-500 transition transform hover:scale-110" title="Email Me">
                  <Mail className="w-5 h-5 text-white" />
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