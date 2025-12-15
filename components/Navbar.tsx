"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Approval AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:shadow-lg hover:shadow-primary-100 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex-1 flex flex-col items-center justify-center px-4 space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-8 px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:shadow-lg hover:shadow-primary-100 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
          
          <div className="p-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Approval AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
