import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Download, Share2, Bookmark } from 'lucide-react';

export const BookReader = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Simulation d'un livre avec des chapitres
  const book = {
    id: parseInt(id || '1'),
    title: 'Guide Complet Microsoft Excel',
    author: 'Équipe Yekola Skills',
    totalPages: 25,
    chapters: [
      { id: 1, title: 'Introduction à Excel', pages: [1, 2, 3] },
      { id: 2, title: 'Les bases d\'Excel', pages: [4, 5, 6, 7] },
      { id: 3, title: 'Formules et fonctions', pages: [8, 9, 10, 11, 12] },
      { id: 4, title: 'Graphiques et tableaux', pages: [13, 14, 15, 16] },
      { id: 5, title: 'Fonctions avancées', pages: [17, 18, 19, 20, 21] },
      { id: 6, title: 'Macros et VBA', pages: [22, 23, 24, 25] },
    ],
  };

  const getPageContent = (page: number) => {
    const contents: { [key: number]: { title: string; content: string } } = {
      1: {
        title: 'Bienvenue dans le Guide Excel',
        content: `
          <h2>Introduction</h2>
          <p>Microsoft Excel est l'un des logiciels de tableur les plus puissants et largement utilisés dans le monde professionnel. Ce guide vous accompagnera dans votre apprentissage d'Excel, depuis les bases jusqu'aux fonctionnalités les plus avancées.</p>
          
          <h3>Objectifs de ce guide</h3>
          <ul>
            <li>Maîtriser l'interface Excel</li>
            <li>Créer et formater des tableaux</li>
            <li>Utiliser les formules et fonctions</li>
            <li>Créer des graphiques professionnels</li>
            <li>Automatiser avec les macros</li>
          </ul>
          
          <h3>Public cible</h3>
          <p>Ce guide s'adresse aux débutants souhaitant apprendre Excel ainsi qu'aux utilisateurs intermédiaires voulant perfectionner leurs compétences.</p>
        `,
      },
      2: {
        title: 'L\'interface Excel',
        content: `
          <h2>Découvrir l'interface</h2>
          <p>L'interface d'Excel est composée de plusieurs éléments essentiels que vous devez connaître :</p>
          
          <h3>Le ruban</h3>
          <p>Le ruban contient tous les outils et fonctions d'Excel, organisés en onglets thématiques :</p>
          <ul>
            <li><strong>Accueil :</strong> Formatage, copier/coller, tri</li>
            <li><strong>Insertion :</strong> Graphiques, tableaux, images</li>
            <li><strong>Formules :</strong> Bibliothèque de fonctions</li>
            <li><strong>Données :</strong> Tri, filtres, tableaux croisés</li>
          </ul>
          
          <h3>La feuille de calcul</h3>
          <p>La feuille de calcul est constituée de cellules organisées en lignes (1, 2, 3...) et colonnes (A, B, C...).</p>
        `,
      },
      3: {
        title: 'Navigation et sélection',
        content: `
          <h2>Naviguer dans Excel</h2>
          <p>Apprendre à naviguer efficacement dans Excel est crucial pour votre productivité.</p>
          
          <h3>Raccourcis clavier essentiels</h3>
          <ul>
            <li><strong>Ctrl + A :</strong> Sélectionner tout</li>
            <li><strong>Ctrl + C :</strong> Copier</li>
            <li><strong>Ctrl + V :</strong> Coller</li>
            <li><strong>Ctrl + Z :</strong> Annuler</li>
            <li><strong>F2 :</strong> Modifier une cellule</li>
          </ul>
          
          <h3>Sélection de cellules</h3>
          <p>Vous pouvez sélectionner :</p>
          <ul>
            <li>Une cellule : clic simple</li>
            <li>Une plage : glisser-déposer</li>
            <li>Une colonne : clic sur l'en-tête</li>
            <li>Une ligne : clic sur le numéro</li>
          </ul>
        `,
      },
    };

    return contents[page] || {
      title: `Page ${page}`,
      content: `<p>Contenu de la page ${page} du guide Excel...</p>`,
    };
  };

  const getCurrentChapter = () => {
    return book.chapters.find(chapter => 
      chapter.pages.includes(currentPage)
    );
  };

  const pageContent = getPageContent(currentPage);
  const currentChapter = getCurrentChapter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/livres"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour à la bibliothèque</span>
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-lg font-semibold text-gray-900">{book.title}</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Table des matières */}
          <div className="w-64 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Table des matières</span>
            </h3>
            <ul className="space-y-2">
              {book.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <button
                    onClick={() => setCurrentPage(chapter.pages[0])}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentChapter?.id === chapter.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {chapter.title}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-2">
                Page {currentPage} sur {book.totalPages}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentPage / book.totalPages) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="flex-1">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 min-h-[600px]"
            >
              <div className="mb-6">
                {currentChapter && (
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    Chapitre {currentChapter.id}: {currentChapter.title}
                  </div>
                )}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {pageContent.title}
                </h1>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: pageContent.content }}
              />
            </motion.div>

            {/* Navigation des pages */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-lg text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Page précédente</span>
              </button>

              <div className="flex items-center space-x-4">
                <span className="text-gray-500">
                  Page {currentPage} sur {book.totalPages}
                </span>
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(book.totalPages, currentPage + 1))}
                disabled={currentPage === book.totalPages}
                className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-lg text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Page suivante</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};