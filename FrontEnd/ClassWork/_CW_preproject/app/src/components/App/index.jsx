import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import AllProductPage from "../../pages/AllProductsPage";
import BasketPage from "../../pages/BasketPage";
import CategoryPage from "../../pages/CategoryPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route element={<AllProductPage />} path="/allproducts" />
        <Route element={<BasketPage />} path="/basket" />
        <Route element={<CategoryPage />} path="/" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
