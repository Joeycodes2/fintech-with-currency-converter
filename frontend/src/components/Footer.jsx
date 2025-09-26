import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";



// A simple placeholder for social icons
const SocialIcon = ({ children }) => (
  <a href="#" className="text-gray-200 hover:text-white">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
         
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-2xl mb-2">JodaemFinancial</h3>
            <p className="text-gray-400 text-sm">The modern bank for every African.</p>
          </div>

         
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/get-started" className="hover:text-white">Personal</Link></li>
              <li><Link to="/get-started" className="hover:text-white">Business</Link></li>
              <li><Link to="/get-started" className="hover:text-white">Savings</Link></li>
              <li><Link to="/get-started" className="hover:text-white">Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-white">About Us</Link></li>
              <li><Link to="/help" className="hover:text-white">Careers</Link></li>
              <li><Link to="/help" className="hover:text-white">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/help" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/help" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jodaem Financial. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialIcon><Icon className="bg-blue-800" icon="entypo-social:facebook" width="22" height="22" /></SocialIcon>
            <SocialIcon><Icon icon="tabler:brand-x" width="24" height="24" /></SocialIcon>
            <SocialIcon><Icon icon="tabler:brand-instagram" width="24" height="24" /></SocialIcon>
            <SocialIcon><Icon icon="entypo-social:linkedin-with-circle" width="24" height="24" /></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;