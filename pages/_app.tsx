import type { AppProps } from 'next/app';
import Head from 'next/head';
import { asset } from '@/utils/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Haus of Charm - Premium home décor and kitchenware" />
        <meta name="theme-color" content="#3a2f28" />
        <link rel="icon" href={asset('/images/logo/icononly_nobuffer.png')} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
