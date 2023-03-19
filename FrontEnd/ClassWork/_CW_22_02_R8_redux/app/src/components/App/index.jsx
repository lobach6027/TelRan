import { Route, Routes } from "react-router-dom";
import AddProductPage from "../../pages/AddProductPage";
import ProductPage from "../../pages/ProductPage";
import BasketPage from "../../pages/BasketPage";
import Nav from "../Nav";
import AboutPage from '../../pages/AboutPage'
import NotFoundPage from "../../pages/NotFoundPage";
import TestPage from "../../pages/TestPage";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<AddProductPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/about/:name" element={<AboutPage/>} />
        <Route path="/about/" element={<AboutPage/>} />
        <Route path="/*" element={<NotFoundPage/>} />
        <Route path="/test/:id" element={<TestPage/>} />
      </Routes>
      
    </div>
  );
}
export default App;
