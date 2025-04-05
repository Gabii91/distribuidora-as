import React from 'react';
import { Target, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Nuestro local"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4 opacity-80">
            Distribuidora AS comenzó con el objetivo de ofrecer las mejores herramientas
            y máquinas a precios competitivos, garantizando calidad y servicio al cliente.
            Somos un equipo comprometido con el crecimiento de nuestros clientes.
          </p>
          <p className="opacity-80">
            Nuestra experiencia en el sector nos permite ofrecer asesoramiento
            especializado y productos de primera calidad para profesionales y aficionados.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Target size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Misión</h3>
          <p className="opacity-80">
            Proveer herramientas y máquinas de calidad superior que impulsen el éxito
            de nuestros clientes.
          </p>
        </div>
        
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Award size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Calidad</h3>
          <p className="opacity-80">
            Trabajamos con las mejores marcas para garantizar la durabilidad y
            eficiencia de nuestros productos.
          </p>
        </div>
        
        <div className="p-6 border border-orange-500/20 rounded-lg">
          <Users size={48} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Servicio</h3>
          <p className="opacity-80">
            Nuestro equipo está capacitado para brindar el mejor asesoramiento
            técnico y atención personalizada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;