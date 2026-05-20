import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
// import Footer from "./components/Footer";
import CartPage from "./pages/CartPage/CartPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout/Layout";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "#111" : "#fff",

          color: theme === "dark" ? "#fff" : "#000",

          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
         <Layout>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          </Layout >
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
