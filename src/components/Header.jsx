import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/resova_ai_diamond_transparent_final_v6.png'; // Updated logo import with final name

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Resova AI" className="h-12 w-auto" /> {/* Increased size */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className={`absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-md border border-border transition-all duration-200 ${
                isSolutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  <Link
                    to="/solutions"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    All Solutions
                  </Link>
                  <Link
                    to="/solutions/scheduling"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    Scheduling Automation
                  </Link>
                  <Link
                    to="/solutions/training"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    Staff Training
                  </Link>
                  <Link
                    to="/solutions/billing"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    Billing & Revenue
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/technology" className="text-foreground hover:text-primary transition-colors">
              Technology
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/solutions/scheduling"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Scheduling Automation
              </Link>
              <Link
                to="/solutions/training"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Staff Training
              </Link>
              <Link
                to="/solutions/billing"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Billing & Revenue
              </Link>
              <Link
                to="/technology"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


