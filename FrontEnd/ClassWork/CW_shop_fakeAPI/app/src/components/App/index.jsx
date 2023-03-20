import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import CategoriesPage from "../../pages/CategoriesPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncloadProductsAction } from "../../store/asyncAction/products";
import ProductsPage from "../../pages/ProductsPage";

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
        <Route element={<ProductsPage/>} path="/products/all" />
        <Route element={<BasketPage />} path="/basket" />
        <Route element={<NotFoundPage />} path="/*" />
        <Route element={ <ProductsPage/>} path="/category/:category" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
