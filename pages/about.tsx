import Head from 'next/head';
import Link from 'next/link';
import { BRAND_NAME, BRAND_STORY, BRAND_VALUES, PRIMARY_PRODUCT, ABOUT_PRODUCT_IMAGE } from '@/utils/constants';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - {BRAND_NAME}</title>
        <meta name="description" content="Learn the story behind Haus of Charm and our commitment to timeless elegance." />
        <meta property="og:title" content={`About ${BRAND_NAME}`} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={`/images/product/${ABOUT_PRODUCT_IMAGE}`}
            alt="Lifestyle background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-900">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            {BRAND_STORY.title}
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg">
            {BRAND_STORY.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-8 text-lg first-letter:text-2xl first-letter:font-bold first-letter:text-accent-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we create
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-accent-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRAND_VALUES.map((value, index) => (
              <div key={index} className="card hover:shadow-2xl border-l-4 border-accent-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent-600 to-primary-600 text-white shadow-lg">
                      <span className="text-xl font-bold">✨</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Collection Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-xl">
                <img
                  src={`/images/product/${ABOUT_PRODUCT_IMAGE}`}
                  alt={PRIMARY_PRODUCT.name}
                  className="w-full max-w-md rounded-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">
                Meet Our First Creation
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our debut product, the 100% Acacia Wood Tray, embodies everything we stand for. Crafted from premium acacia wood with meticulous attention to detail, this tray is more than just a serving piece&mdash;it&#39;s a statement of elegance.
              </p>

              <div className="space-y-3 mb-8">
                {PRIMARY_PRODUCT.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-accent-600 font-bold mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.amazon.com/dp/B0F27TQZ5S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-center shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </a>
                <Link href="/warranty" className="btn btn-secondary text-center shadow-lg hover:shadow-xl">
                  Register Warranty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Discover how we&#39;re transforming everyday living into extraordinary moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn bg-accent-600 text-white hover:bg-accent-700 inline-block shadow-lg hover:shadow-xl">
              Explore Products
            </Link>
            <a
              href="https://www.amazon.com/dp/B0F27TQZ5S"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary-900 hover:bg-gray-100 inline-block shadow-lg hover:shadow-xl"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
