'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Footer from '../../components/Page/Footer/Footer';
import Header from '../../components/Page/Header/Header';
import ThemeProvider from '../../context/ThemeProvider';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Header />
        <App />
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
