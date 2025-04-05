import React, { useState } from 'react';
import { ShoppingCart, Home, Phone, Store, Info, Users, Menu, X } from 'lucide-react';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import WholesalePage from './pages/WholesalePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'contact':
        return <ContactPage />;
      case 'store':
        return <StorePage addToCart={addToCart} />;
      case 'about':
        return <AboutPage />;
      case 'wholesale':
        return <WholesalePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-orange-500">
      <nav className="bg-black/95 fixed w-full top-0 z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Distribuidora AS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <Home size={20} /> Inicio
              </button>
              <button
                onClick={() => setCurrentPage('store')}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <Store size={20} /> Tienda
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <Phone size={20} /> Contacto
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <Info size={20} /> Sobre Nosotros
              </button>
              <button
                onClick={() => setCurrentPage('wholesale')}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <Users size={20} /> Mayoristas
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:text-orange-400 flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-orange-500 hover:text-orange-400"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-orange-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <Home size={20} /> Inicio
              </button>
              <button
                onClick={() => {
                  setCurrentPage('store');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <Store size={20} /> Tienda
              </button>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <Phone size={20} /> Contacto
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <Info size={20} /> Sobre Nosotros
              </button>
              <button
                onClick={() => {
                  setCurrentPage('wholesale');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <Users size={20} /> Mayoristas
              </button>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 w-full text-left hover:text-orange-400 flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {renderPage()}
      </main>

      {isCartOpen && (
        <Cart
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;