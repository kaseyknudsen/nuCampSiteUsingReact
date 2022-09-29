import { Routes, Route } from 'react-router-dom'
import contactPage from './pages/ContactPage';
import Header from './components/Header';
import './App.css';
import CampsitesDirectoryPage from './pages/campsitesDirectoryPage'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
