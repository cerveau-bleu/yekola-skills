import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Star, Filter } from 'lucide-react';

export const Announcements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les annonces' },
    { id: 'formations', name: 'Nouvelles formations' },
    { id: 'events', name: 'Événements' },
    { id: 'news', name: 'Actualités' },
    { id: 'promo', name: 'Promotions' },
  ];

  const announcements = [
    {
      id: 1,
      category: 'formations',
      title: 'Nouvelle Formation: React & Node.js',
      excerpt: 'Découvrez notre nouveau programme complet de développement web full-stack avec React et Node.js',
      date: '2025-01-15',
      time: '14:00',
      location: 'Centre Yekola Skills Kinshasa',
      participants: 25,
      featured: true,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <p>Nous sommes ravis d'annoncer le lancement de notre nouvelle formation complète en développement web full-stack utilisant React et Node.js.</p>
        
        <h3>Ce que vous apprendrez :</h3>
        <ul>
          <li>Développement frontend avec React</li>
          <li>Gestion d'état avec Redux</li>
          <li>Développement backend avec Node.js</li>
          <li>Bases de données MongoDB</li>
          <li>Déploiement et DevOps</li>
        </ul>
        
        <p>Formation intensive de 12 semaines avec projet final et certification.</p>
      `,
    },
    {
      id: 2,
      category: 'events',
      title: 'Atelier Gratuit: Excel pour Débutants',
      excerpt: 'Participez à notre atelier gratuit d\'introduction à Microsoft Excel',
      date: '2025-01-20',
      time: '10:00',
      location: 'En ligne',
      participants: 50,
      featured: false,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <p>Rejoignez-nous pour un atelier gratuit d'introduction à Microsoft Excel, parfait pour les débutants.</p>
        
        <h3>Programme :</h3>
        <ul>
          <li>Interface et navigation</li>
          <li>Création de tableaux simples</li>
          <li>Formules de base</li>
          <li>Mise en forme</li>
          <li>Session Q&A</li>
        </ul>
        
        <p>Durée: 2 heures. Inscription gratuite mais places limitées!</p>
      `,
    },
    {
      id: 3,
      category: 'promo',
      title: 'Promotion Janvier: -30% sur toutes les formations',
      excerpt: 'Profitez de notre promotion spéciale janvier avec 30% de réduction sur toutes nos formations',
      date: '2025-01-01',
      time: '00:00',
      location: 'Toutes nos formations',
      participants: null,
      featured: true,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <p>Commencez l'année 2025 en beauté avec notre promotion exceptionnelle!</p>
        
        <h3>Offre spéciale :</h3>
        <ul>
          <li>30% de réduction sur toutes les formations</li>
          <li>Paiement en plusieurs fois disponible</li>
          <li>Accès gratuit à la bibliothèque numérique</li>
          <li>Support technique inclus</li>
        </ul>
        
        <p>Offre valable jusqu'au 31 janvier 2025. Ne manquez pas cette opportunité!</p>
      `,
    },
    {
      id: 4,
      category: 'news',
      title: 'Nouveau Partenariat avec Microsoft',
      excerpt: 'Yekola Skills devient partenaire officiel Microsoft Learning',
      date: '2025-01-10',
      time: '09:00',
      location: 'Annonce officielle',
      participants: null,
      featured: false,
      image: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <p>Nous sommes fiers d'annoncer notre nouveau partenariat avec Microsoft en tant que Microsoft Learning Partner officiel.</p>
        
        <h3>Avantages pour nos étudiants :</h3>
        <ul>
          <li>Certifications Microsoft officielles</li>
          <li>Accès aux dernières versions des logiciels</li>
          <li>Cursus certifiés Microsoft</li>
          <li>Formations mises à jour automatiquement</li>
        </ul>
        
        <p>Ce partenariat renforce notre engagement à fournir une formation de qualité mondiale.</p>
      `,
    },
    {
      id: 5,
      category: 'events',
      title: 'Webinaire: Tendances Design 2025',
      excerpt: 'Découvrez les dernières tendances en design graphique pour 2025',
      date: '2025-01-25',
      time: '16:00',
      location: 'Webinaire en ligne',
      participants: 100,
      featured: false,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <p>Participez à notre webinaire exclusif sur les tendances design 2025 avec nos experts en design graphique.</p>
        
        <h3>Au programme :</h3>
        <ul>
          <li>Tendances couleurs et typographie</li>
          <li>Design system et cohérence visuelle</li>
          <li>Outils émergents</li>
          <li>Cas d'études pratiques</li>
          <li>Session Q&A avec les experts</li>
        </ul>
        
        <p>Webinaire gratuit avec certificat de participation. Replay disponible pour les inscrits.</p>
      `,
    },
  ];

  const filteredAnnouncements = selectedCategory === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'formations': return 'bg-blue-100 text-blue-800';
      case 'events': return 'bg-green-100 text-green-800';
      case 'news': return 'bg-purple-100 text-purple-800';
      case 'promo': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'formations': return 'Formation';
      case 'events': return 'Événement';
      case 'news': return 'Actualité';
      case 'promo': return 'Promotion';
      default: return 'Annonce';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Annonces
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé de toutes nos actualités, événements et nouvelles formations
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

        {/* Annonces */}
        <div className="space-y-8">
          {filteredAnnouncements.map((announcement, index) => (
            <motion.article
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                announcement.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(announcement.category)}`}>
                        {getCategoryName(announcement.category)}
                      </span>
                      {announcement.featured && (
                        <div className="flex items-center space-x-1 text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">À la une</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(announcement.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{announcement.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {announcement.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {announcement.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{announcement.location}</span>
                      </div>
                      {announcement.participants && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{announcement.participants} places</span>
                        </div>
                      )}
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune annonce trouvée
            </h3>
            <p className="text-gray-500">
              Aucune annonce ne correspond aux filtres sélectionnés.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};