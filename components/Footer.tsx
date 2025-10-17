import Link from 'next/link';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  CONTACT_CITY_STATE,
  SOCIAL_LINKS,
} from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img
              src="/images/logo/textonly.png"
              alt={BRAND_NAME}
              className="h-12 mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Crafting premium home décor and kitchenware with timeless elegance.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent-400">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span>
                <br />
                {CONTACT_ADDRESS}
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              <p>
                <Link href="/" className="text-gray-300 hover:text-accent-400">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/about" className="text-gray-300 hover:text-accent-400">
                  About Us
                </Link>
              </p>
              <p>
                <Link href="/warranty" className="text-gray-300 hover:text-accent-400">
                  Warranty Registration
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-700 pt-8 flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-400 text-sm">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-accent-400 transition-colors font-medium"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
