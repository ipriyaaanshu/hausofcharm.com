import Head from 'next/head';
import { BRAND_NAME } from '@/utils/constants';

export default function Warranty() {
  const warrantyFormEmbed = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJW9r2SSPgrP3gtxAF1kzF6gmMw5YZkPRv-yhlz-QamQa6aw/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

  return (
    <>
      <Head>
        <title>Warranty Registration - {BRAND_NAME}</title>
        <meta
          name="description"
          content="Register your Haus of Charm product warranty with your order information."
        />
        <meta property="og:title" content={`Warranty Registration - ${BRAND_NAME}`} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-primary-900">
            Warranty Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Register your {BRAND_NAME} product to activate your warranty coverage
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-accent-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Why Register?</h2>
            <p className="text-blue-800">
              Registering your warranty is quick and easy. Simply fill out the form below with your order
              information, and we&#39;ll have your product registered in our system. This ensures you have
              full coverage and access to our customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center hover:shadow-xl">
              <div className="text-5xl mb-3">📋</div>
              <h3 className="font-bold text-primary-900 mb-2">Fill Out Form</h3>
              <p className="text-gray-600 text-sm">
                Complete the warranty registration form with your order details
              </p>
            </div>
            <div className="card text-center hover:shadow-xl">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-bold text-primary-900 mb-2">Submit</h3>
              <p className="text-gray-600 text-sm">
                Submit your information securely through our form
              </p>
            </div>
            <div className="card text-center hover:shadow-xl">
              <div className="text-5xl mb-3">🛡️</div>
              <h3 className="font-bold text-primary-900 mb-2">Coverage Activated</h3>
              <p className="text-gray-600 text-sm">
                Your warranty is now active and ready to protect your purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: warrantyFormEmbed }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section intentionally removed */}

      {/* Support Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-accent-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            If you have any questions about warranty registration or need support, we&#39;re here to help.
          </p>
          <a
            href="mailto:hello@hausofcharm.com"
            className="btn bg-accent-600 text-white hover:bg-accent-700 inline-block shadow-lg hover:shadow-xl"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
