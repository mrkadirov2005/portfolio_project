// src/pages/Home.jsx
"use client"
import { useState } from 'react';
import { Button, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full min-h-screen flex flex-col ">
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 px-4 sm:px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="University Logo" 
              width={48}
              height={48}
              className="h-10 md:h-12 mr-3" 
            />
            <h1 className="text-[0px] md:text-2xl font-bold text-white">MU CAREER CAMP</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#about" className="text-white hover:text-blue-200 transition">About</a>
            <a href="#lessons" className="text-white hover:text-blue-200 transition">Curriculum</a>
            <a href="#events" className="text-white hover:text-blue-200 transition">Events</a>
            <a href="#stories" className="text-white hover:text-blue-200 transition">Success Stories</a>
            <a href="#faq" className="text-white hover:text-blue-200 transition">FAQ</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <IconButton 
              onClick={toggleMobileMenu}
              className="text-white"
            >
              <MenuIcon />
            </IconButton>
          </div>
          
          {/* Desktop Register Button */}
          <a href="https://t.me/karyera_maktabi_mu"><Button 
            variant="contained" 
            className="hidden md:block bg-white text-blue-800 font-bold hover:bg-blue-100"
          >
            Register
          </Button>
          </a>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        className="md:hidden"
      >
        <div className="w-64 h-full bg-blue-800 text-white p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <IconButton onClick={toggleMobileMenu} className="text-white">
              <CloseIcon />
            </IconButton>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="#about" className="hover:text-blue-200 transition" onClick={toggleMobileMenu}>About</a>
            <a href="#lessons" className="hover:text-blue-200 transition" onClick={toggleMobileMenu}>Curriculum</a>
            <a href="#events" className="hover:text-blue-200 transition" onClick={toggleMobileMenu}>Events</a>
            <a href="#stories" className="hover:text-blue-200 transition" onClick={toggleMobileMenu}>Success Stories</a>
            <a href="#faq" className="hover:text-blue-200 transition" onClick={toggleMobileMenu}>FAQ</a>
          </nav>
          <Button 
            variant="contained" 
            fullWidth
            className="mt-8 bg-white text-blue-800 font-bold hover:bg-blue-100"
          >
            Register
          </Button>
        </div>
      </Drawer>

      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-[url('/logo_bg.png')] bg-no-repeat bg-cover from-blue-700 via-blue-800 to-indigo-900 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 bg-gray-500  opacity-95 p-6 md:p-10   animated_link">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Empowering Youth for Career Success</h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Supported by the Youth Affairs Agency of Uzbekistan and the Ministry of Higher Education,
            MU CAREER CAMP helps students build personal brands, master CVs & Resumes, and connect with IT leaders.
          </p>
          <a href="https://t.me/karyera_maktabi_mu">
            <Button variant="contained" className="mt-8 bg-amber-500 text-blue-900 font-bold py-2 px-6 md:py-3 md:px-8 text-md md:text-lg hover:bg-amber-400">
            Join Now
          </Button>
          </a>
          
          <h3 className="text-2xl md:text-3xl mt-12 md:mt-16 mb-6 md:mb-8 font-semibold">Our Official Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-4 md:mt-6">
            <Image 
              className="h-16 md:h-20" 
              src="/youth_affairs_agency.jpg" 
              alt="Youth Affairs Agency"
              width={80}
              height={80}
            />
            <Image 
              className="h-16 md:h-20" 
              src="/higher_education_ministry.jpg" 
              alt="Ministry of Higher Education"
              width={80}
              height={80}
            />
            <Image 
              className="h-16 md:h-20 object-contain" 
              src="/karyera_maktabi.jpg" 
              alt="Karyera Maktabi"
              width={80}
              height={80}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">About MU CAREER CAMP</h3>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8 md:mb-10"></div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            MU CAREER CAMP is a national initiative to prepare students for the future of work.
            We focus on <span className="font-semibold text-blue-700">career guidance</span>, <span className="font-semibold text-blue-700">digital literacy</span>, and <span className="font-semibold text-blue-700">networking</span> by connecting
            ambitious youth with industry leaders. All training materials are officially
            provided by the Youth Affairs Agency and Ministry of Higher Education.
          </p>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-l-4 border-amber-500">
              <div className="text-blue-800 text-3xl md:text-4xl mb-4">🎯</div>
              <h4 className="font-semibold text-lg mb-2">Career Guidance</h4>
              <p className="text-gray-600 text-sm md:text-base">Professional direction based on your skills and interests</p>
            </div>
            <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-l-4 border-green-500">
              <div className="text-blue-800 text-3xl md:text-4xl mb-4">💻</div>
              <h4 className="font-semibold text-lg mb-2">Digital Literacy</h4>
              <p className="text-gray-600 text-sm md:text-base">Master digital tools essential for modern careers</p>
            </div>
            <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-l-4 border-purple-500">
              <div className="text-blue-800 text-3xl md:text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-lg mb-2">Networking</h4>
              <p className="text-gray-600 text-sm md:text-base">Connect with industry leaders and peers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">What You&apos;ll Learn</h3>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-10 md:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {title: "How to Write CVs & Resumes", desc: "Create professional documents that stand out to employers", icon: "📄", color: "bg-blue-100"},
              {title: "Crafting Career Objectives", desc: "Define clear and achievable career goals", icon: "🎯", color: "bg-amber-100"},
              {title: "Building Your Personal Brand", desc: "Develop a compelling professional identity", icon: "🌟", color: "bg-purple-100"},
              {title: "Mastering LinkedIn Networking", desc: "Leverage LinkedIn for career opportunities", icon: "🔗", color: "bg-blue-100"},
              {title: "Creating Impact on Instagram", desc: "Use social media professionally", icon: "📱", color: "bg-pink-100"},
              {title: "Interview Preparation & Soft Skills", desc: "Ace interviews with confidence", icon: "💼", color: "bg-green-100"},
            ].map((lesson, index) => (
              <div key={index} className={`p-4 md:p-6 ${lesson.color} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white`}>
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">{lesson.icon}</div>
                <h4 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-blue-800">{lesson.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-20 container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">Upcoming Workshops & Events</h3>
        <div className="h-1 w-24 bg-amber-500 mx-auto mb-10 md:mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 p-2 md:p-3 rounded-full mr-4">
                <span className="text-xl md:text-2xl">📅</span>
              </div>
              <h4 className="font-semibold text-lg md:text-xl">Meeting with IT Community Leaders</h4>
            </div>
            <p className="text-gray-600 mt-2 pl-0 md:pl-14 text-sm md:text-base">Network with top IT professionals and learn industry secrets. Get insights into the latest trends and career opportunities.</p>
            <div className="mt-4 pl-0 md:pl-14">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">September 15, 2023</span>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg border-t-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-800 p-2 md:p-3 rounded-full mr-4">
                <span className="text-xl md:text-2xl">🌟</span>
              </div>
              <h4 className="font-semibold text-lg md:text-xl">Personal Branding Workshop</h4>
            </div>
            <p className="text-gray-600 mt-2 pl-0 md:pl-14 text-sm md:text-base">Learn to present yourself confidently online and offline. Develop your unique value proposition.</p>
            <div className="mt-4 pl-0 md:pl-14">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">October 5, 2023</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 md:mt-12">
          <Button variant="outlined" className="border-blue-800 text-blue-800 font-bold hover:bg-blue-50">
            View All Events
          </Button>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h3>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-10 md:mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {name: "Ali", quote: "Thanks to MU CAREER CAMP, I could improve my networking by attending this project!", major: "Computer Science"},
              {name: "Malika", quote: "The personal branding workshop completely transformed my LinkedIn profile and I received more then 300+ connnections!", major: "Business Administration"},
              {name: "Javohir", quote: "I learned how to effectively network and connected with my current mentor through the program.", major: "Engineering"},
            ].map((student, i) => (
              <div key={i} className="p-6 md:p-8 bg-white text-black bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg border border-white border-opacity-20">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-xl md:text-2xl">
                  {student.name.charAt(0)}
                </div>
                <p className="italic text-base md:text-lg mb-4 md:mb-6">&quot;{student.quote}&quot;</p>
                <h4 className="font-semibold text-lg md:text-xl">{student.name}</h4>
                <p className="text-blue-200 text-sm md:text-base">{student.major}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Our Partners</h3>
        <div className="h-1 w-24 bg-amber-500 mx-auto mb-10 md:mb-12"></div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <div className="w-40 md:w-48 h-16 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm">
            <span className="font-semibold text-blue-800 text-sm md:text-base">Youth Affairs Agency</span>
          </div>
          <div className="w-40 md:w-48 h-16 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm">
            <span className="font-semibold text-blue-800 text-sm md:text-base">Higher Education Ministry</span>
          </div>
          <div className="w-40 md:w-48 h-16 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 shadow-sm">
            <span className="font-semibold text-blue-800 text-sm md:text-base">Leading IT Companies</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">Frequently Asked Questions</h3>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-10 md:mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-500">
              <h4 className="font-semibold text-base md:text-lg text-blue-800">Who can join the program?</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">All university students in Uzbekistan are welcome to apply. Both undergraduate and graduate students can benefit from our career development programs.</p>
            </div>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
              <h4 className="font-semibold text-base md:text-lg text-blue-800">Is there any cost to participate?</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">No, all programs are fully funded by our government partners and offered completely free of charge to eligible students.</p>
            </div>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500">
              <h4 className="font-semibold text-base md:text-lg text-blue-800">How long is the program?</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">The career camp runs for 6 weeks, with weekly workshops and mentoring sessions. Additionally, we offer standalone events throughout the academic year.</p>
            </div>
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500">
              <h4 className="font-semibold text-base md:text-lg text-blue-800">Will I receive a certificate?</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">Yes, participants who complete the program requirements receive an official certificate co-signed by the Youth Affairs Agency and Ministry of Higher Education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-circular-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to Build Your Future?</h3>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Join hundreds of students who have transformed their career prospects with MU CAREER CAMP</p>
          <Button variant="contained" className="mt-6 md:mt-8 bg-amber-500 text-blue-900 font-bold py-2 px-6 md:py-3 md:px-8 text-md md:text-lg hover:bg-amber-400">
            Register Now
          </Button>
          <p className="mt-4 md:mt-6 text-blue-200 text-sm md:text-base">Applications for the next cohort close on October 30, 2023</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4">MU CAREER CAMP</h4>
              <p className="text-blue-200 text-sm md:text-base">Empowering the next generation of professionals in Uzbekistan</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-200 hover:text-white transition text-sm md:text-base">About</a></li>
                <li><a href="#lessons" className="text-blue-200 hover:text-white transition text-sm md:text-base">Curriculum</a></li>
                <li><a href="#events" className="text-blue-200 hover:text-white transition text-sm md:text-base">Events</a></li>
                <li><a href="#faq" className="text-blue-200 hover:text-white transition text-sm md:text-base">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-blue-200 text-sm md:text-base">Email: muzaffar.abdukadirov.0213@gmail.com</p>
              <p className="text-blue-200 text-sm md:text-base">Phone: +998 97 4088108</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/karyera_maktabi_mu" className="text-blue-200 hover:text-white transition text-sm md:text-base">Telegram</a>
                <a href="https://www.linkedin.com/in/muzaffar-abduqodirov/" className="text-blue-200 hover:text-white transition text-sm md:text-base">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm md:text-base">
            <p>&copy; {new Date().getFullYear()} MU CAREER CAMP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}