import React from 'react';
import { X } from 'lucide-react';

const Cart = ({ cart, onClose, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('¡Gracias por tu compra!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
      <div className="w-full max-w-md bg-black border-l border-orange-500/20 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <button onClick={onClose} className="hover:text-orange-400">
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-orange-500/20 pb-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm opacity-75">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-orange-500 hover:text-orange-400"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-orange-500/20 pt-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Proceder al pago
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;