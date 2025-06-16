
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesMenuItems = [
    { name: 'Building Plan Approval', href: '/building-plan-approval' },
    { name: 'Layout/DTCP Approval', href: '#layout-dtcp-approval' },
    { name: 'Floor Plans', href: '/floor-plans' },
    { name: '3D Elevation', href: '#3d-elevation' },
    { name: 'Interior Designing', href: '#interior-designing' },
    { name: 'Estimation', href: '/estimation' },
  ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Plan Sanction', href: '/plan-sanction' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled 
                  ? 'bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent' 
                  : 'text-white drop-shadow-lg'
              }`}>
                EASHAA VAASTHU
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Architects & Engineers
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.slice(0, 2).map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-300'
                  } ${location.pathname === item.href ? 'text-orange-600' : ''}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-orange-600' : 'bg-orange-300'}`}></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-orange-600' : 'bg-orange-300'
                  }`}></span>
                </a>
              )
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center space-x-1 transition-colors duration-200 font-medium relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-600'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-orange-600' : 'bg-orange-300'
                }`}></span>
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-xl rounded-lg border border-gray-200 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {servicesMenuItems.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 text-sm font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 text-sm font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>

            {mainNavItems.slice(2).map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-300'
                  } ${location.pathname === item.href ? 'text-orange-600' : ''}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-orange-600' : 'bg-orange-300'}`}></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-orange-600' : 'bg-orange-300'
                  }`}></span>
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="px-3 py-2">
                <span className="block text-gray-700 font-medium mb-2">Our Services</span>
                <div className="pl-4 space-y-1">
                  {servicesMenuItems.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
