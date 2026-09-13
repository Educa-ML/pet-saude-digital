import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={20} />
              </div>
              <span className={`text-xl transition-colors ${
                isScrolled ? 'text-purple-700' : 'text-white'
              }`}>
                Mapear para Proteger
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-purple-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className={`transition-colors hover:text-purple-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Dados
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className={`transition-colors hover:text-purple-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Equipe
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-purple-100' : 'hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-purple-700' : 'text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-purple-700' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            className="absolute top-20 right-6 left-6 bg-white rounded-3xl shadow-2xl p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-3 rounded-xl hover:bg-purple-50 text-gray-700 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="text-left px-4 py-3 rounded-xl hover:bg-purple-50 text-gray-700 transition-colors"
              >
                Dados
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-left px-4 py-3 rounded-xl hover:bg-purple-50 text-gray-700 transition-colors"
              >
                Equipe
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl">
                Contato
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}