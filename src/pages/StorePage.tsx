import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const categories = {
  herramientas: [
    { id: 1, name: 'Martillo Profesional', price: 29.99, category: 'herramientas', subcategory: 'martillos' },
    { id: 2, name: 'Alicate Universal', price: 19.99, category: 'herramientas', subcategory: 'alicates' },
    { id: 3, name: 'Set de Destornilladores', price: 39.99, category: 'herramientas', subcategory: 'destornilladores' },
    { id: 4, name: 'Sierra Manual', price: 24.99, category: 'herramientas', subcategory: 'sierras' },
    { id: 5, name: 'Llave Ajustable', price: 15.99, category: 'herramientas', subcategory: 'llaves' },
  ],
  maquinas: [
    { id: 6, name: 'Caladora Profesional', price: 199.99, category: 'maquinas', subcategory: 'caladoras' },
    { id: 7, name: 'Sierra Circular', price: 299.99, category: 'maquinas', subcategory: 'sierras' },
    { id: 8, name: 'Soldadora Inverter', price: 399.99, category: 'maquinas', subcategory: 'soldadoras' },
    { id: 9, name: 'Ingletadora', price: 449.99, category: 'maquinas', subcategory: 'ingletadoras' },
  ],
  insumos: [
    { id: 10, name: 'Pack 100 Tornillos', price: 9.99, category: 'insumos', subcategory: 'tornillos' },
    { id: 11, name: 'Clavos (1kg)', price: 7.99, category: 'insumos', subcategory: 'clavos' },
    { id: 12, name: 'Adhesivo Vinílico', price: 12.99, category: 'insumos', subcategory: 'adhesivos' },
    { id: 13, name: 'Set de Lijas', price: 5.99, category: 'insumos', subcategory: 'lijas' },
  ],
};

const StorePage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const allProducts = Object.values(categories).flat();

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestra Tienda</h1>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500/50" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 bg-black border border-orange-500/20 rounded-lg focus:border-orange-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="w-full px-4 py-2 bg-black border border-orange-500/20 rounded-lg focus:border-orange-500 focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          <option value="herramientas">Herramientas</option>
          <option value="maquinas">Máquinas</option>
          <option value="insumos">Insumos</option>
        </select>
        
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Precio mín"
            className="w-1/2 px-4 py-2 bg-black border border-orange-500/20 rounded-lg focus:border-orange-500 focus:outline-none"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Precio máx"
            className="w-1/2 px-4 py-2 bg-black border border-orange-500/20 rounded-lg focus:border-orange-500 focus:outline-none"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border border-orange-500/20 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="opacity-75 mb-4">Categoría: {product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Añadir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;