import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Who We Are
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Ticket Booking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cancellation & Refund
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & App Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaYoutube size={24} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Download Our App</h3>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Download_on_the_App_Store_Badge_US-UK_blk_092917.svg"
                  alt="App Store"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Book My Show. All Rights Reserved.
          </p>
          <p>
            Powered by <a href="#" className="text-blue-400 hover:underline">Your Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
