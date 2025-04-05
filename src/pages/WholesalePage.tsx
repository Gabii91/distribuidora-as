import React from 'react';
import { Building2, Package } from 'lucide-react';

const WholesalePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Acceso Mayorista</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Beneficios Mayoristas</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Package className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Precios Especiales</h3>
                <p className="opacity-75">Accede a descuentos exclusivos por compras al por mayor</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building2 className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Catálogo Exclusivo</h3>
                <p className="opacity-75">Productos especialmente seleccionados para revendedores</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Registro Mayorista</h2>
          
          <div>
            <label className="block mb-2">Nombre de la Empresa</label>
            <input
              type="text"
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block mb-2">CUIT/RUT</label>
            <input
              type="text"
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block mb-2">Teléfono</label>
            <input
              type="tel"
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block mb-2">Dirección</label>
            <textarea
              rows={3}
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Solicitar Cuenta Mayorista
          </button>
        </form>
      </div>
    </div>
  );
};

export default WholesalePage;