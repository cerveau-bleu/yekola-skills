import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Yekola Skills</span>
            </div>
            <p className="text-gray-300 text-sm">
              Votre partenaire pour l'excellence dans les formations sur les logiciels numériques.
            </p>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Formations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bureautique</li>
              <li>Développement Web</li>
              <li>Design Graphique </li>
              <li>Modélisation 3D </li>
              <li>Marketing Digital</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Formation en présentiel</li>
              <li>Formation en ligne</li>
              <li>Certification</li>
              <li>Support technique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@yekolaskills.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+243 818 221 183</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kinshasa, RDC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Yekola Skills. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};