import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Formations } from './pages/Formations';
import { Books } from './pages/Books';
import { BookReader } from './pages/BookReader';
import { Services } from './pages/Services';
import { Announcements } from './pages/Announcements';
import { About } from './pages/About';
import { StudentRegistration } from './pages/StudentRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/livres" element={<Books />} />
            <Route path="/livres/:id" element={<BookReader />} />
            <Route path="/services" element={<Services />} />
            <Route path="/annonces" element={<Announcements />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/inscription" element={<StudentRegistration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;