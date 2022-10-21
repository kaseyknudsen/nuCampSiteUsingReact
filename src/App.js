import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import CampsitesDirectoryPage from "./pages/campsitesDirectoryPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import AboutPage from "./pages/AboutPage";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import { fetchPartners } from "./features/partners/PartnersSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
