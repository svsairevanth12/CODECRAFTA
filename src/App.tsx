import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Zap, Brain, Network, Mail, Phone, Linkedin, Instagram, Facebook, Code, Trophy, Clock, Target, ChevronRight, Menu, X, Globe } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'problems', label: 'Problems' },
    { id: 'register', label: 'Register' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-500/20 lg:hidden"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-blue-400" />
        ) : (
          <Menu className="w-6 h-6 text-blue-400" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 lg:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-8">
            CODE CRAFTA
          </h2>
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center group
                    ${activeSection === item.id 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'text-gray-400 hover:bg-blue-500/10 hover:text-blue-300'}`}
                >
                  <ChevronRight className={`w-5 h-5 mr-3 transition-transform duration-300 
                    ${activeSection === item.id ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Sidebar - keep existing code */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-lg z-50 hidden lg:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-8">
            CODE CRAFTA
          </h2>
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center group
                    ${activeSection === item.id 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'text-gray-400 hover:bg-blue-500/10 hover:text-blue-300'}`}
                >
                  <ChevronRight className={`w-4 h-4 mr-2 transition-transform duration-300 
                    ${activeSection === item.id ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="lg:ml-64">
        {/* Hero Section */}
        <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 
            transform transition-transform duration-1000 hover:scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 text-center">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mb-4">
                CODE CRAFTA
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">National Level Hackathon</p>
              <p className="text-xl text-indigo-300 mb-8">
                Presented by GATES IDEA LAB<br />
                in collaboration with Quark, BITS Pilani Goa
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center text-blue-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>24th January 2025</span>
                </div>
                <div className="hidden md:block text-gray-400">|</div>
                <div className="flex items-center text-blue-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Gates Institute of Technology</span>
                </div>
              </div>
              <a
                href="https://forms.gle/7oFvvBBvsSZ3AA3x6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
              >
                Register Now
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Code Crafta */}
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-xl backdrop-blur-sm 
                hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">CODE CRAFTA</h3>
                <p className="text-gray-300">
                  A premier national-level hackathon fostering innovation and problem-solving. 
                  Join us for 24 hours of coding, creativity, and collaboration.
                </p>
              </div>

              {/* Gates Idea Lab */}
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-xl backdrop-blur-sm 
                hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">GATES IDEA LAB</h3>
                <p className="text-gray-300">
                  An innovation hub dedicated to nurturing tech talent and entrepreneurial spirit.
                  We believe in turning ideas into impactful solutions.
                </p>
              </div>

              {/* The Quark */}
              <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 p-8 rounded-xl backdrop-blur-sm 
                hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-indigo-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                  <Network className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">THE QUARK</h3>
                <p className="text-gray-300">
                  BITS Pilani Goa's flagship techno-management fest, bringing together the brightest minds
                  for innovation and technological advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section id="highlights" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "Exciting Problems", desc: "Real-world challenges" },
                { icon: Brain, title: "Win Prizes", desc: "Recognition & rewards" },
                { icon: Users, title: "Network", desc: "Meet tech enthusiasts" },
                { icon: Network, title: "Innovation", desc: "Cutting-edge challenges" }
              ].map((item, index) => (
                <div key={index} className="bg-black/40 p-6 rounded-xl backdrop-blur-sm hover:bg-black/60 
                  transition-all duration-300 hover:transform hover:scale-105 group">
                  <item.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Event Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
                {[
                  { time: "9:00 AM", title: "Registration & Check-in", desc: "Welcome kit distribution" },
                  { time: "10:00 AM", title: "Opening Ceremony", desc: "Problem statement announcement" },
                  { time: "11:00 AM", title: "Hacking Begins", desc: "Start your innovation journey" },
                  { time: "8:00 PM", title: "Mentorship Session", desc: "Expert guidance and feedback" },
                  { time: "Next Day 10:00 AM", title: "Project Submission", desc: "Submit your solutions" },
                  { time: "12:00 PM", title: "Presentations", desc: "Present to the judges" },
                  { time: "2:00 PM", title: "Closing Ceremony", desc: "Winners announcement" }
                ].map((item, index) => (
                  <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'ml-auto pl-12' : 'mr-auto pr-12'} 
                    w-1/2 transform transition-all duration-300 hover:scale-105`}>
                    <div className={`bg-gradient-to-br from-blue-900/40 to-indigo-900/20 p-6 rounded-xl 
                      backdrop-blur-sm ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <div className="absolute top-4 w-4 h-4 rounded-full bg-blue-500 
                        transform -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                      <time className="text-blue-400 font-semibold">{item.time}</time>
                      <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                      <p className="text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Prizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { place: "2nd", prize: "₹30,000", icon: Trophy, color: "from-silver-500 to-gray-600" },
                { place: "1st", prize: "₹50,000", icon: Trophy, color: "from-yellow-500 to-yellow-600" },
                { place: "3rd", prize: "₹20,000", icon: Trophy, color: "from-bronze-500 to-orange-600" }
              ].map((item, index) => (
                <div key={index} className={`relative group ${index === 1 ? '-mt-8' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/20 p-8 rounded-xl backdrop-blur-sm 
                    transform transition-all duration-300 hover:scale-105 text-center">
                    <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-4 rounded-full w-20 h-20 
                      mx-auto flex items-center justify-center mb-6">
                      <Trophy className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{item.place}</h3>
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      {item.prize}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statements */}
        <section id="problems" className="py-20 bg-black/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Problem Statements</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay tuned! Problem statements will be shared via email post-registration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              {[
                { title: "AI/ML", icon: Brain, desc: "Artificial Intelligence and Machine Learning challenges" },
                { title: "Web3", icon: Network, desc: "Blockchain and Decentralized Applications" },
                { title: "Open Innovation", icon: Zap, desc: "Your creative solutions to real-world problems" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 p-6 rounded-xl 
                  backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Details */}
        <section id="register" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Registration Details</h2>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/20 to-indigo-900/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Important Dates</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Registration Opens: Jan 9, 2025</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Registration Closes: Jan 21, 2025</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Event Date: Jan 24, 2025</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Requirements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <Target className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Valid College ID</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Target className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Team of 1-3 Members</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Target className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Laptop & Charger</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://forms.gle/7oFvvBBvsSZ3AA3x6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8">
                {/* Left Contact Card */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 p-8 rounded-xl backdrop-blur-sm 
                  transform transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-12 h-12 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Tilak G</h3>
                    <p className="text-blue-400 mb-4">President of Gates Idea Lab</p>
                    <div className="flex items-center justify-center gap-4">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">9347376258</span>
                    </div>
                  </div>
                </div>

                {/* Right Contact Card */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-900/20 to-blue-900/10 p-8 rounded-xl backdrop-blur-sm 
                  transform transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                      <Code className="w-12 h-12 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">S.V.Sai Revanth</h3>
                    <p className="text-indigo-400 mb-4">President of Gates Coding Club</p>
                    <div className="flex items-center justify-center gap-4">
                      <Phone className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-300">9398789085</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center space-y-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">ideaclub@gatesit.ac.in</p>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <a 
                    href="https://gatesit.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    www.gatesit.ac.in
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">
                    N.H.44, Gootyanantapuram (Village),<br />
                    Peddavadugur (M), Gooty - 515 401,<br />
                    Ananthapuramu (Dist),<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Instagram, link: "https://www.instagram.com/gatesinstituteoftechnology/" },
                { icon: Facebook, link: "https://www.facebook.com/gatesit.ac.in/?locale=te_IN" },
                { icon: Linkedin, link: "#" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-center text-gray-500 mb-8">
              © 2025 CODE CRAFTA | All Rights Reserved
            </p>

            {/* Developer Credits */}
            <div className="max-w-2xl mx-auto pt-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-500/50 bg-gradient-to-b from-blue-900/20 to-black/40">
                  <img 
                    src="https://github.com/svsairevanth12/CODECRAFTA/blob/main/developer.jpg" 
                    alt="Developer" 
                    className="w-full h-full object-cover object-top transform -translate-y-1 scale-110"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-400 mb-2">Designed & Developed by</p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-1">
                    S.V.Sai Revanth
                  </h3>
                  <p className="text-blue-500/80 text-sm mb-2">President, Gates Coding Club</p>
                  <p className="text-gray-500 text-sm">
                    Full Stack Developer | UI/UX Designer 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
