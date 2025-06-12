"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  console.log("Header component rendered, menu open:", isMenuOpen);

  const toggleMenu = () => {
    console.log("Menu toggle clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log("Closing mobile menu");
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile as requested */}
      <div className="bg-yellow-400 text-black py-2 text-sm hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">02086 161 655</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>numberplatemaster@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                <span className="font-medium">FREE UK Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span className="font-medium">DVLA Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Smart scroll behavior on mobile */}
      <header className={`fixed md:top-12 top-0 left-0 right-0 z-40 transition-all duration-300 bg-black/95 md:bg-black/20 md:backdrop-blur-sm ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://assets.macaly-user-data.dev/bcwabm1u85jv3fwt9rra5p3m/fv93uk1709mfflcw9gsmt1bg/3_9L4KcckISZa1fTt5FOV/progetto-senza-titolo-20-.png" 
                alt="NumberPlateMaster Logo" 
                className="h-12 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-yellow-400 text-white">
                Products
              </a>
              <a href="https://numberplatemaster.com/pages/about-us" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-yellow-400 text-white">
                About Us
              </a>
              <a href="https://numberplatemaster.com/pages/contact" target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-yellow-400 text-white">
                Contact Us
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                asChild
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation - No Call Us option as requested */}
          <div 
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="pt-4 pb-2 space-y-3 bg-black/95">
              <a 
                href="https://numberplatemaster.com/collections/all" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 hover:bg-gray-800 rounded-md transition-colors font-medium"
              >
                Products
              </a>
              <a 
                href="https://numberplatemaster.com/pages/about-us" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 hover:bg-gray-800 rounded-md transition-colors font-medium"
              >
                About Us
              </a>
              <a 
                href="https://numberplatemaster.com/pages/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 hover:bg-gray-800 rounded-md transition-colors font-medium"
              >
                Contact Us
              </a>
              <div className="px-3 pt-3">
                <Button 
                  asChild
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  <a href="https://numberplatemaster.com/collections/all" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;