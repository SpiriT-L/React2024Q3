import { Metadata } from 'next';
import React from 'react';
// import favicon from '../public/favicon.png';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import Footer from '../src/components/Page/Footer/Footer';
import Header from '../src/components/Page/Header/Header';
import './global.css';

export const metadata: Metadata = {
  title: 'Rick & Morty',
  description: 'Rick & Morty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link rel="icon" type="image/svg+xml" href={favicon.src} /> */}
      <body>
        <div id="root">
          {
            <ErrorBoundary>
              {<Header />}
              {children}
              {<Footer />}
            </ErrorBoundary>
          }
        </div>
      </body>
    </html>
  );
}
