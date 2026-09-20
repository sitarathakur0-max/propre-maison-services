import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Phone } from 'lucide-react';
import { BUSINESS_DATA } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  // Synchronize with URL hash for browser history & SEO links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, serviceId?: string) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Main Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Page Content Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && (
          <ContactPage initialServiceId={selectedServiceId} />
        )}
      </main>

      {/* Floating direct phone button for quick contact (strictly phone, no whatsapp) */}
      <aside aria-label="Contact téléphonique rapide">
        <a
          id="floating-phone-button"
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="fixed bottom-6 right-6 z-40 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 group focus:outline-hidden focus:ring-4 focus:ring-teal-300"
          aria-label={`Appeler Propre Maison Services au ${BUSINESS_DATA.phone}`}
        >
          <div className="w-5 h-5 rounded-full flex items-center justify-center">
            <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          </div>
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            {BUSINESS_DATA.phone}
          </span>
        </a>
      </aside>

      {/* Professional Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
