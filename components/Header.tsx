import Link from 'next/link';
import { useState } from 'react';
import { BRAND_NAME, NAV_LINKS, asset } from '@/utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <img
            src={asset('/images/logo/icononly_nobuffer.png')}
            alt={BRAND_NAME}
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-serif text-lg md:text-2xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
            {BRAND_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-accent-600 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-accent-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
