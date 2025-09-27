import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/resova_ai_diamond_transparent_final_v6.png'; // Updated logo import with final name

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Resova AI" className="h-12 w-auto" /> {/* Increased size, removed invert filter */}
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Streamline healthcare operations with AI-powered automation for scheduling, staff training, and billing in outpatient settings.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/scheduling" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Scheduling Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/training" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Staff Training
                </Link>
              </li>
              <li>
                <Link to="/solutions/billing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Billing & Revenue
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Resova AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

