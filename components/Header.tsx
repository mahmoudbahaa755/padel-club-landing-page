'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Padel Stadium Club</span>
              <img
                className="h-10 w-auto"
                src="https://via.placeholder.com/150x50.png?text=Padel+Stadium+Club"
                alt="Padel Stadium Club"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#overview" className="text-base font-medium text-foreground hover:text-primary">
                Overview
              </Link>
              <Link href="#location" className="text-base font-medium text-foreground hover:text-primary">
                Location
              </Link>
              <Link href="#pricing" className="text-base font-medium text-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="#gallery" className="text-base font-medium text-foreground hover:text-primary">
                Gallery
              </Link>
              <Link href="#cafe" className="text-base font-medium text-foreground hover:text-primary">
                Café
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <Button variant="outline" asChild>
              <Link href="#booking">Book a Court</Link>
            </Button>
            <Button asChild>
              <Link href="#team-finder">Find a Team</Link>
            </Button>
            <ThemeToggle />
          </div>
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="py-4 space-y-1">
            <Link href="#overview" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Overview
            </Link>
            <Link href="#location" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Location
            </Link>
            <Link href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Pricing
            </Link>
            <Link href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Gallery
            </Link>
            <Link href="#cafe" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Café
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;