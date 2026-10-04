import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, Filter } from 'lucide-react';

export const Formations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'bureautique', name: 'Bureautique' },
    { id: 'web', name: 'Développement Web' },
    { id: 'design', name: 'Design Graphique' },
    { id: 'marketing', name: 'Marketing Digital' },
  ];

  const formations = [
    {
      id: 1,
      title: 'Microsoft Excel Avancé',
      category: 'bureautique',
      description: 'Maîtrisez les fonctions avancées d\'Excel : tableaux croisés, macros, formules complexes',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '4 semaines',
      students: 156,
      rating: 4.8,
      price: '50$',
      level: 'Intermédiaire',
    },
    {
      id: 2,
      title: 'Développement Web Complet',
      category: 'web',
      description: 'Apprenez HTML, CSS, JavaScript et créez des sites web professionnels',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8 semaines',
      students: 89,
      rating: 4.9,
      price: '120$',
      level: 'Débutant',
    },
    {
      id: 3,
      title: 'Adobe Photoshop Pro',
      category: 'design',
      description: 'Devenez expert en retouche photo et création graphique avec Photoshop',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6 semaines',
      students: 234,
      rating: 4.7,
      price: '80$',
      level: 'Intermédiaire',
    },
    {
      id: 4,
      title: 'PowerPoint Professionnel',
      category: 'bureautique',
      description: 'Créez des présentations impactantes et professionnelles',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3 semaines',
      students: 178,
      rating: 4.6,
      price: '40$',
      level: 'Débutant',
    },
    {
      id: 5,
      title: 'Marketing Digital & Réseaux Sociaux',
      category: 'marketing',
      description: 'Stratégies de marketing numérique et gestion des réseaux sociaux',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '5 semaines',
      students: 145,
      rating: 4.8,
      price: '90$',
      level: 'Intermédiaire',
    },
    {
      id: 6,
      title: 'Illustrator & Design Vectoriel',
      category: 'design',
      description: 'Créez des logos, illustrations et designs vectoriels professionnels',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '5 semaines',
      students: 98,
      rating: 4.7,
      price: '75$',
      level: 'Intermédiaire',
    },
  ];

  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(f => f.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Formations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences avec nos formations pratiques et certifiantes
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filtrer par catégorie:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des formations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(formation.level)}`}>
                    {formation.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {formation.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {formation.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{formation.students} étudiants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{formation.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {formation.price}
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>S'inscrire</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFormations.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune formation trouvée
            </h3>
            <p className="text-gray-500">
              Essayez de changer les filtres ou revenez plus tard pour de nouvelles formations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};