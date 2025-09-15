
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-router';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);





  return (
    <>
      {/* Main Footer */}
      <footer className="font-sans tracking-wide max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Newsletter
          </h3>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter for exclusive offers, product updates,
            and shopping tips. Get 10% off your first order!
          </p>

          <form
            className="flex px-2 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-left mt-8 bg-white dark:bg-gray-800"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm pl-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bgColor hover:bgColor text-white text-sm rounded-full px-6 py-2 transition-all tracking-wide flex items-center gap-2 ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              to={'/'}
              className="flex items-center max-[640px]:justify-center gap-2"
            >
            
                <img
                  src='../assets/logo.png'
                  alt="logo"
                  className="w-36 max-[640px]:w-48"
                />
             
            </Link>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {`Welcome to our Store, your one-stop shop for all your needs. We offer a wide range of products at unbeatable prices, with fast shipping and excellent customer service. Shop with us today and experience the difference!`}
              </p>
            </div>
            <ul className="mt-10 flex space-x-5">

                <li>
                  <FaFacebook className="text-gray-400 hover:textColor transition-colors" />
                </li>


                <li>
                  <FaTwitter className="text-gray-400 hover:textColor transition-colors" />
                
                </li>


                <li>
                  <FaInstagram className="text-gray-400 hover:textColor transition-colors" />
                 
                </li>


 
                <li>
                  <FaYoutube className="text-gray-400 hover:textColor transition-colors" />
                
                </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-6">
              Customer Service
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to={'/contact-us'}
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-6">
              About Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 dark:text-gray-400 hover:textColor dark:hover:text-blue-400 text-sm transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mt-3 md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4 p-4 border-t border-gray-200 dark:border-gray-700 text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Store. All rights reserved.
          </p>
          <a
            href="https://ibrahimsarkar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm max-[640px]:mb-5 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Developed by Ibrahim
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer