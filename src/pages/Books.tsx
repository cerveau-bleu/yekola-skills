import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Search, Download, Eye, Star } from 'lucide-react';

export const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    {
      id: 1,
      title: 'Guide Complet Microsoft Excel',
      author: 'Équipe Yekola Skills',
      category: 'Bureautique',
      description: 'Manuel complet pour maîtriser Excel de A à Z avec exercices pratiques',
      cover: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 250,
      rating: 4.8,
      downloads: 1234,
    },
    {
      id: 2,
      title: 'Développement Web Moderne',
      author: 'Équipe Yekola Skills',
      category: 'Développement',
      description: 'Apprenez les technologies modernes du web : HTML5, CSS3, JavaScript ES6+',
      cover: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 380,
      rating: 4.9,
      downloads: 856,
    },
    {
      id: 3,
      title: 'Photoshop pour les Professionnels',
      author: 'Équipe Yekola Skills',
      category: 'Design',
      description: 'Techniques avancées de retouche photo et de création graphique',
      cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 320,
      rating: 4.7,
      downloads: 2156,
    },
    {
      id: 4,
      title: 'PowerPoint Efficace',
      author: 'Équipe Yekola Skills',
      category: 'Bureautique',
      description: 'Créer des présentations impactantes et professionnelles',
      cover: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 180,
      rating: 4.6,
      downloads: 945,
    },
    {
      id: 5,
      title: 'Marketing Digital Stratégique',
      author: 'Équipe Yekola Skills',
      category: 'Marketing',
      description: 'Stratégies modernes de marketing numérique et réseaux sociaux',
      cover: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 290,
      rating: 4.8,
      downloads: 1567,
    },
    {
      id: 6,
      title: 'Illustrator & Design Vectoriel',
      author: 'Équipe Yekola Skills',
      category: 'Design',
      description: 'Guide complet pour créer des designs vectoriels professionnels',
      cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
      pages: 260,
      rating: 4.7,
      downloads: 734,
    },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Bureautique': return 'bg-blue-100 text-blue-800';
      case 'Développement': return 'bg-green-100 text-green-800';
      case 'Design': return 'bg-purple-100 text-purple-800';
      case 'Marketing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bibliothèque Numérique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez à nos manuels et guides complets pour approfondir vos connaissances
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un livre..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grille des livres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(book.category)}`}>
                    {book.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{book.pages} pages</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{book.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{book.downloads}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to={`/livres/${book.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lire</span>
                  </Link>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun livre trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier votre recherche ou consultez tous nos livres.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};