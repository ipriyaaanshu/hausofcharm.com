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

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-accent-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                What does the warranty cover?
              </h3>
              <p className="text-gray-700">
                Our warranty covers manufacturing defects in materials and workmanship. This includes
                cracks, chips, and functional issues that arise from normal use within the warranty period.
              </p>
            </div>

            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                How long is the warranty valid?
              </h3>
              <p className="text-gray-700">
                Our products come with a comprehensive warranty from the date of purchase. Please refer to
                your product documentation or contact our support team for specific warranty duration details.
              </p>
            </div>

            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                When should I register my warranty?
              </h3>
              <p className="text-gray-700">
                We recommend registering your warranty within 30 days of purchase to ensure full coverage
                and to have your information on file for any future support needs.
              </p>
            </div>

            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                What information do I need to register?
              </h3>
              <p className="text-gray-700">
                You&#39;ll need your order number, order date, email address, and the source of your purchase
                (Amazon or our website). This helps us verify your purchase and process any warranty claims.
              </p>
            </div>

            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                What does the warranty NOT cover?
              </h3>
              <p className="text-gray-700">
                Warranty does not cover: damage from misuse, abuse, or accidents; normal wear and tear;
                damage from improper care or cleaning; intentional damage; or products purchased from
                unauthorized resellers.
              </p>
            </div>

            <div className="card hover:shadow-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                How do I file a warranty claim?
              </h3>
              <p className="text-gray-700">
                If you need to file a warranty claim, please contact us at{' '}
                <a href="mailto:hello@hausofcharm.com" className="text-accent-600 font-semibold hover:text-accent-700">
                  hello@hausofcharm.com
                </a>{' '}
                with photos of the issue and your order information. Our team will review your claim and
                assist you promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

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
