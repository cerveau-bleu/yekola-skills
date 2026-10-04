import React from 'react';
import { motion } from 'framer-motion';
import { Users, Monitor, Globe, Award, Clock, CheckCircle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Formation en Présentiel',
      description: 'Formations dans nos centres équipés avec formateurs experts',
      features: [
        'Salles équipées d\'ordinateurs récents',
        'Groupes réduits (max 12 personnes)',
        'Support pédagogique inclus',
        'Certificat de fin de formation',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Globe,
      title: 'Formation en Ligne',
      description: 'Apprenez à votre rythme avec nos cours interactifs',
      features: [
        'Accès 24h/24 aux cours',
        'Videos HD et exercices pratiques',
        'Forum d\'entraide communautaire',
        'Suivi personnalisé par email',
      ],
      color: 'from-green-600 to-green-700',
    },
    {
      icon: Users,
      title: 'Formation en Entreprise',
      description: 'Formations sur mesure pour vos équipes',
      features: [
        'Programmes adaptés aux besoins',
        'Formation sur site ou à distance',
        'Support technique dédié',
        'Rapport de progression détaillé',
      ],
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Award,
      title: 'Certification Professionnelle',
      description: 'Obtenez des certifications reconnues',
      features: [
        'Certifications officielles',
        'Examens en ligne sécurisés',
        'Badge numérique vérifiable',
        'Reconnaissance internationale',
      ],
      color: 'from-orange-600 to-orange-700',
    },
  ];

  const additionalServices = [
    {
      title: 'Support Technique',
      description: 'Assistance technique 7j/7 pour tous nos étudiants',
      icon: '🛠️',
    },
    {
      title: 'Bibliothèque Numérique',
      description: 'Accès illimité à nos ressources pédagogiques',
      icon: '📚',
    },
    {
      title: 'Communauté d\'Apprentissage',
      description: 'Réseau d\'étudiants et d\'anciens pour l\'entraide',
      icon: '👥',
    },
    {
      title: 'Mise à Jour des Contenus',
      description: 'Contenus régulièrement mis à jour selon les tendances',
      icon: '🔄',
    },
  ];

  const stats = [
    { label: 'Heures de formation', value: '10,000+' },
    { label: 'Étudiants satisfaits', value: '500+' },
    { label: 'Formateurs experts', value: '15+' },
    { label: 'Taux de réussite', value: '95%' },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos solutions de formation adaptées à tous vos besoins professionnels
          </p>
        </div>

        {/* Services principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Statistiques */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Résultats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services additionnels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Services Inclus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Processus de formation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre Processus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Évaluation',
                description: 'Nous évaluons votre niveau et vos objectifs pour personnaliser votre parcours',
                icon: Clock,
              },
              {
                step: '02',
                title: 'Formation',
                description: 'Apprentissage interactif avec nos formateurs experts et outils modernes',
                icon: Monitor,
              },
              {
                step: '03',
                title: 'Certification',
                description: 'Validation de vos compétences avec un certificat reconnu',
                icon: Award,
              },
            ].map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  className="relative text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full z-20">
                    {process.step}
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 z-0"></div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};