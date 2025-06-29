import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-50 border-t text-base text-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 w-9 h-9 rounded-md flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <span className="text-xl font-semibold text-black">Fellowstudy</span>
            </div>
            <h4 className="text-lg font-semibold text-black mb-3">About Us</h4>
            <p className="text-gray-500 leading-relaxed mb-5 text-base">
              We are dedicated to providing quality educational support to students across India.
              Our mission is to help you achieve academic excellence through reliable resources and
              expert guidance.
            </p>
            <div className="flex gap-5 text-gray-700">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-700" />
            </div>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Contact Us</h4>
            <p className="mb-2">Email: support@fellowstudy.com</p>
            <p className="mb-2">Phone: +91 9876543210</p>
            <p>Address: 123 Education Street, New Delhi, India</p>
          </div>
  
          {/* Quick Categories */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Quick Categories</h4>
            <div className="grid grid-cols-2 gap-y-2">
              <p>Engineering</p>
              <p>MBA</p>
              <p>Medical</p>
              <p>Arts</p>
              <p>Commerce</p>
              <p>Science</p>
            </div>
          </div>
  
          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Important Links</h4>
            <ul className="space-y-3">
              <li>Refund Policy</li>
              <li>Disclaimer</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refer & Earn</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t text-center py-6 text-base text-gray-500">
          © 2025 Fellowstudy.com. All rights reserved. | Made with <span className="text-red-500">❤️</span> for Students
        </div>
      </footer>
    );
  };
  
  export default Footer;
  