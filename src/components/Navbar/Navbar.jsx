import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";
const Navbar = () => {
  const location = useLocation();
  const { handleSearch, handlePrice, handleItem, totalItems } =
    useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isCartPage = location.pathname === "/cart";
  return (
    <nav
      className={`navbar ${theme === "dark" ? "navbar-dark" : "navbar-light"}`}
    >
      {/* Logo */}
      <h1 className="logo">ShopSphere</h1>

      {/* Show only on Product Page */}
      {!isCartPage && (
        <>
          {/* Search */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => handleSearch(e.target.value)}
              className={`search-input ${
                theme === "dark" ? "search-dark" : "search-light"
              }`}
            />
          </div>

          {/* Filters */}
          <div className="actions">
            <select
              onChange={(e) => handleItem(e.target.value)}
              className={`select-box ${
                theme === "dark" ? "select-dark" : "select-light"
              }`}
            >
              <option value="all">All</option>

              <option value="electronics">Electronics</option>

              <option value="vehicle">Vehicle</option>

              <option value="grocery">Grocery</option>

              <option value="kitchen">Kitchen</option>

              <option value="fashion">Fashion</option>
            </select>

            <select
              onChange={(e) => handlePrice(e.target.value)}
              className={`select-box ${
                theme === "dark" ? "select-dark" : "select-light"
              }`}
            >
              <option value="all">Default</option>

              <option value="lowToHigh">Low → High</option>

              <option value="highToLow">High → Low</option>
            </select>
          </div>
        </>
      )}

      {/* Right Side */}
      <div className="actions">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Link to="/cart" className="cart-btn">
          🛒 <span className="hidden sm:inline">Cart</span>
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
