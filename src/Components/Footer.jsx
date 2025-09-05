import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" }
    ],
    support: [
      { name: "Help Center", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Returns", path: "#" }
    ],
    products: [
      { name: "iPhone Skins", path: "/products/apple" },
      { name: "Samsung Skins", path: "/products/samsung" },
      { name: "Google Pixel", path: "/products/google" },
      { name: "Custom Design", path: "#" }
    ],
    social: [
      { name: "Instagram", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.003 5.367 18.636.001 12.017.001zM8.449 16.988c-1.297 0-2.078-.611-2.078-1.583 0-.969.78-1.581 2.078-1.581 1.297 0 2.077.612 2.077 1.581 0 .972-.78 1.583-2.077 1.583zm7.138 0c-1.297 0-2.077-.611-2.077-1.583 0-.969.78-1.581 2.077-1.581 1.298 0 2.078.612 2.078 1.581 0 .972-.78 1.583-2.078 1.583z" },
      { name: "Twitter", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
      { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
      { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
    ]
  };

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="section-padding border-b border-secondary-700">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gradient">AARU SKINS</h1>
                    <p className="text-sm text-secondary-400 -mt-1">Premium Phone Skins</p>
                  </div>
                </div>
                <p className="text-secondary-300 mb-6 leading-relaxed">
                  Transform your device with our premium quality phone skins. Designed for style, 
                  built for protection, crafted for perfection.
                </p>
                <div className="space-y-2 text-sm text-secondary-400">
                  <p>📍 45, Manu Tower, Malviya Nagar</p>
                  <p>🏙️ Jaipur, Rajasthan 302017</p>
                  <p>📞 +91 (555) 123-4567</p>
                  <p>✉️ hello@aaruskins.com</p>
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                <div className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className="block text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                <div className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className="block text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Products Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
                <div className="space-y-3">
                  {footerLinks.products.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className="block text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
                <p className="text-secondary-300 text-sm mb-4">
                  Subscribe to get updates on new arrivals and exclusive offers.
                </p>
                <div className="space-y-3">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-secondary-800 border border-secondary-600 rounded-l-lg text-sm focus:outline-none focus:border-primary-500 text-white placeholder-secondary-500"
                    />
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6">
          <div className="container-max px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-secondary-400">
                <p>© 2025 Aaru Skins. All rights reserved.</p>
                <p className="mt-1">
                  Images courtesy of{" "}
                  <a 
                    href="https://www.layers.shop/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    Layers.shop
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-secondary-400 mr-2">We accept:</span>
                <div className="flex space-x-1">
                  {['Visa', 'Mastercard', 'PayPal', 'UPI'].map((method) => (
                    <div
                      key={method}
                      className="px-2 py-1 bg-secondary-800 rounded text-xs text-secondary-300"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-full shadow-large hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
