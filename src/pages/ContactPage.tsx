import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
          
          <div className="flex items-center gap-4">
            <MapPin className="flex-shrink-0" />
            <div>
              <h3 className="font-medium">Dirección</h3>
              <p className="opacity-75">Ángel Cassanello 2122</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Phone className="flex-shrink-0" />
            <div>
              <h3 className="font-medium">Teléfono</h3>
              <p className="opacity-75">3425098780</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Mail className="flex-shrink-0" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="opacity-75">distribuidoraas@hotmail.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2">Nombre</label>
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
            <label className="block mb-2">Mensaje</label>
            <textarea
              rows={4}
              className="w-full bg-black border border-orange-500/20 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;