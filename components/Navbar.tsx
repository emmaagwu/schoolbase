'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Programs", path: "#programs" },
    { name: "Gallery", path: "#gallery" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Announcements", path: "#announcements" },
    { name: "Contact", path: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const sections = navLinks.map(link => link.path.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActiveLink = (path: string) => activeSection === path.substring(1);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gray-50/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50" 
            : "bg-gray-50/80 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#home");
                }}
                className="text-2xl lg:text-3xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-200"
              >
                SchoolBase
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, -1).map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                    isActiveLink(link.path)
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                  {isActiveLink(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-700 rounded-full"></span>
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="ml-4 px-6 py-2.5 bg-amber-500 text-white font-semibold rounded-sm hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-50/95 backdrop-blur-lg border-t border-gray-200/50">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink(link.path)
                    ? "text-blue-700 bg-blue-50 border-l-4 border-blue-700"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="block w-full px-6 py-3 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-all duration-200 text-center shadow-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
