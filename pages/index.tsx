import Head from 'next/head';
import Link from 'next/link';
import { BRAND_NAME, BRAND_TAGLINE, BRAND_DESCRIPTION, PRIMARY_PRODUCT, PRODUCT_GALLERY_IMAGES, HERO_IMAGE, asset } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{BRAND_NAME} - Premium Home Décor & Kitchenware</title>
        <meta name="description" content={BRAND_DESCRIPTION} />
        <meta property="og:title" content={BRAND_NAME} />
        <meta property="og:description" content={BRAND_DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
          <img
            src={asset('/images/logo/fulllogo_transparent_nobuffer.png')}
            alt="Hero background"
            className="w-full h-full object-contain max-w-2xl"
          />
        </div>

        <div className="container relative z-10 text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-primary-900 drop-shadow-lg">
            {BRAND_TAGLINE}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {BRAND_DESCRIPTION}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn btn-primary shadow-lg hover:shadow-xl">
              Discover Our Story
            </Link>
            <Link href="#product" className="btn btn-outline shadow-md hover:shadow-lg">
              View Product
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="product" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
              Our Featured Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of functionality and elegance
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-accent-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src={asset(`/images/product/${PRODUCT_GALLERY_IMAGES[0]}`)}
                  alt={PRIMARY_PRODUCT.name}
                  className="w-full max-w-md rounded-xl"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-4xl font-serif font-bold text-primary-900 mb-3">
                {PRIMARY_PRODUCT.name}
              </h3>
              <p className="text-accent-600 text-lg font-semibold mb-4">
                {PRIMARY_PRODUCT.tagline}
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {PRIMARY_PRODUCT.description}
              </p>

              <h4 className="text-xl font-serif font-bold text-primary-800 mb-4">
                Key Features
              </h4>
              <ul className="space-y-3 mb-8">
                {PRIMARY_PRODUCT.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-600 font-bold mr-3 text-lg">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.amazon.com/dp/B0F27TQZ5S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-center shadow-lg hover:shadow-xl"
                >
                  Shop on Amazon
                </a>
                <Link href="/warranty" className="btn btn-secondary text-center shadow-lg hover:shadow-xl">
                  Register Warranty
                </Link>
              </div>
            </div>
          </div>

          {/* Product Gallery */}
          <div className="mt-20">
            <h3 className="text-3xl font-serif font-bold text-primary-900 mb-2 text-center">
              Product Gallery
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-accent-600 mx-auto mb-12 rounded-full"></div>
            
            <div className="space-y-12">
              {/* Product Video Demo - Full Width */}
              <div className="card overflow-hidden hover:shadow-2xl">
                <div className="w-full bg-black">
                  <video
                    width="100%"
                    height="auto"
                    controls
                    className="w-full"
                  >
                    <source src={asset('/images/product/product-demo.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Scrolling Gallery Image - Full Natural Height */}
              <div className="card overflow-hidden hover:shadow-2xl">
                <img
                  src={asset('/images/product/gallery-full.png')}
                  alt="Product Gallery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Own Your Haus of Charm
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the timeless elegance of our 100% Acacia Wood Tray. Each piece is a testament to quality craftsmanship.
          </p>
          <a
            href="https://www.amazon.com/dp/B0F27TQZ5S"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-accent-600 text-white hover:bg-accent-700 inline-block shadow-lg hover:shadow-xl"
          >
            Shop Now on Amazon
          </a>
        </div>
      </section>
    </>
  );
}
