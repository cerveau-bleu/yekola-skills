import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, BookOpen, Globe } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Excellence Pédagogique',
      description: 'Nous nous engageons à fournir une formation de haute qualité avec des méthodes d\'apprentissage modernes et efficaces.',
    },
    {
      icon: Users,
      title: 'Accompagnement Personnalisé',
      description: 'Chaque étudiant bénéficie d\'un suivi individualisé pour maximiser ses chances de réussite.',
    },
    {
      icon: Globe,
      title: 'Innovation Technologique',
      description: 'Nous intégrons les dernières technologies et tendances du marché dans nos programmes de formation.',
    },
    {
      icon: Heart,
      title: 'Passion pour l\'Enseignement',
      description: 'Notre équipe est animée par la passion de transmettre des connaissances et de voir nos étudiants réussir.',
    },
  ];

  const team = [
    {
      name: 'Jean Mukanda',
      role: 'Directeur Général',
      bio: 'Expert en technologies numériques avec plus de 15 ans d\'expérience dans la formation professionnelle.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Marie Kabongo',
      role: 'Responsable Pédagogique',
      bio: 'Spécialisée en ingénierie pédagogique et développement de programmes de formation innovants.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Paul Tshimanga',
      role: 'Formateur Senior Développement',
      bio: 'Développeur full-stack passionné par l\'enseignement des technologies web modernes.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Grace Mbuyi',
      role: 'Formatrice Design Graphique',
      bio: 'Designer graphique créative avec une expertise reconnue dans la Suite Adobe et le design digital.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Création de Yekola Skills', description: 'Lancement officiel avec nos premières formations en bureautique' },
    { year: '2021', event: 'Expansion des programmes', description: 'Ajout des formations en développement web et design graphique' },
    { year: '2022', event: '500+ étudiants formés', description: 'Atteinte du cap des 500 étudiants avec un taux de satisfaction de 95%' },
    { year: '2023', event: 'Partenariat Microsoft', description: 'Devenu partenaire officiel Microsoft Learning Partner' },
    { year: '2024', event: 'Formation en ligne', description: 'Lancement de notre plateforme d\'apprentissage en ligne' },
    { year: '2025', event: 'Nouvelles ambitions', description: 'Expansion vers de nouveaux domaines et technologies émergentes' },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos de Yekola Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour le développement des compétences numériques
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Démocratiser l'accès aux compétences numériques en proposant des formations 
              de qualité, accessibles et adaptées aux besoins du marché du travail en République 
              Démocratique du Congo et au-delà. Nous croyons que chacun mérite d'avoir accès 
              aux outils nécessaires pour réussir dans l'économie numérique d'aujourd'hui.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Devenir la référence en matière de formation aux technologies numériques 
              en Afrique centrale, en formant une génération de professionnels qualifiés 
              et en contribuant au développement économique et social de notre région 
              grâce à l'innovation et à l'excellence pédagogique.
            </p>
          </motion.div>
        </div>

        {/* Valeurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Notre Histoire */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre Histoire
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-green-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:px-8">
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez la famille Yekola Skills et transformez votre avenir professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Voir nos formations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Nous contacter
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};