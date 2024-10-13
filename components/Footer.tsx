import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="https://via.placeholder.com/150x50.png?text=Padel+Stadium+Club"
              alt="Padel Stadium Club"
            />
            <p className="text-gray-400 text-base">
              Modern padel stadium club with top-notch facilities and services.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Club
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#overview"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#location"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#gallery"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#booking"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Court Booking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#team-finder"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Team Finder
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#cafe"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Café
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Padel Stadium Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
