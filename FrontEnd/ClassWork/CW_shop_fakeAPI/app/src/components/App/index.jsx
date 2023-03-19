import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import CategoriesPage from "../../pages/CategoriesPage";
import AllProductsPage from "../../pages/AllProductsPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncloadProductsAction } from "../../store/asyncAction/products";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadCategoriesAction);
    dispatch(asyncloadProductsAction)
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route element={<CategoriesPage />} path="/" />
        <Route element={<AllProductsPage />} path="/products/all" />
        <Route element={<BasketPage />} path="/basket" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
