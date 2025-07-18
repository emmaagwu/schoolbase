'use client';

import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Programs', path: '#programs' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Announcements', path: '#announcements' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Brand Section */}
          <div className="flex-1">
            <a href="#home" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition">
              SchoolBase
            </a>
            <p className="mt-2 text-gray-500 max-w-xs">
              Empowering students with quality education and meaningful experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-blue-700 text-sm font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="flex-1 space-y-4">
            <h4 className="text-gray-700 font-semibold">Contact</h4>
            <p className="text-sm text-gray-600">Email: info@schoolbase.ng</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@schoolbase.ng" className="text-gray-600 hover:text-blue-700 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} SchoolBase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
