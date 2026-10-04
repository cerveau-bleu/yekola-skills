import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, BookOpen, Calendar, CreditCard, CheckCircle } from 'lucide-react';

export const StudentRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    
    // Formation
    selectedFormation: '',
    startDate: '',
    motivation: '',
    
    // Paiement
    paymentMethod: '',
    installments: false,
  });

  const formations = [
    { id: 'excel', name: 'Microsoft Excel Avancé', price: 50, duration: '4 semaines' },
    { id: 'web-dev', name: 'Développement Web Complet', price: 120, duration: '8 semaines' },
    { id: 'photoshop', name: 'Adobe Photoshop Pro', price: 80, duration: '6 semaines' },
    { id: 'powerpoint', name: 'PowerPoint Professionnel', price: 40, duration: '3 semaines' },
    { id: 'marketing', name: 'Marketing Digital', price: 90, duration: '5 semaines' },
    { id: 'illustrator', name: 'Illustrator & Design Vectoriel', price: 75, duration: '5 semaines' },
  ];

  const steps = [
    { id: 1, title: 'Informations personnelles', icon: User },
    { id: 2, title: 'Choix de formation', icon: BookOpen },
    { id: 3, title: 'Paiement', icon: CreditCard },
    { id: 4, title: 'Confirmation', icon: CheckCircle },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getSelectedFormation = () => {
    return formations.find(f => f.id === formData.selectedFormation);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Inscription à Yekola Skills
          </h1>
          <p className="text-xl text-gray-600">
            Commencez votre parcours de formation dès aujourd'hui
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 w-16 md:w-24 lg:w-32 transition-all duration-300 ${
                      step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div key={step.id} className="text-center max-w-24">
                <p className="text-sm font-medium text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Step 1: Informations personnelles */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations personnelles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de famille *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom de famille"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre adresse"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ville
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre ville"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Choix de formation */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choisissez votre formation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {formations.map((formation) => (
                  <div
                    key={formation.id}
                    onClick={() => handleInputChange('selectedFormation', formation.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.selectedFormation === formation.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">{formation.name}</h3>
                      <span className="text-2xl font-bold text-blue-600">${formation.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Durée: {formation.duration}</p>
                    {formData.selectedFormation === formation.id && (
                      <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">Formation sélectionnée</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de début souhaitée
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivation (optionnel)
                  </label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Pourquoi souhaitez-vous suivre cette formation ?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Paiement */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de paiement
              </h2>
              
              {getSelectedFormation() && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Récapitulatif</h3>
                  <div className="flex justify-between items-center">
                    <span>{getSelectedFormation()?.name}</span>
                    <span className="font-bold">${getSelectedFormation()?.price}</span>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Mode de paiement
                  </label>
                  <div className="space-y-3">
                    {['carte', 'mobile-money', 'virement'].map((method) => (
                      <div key={method} className="flex items-center">
                        <input
                          id={method}
                          type="radio"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <label htmlFor={method} className="ml-3 text-gray-700">
                          {method === 'carte' && 'Carte bancaire'}
                          {method === 'mobile-money' && 'Mobile Money'}
                          {method === 'virement' && 'Virement bancaire'}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="installments"
                    type="checkbox"
                    checked={formData.installments}
                    onChange={(e) => handleInputChange('installments', e.target.checked)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <label htmlFor="installments" className="ml-3 text-gray-700">
                    Paiement en plusieurs fois (sans frais)
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Inscription confirmée !
              </h2>
              
              <p className="text-gray-600 mb-6">
                Félicitations ! Votre inscription à été enregistrée avec succès. 
                Vous recevrez un email de confirmation avec tous les détails dans les prochaines minutes.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold text-gray-900 mb-3">Récapitulatif de votre inscription</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Nom:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formation:</span>
                    <span>{getSelectedFormation()?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prix:</span>
                    <span className="font-bold">${getSelectedFormation()?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Suivant
              </button>
            ) : (
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Accéder à mon espace
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};