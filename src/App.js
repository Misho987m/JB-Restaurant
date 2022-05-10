import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

import ReservationPage from "./pages/ReservationPage";
import MenuPage from "./pages/MenuPage";
import RestaurantPage from "./pages/RestaurantPage";
import LiteraturePage from "./pages/LiteraturePage";
import GiftCardsPage from "./pages/GiftCardsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/restaurant" element={<RestaurantPage />} />
      <Route path="/literature" element={<LiteraturePage />} />
      <Route path="/giftcards" element={<GiftCardsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
