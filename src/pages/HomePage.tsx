import React from 'react';
import { PenTool as Tool, Wrench, Package } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Distribuidora AS
      </h1>
      <p className="text-xl mb-8 opacity-80">
        Herramientas y máquinas de alta calidad para profesionales y aficionados del sector
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <img
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Herramientas profesionales"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Máquinas de calidad"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Tool size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Herramientas</h3>
          <p className="opacity-80">
            Amplia gama de herramientas profesionales para todo tipo de trabajos
          </p>
        </div>
        
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Wrench size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Máquinas</h3>
          <p className="opacity-80">
            Equipamiento de alta calidad para profesionales exigentes
          </p>
        </div>
        
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Package size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Insumos</h3>
          <p className="opacity-80">
            Todo lo necesario para completar tus proyectos con éxito
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;