import './App.css';
import { HomePage } from './pages/Home/HomePage';
import { Routes, Route} from 'react-router-dom';
import { CatalogPage } from './pages/Сatalog/CatalogPage';
import { DeliveryPage } from './pages/Delivery/DeliveryPage';
import { AboutPage } from './pages/About/AboutPage';
import { BookDetailsPage } from './pages/BookDetailsPage/BookDetailsPage';
import {PageNotFound} from './pages/PageNotFound/PageNotFound';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { PublishingPage } from './pages/PublishingPage/PublishingPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/category/:category" element={<CategoryPage /> } />
        <Route path="/publishing/:publishing" element={<PublishingPage /> } />
        <Route path="/favorites" element={<FavoritesPage /> } />
        <Route path="/basket" element={<BasketPage /> } />
        <Route path="/profile" element={<ProfilePage /> } />
        <Route path="/search" element={<SearchPage /> } />

      </Routes>
    </div>
  );
}

export default App;
