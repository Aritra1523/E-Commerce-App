import { useContext, useState } from "react";
import products from "../../data/products";
import { useCart } from "../../hooks/useCart";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductPage.css";
import { ThemeContext } from "../../context/ThemeContext";
const ProductPage = () => {
  const {
    handleAdd,
    handleSearch,
    handleItem,
    filterData,
    totalItems,
    handlePrice,
    handleIncrement,
    handleDecrement,
    handleRemove,cart
  } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const getCartItem = (id) => {
    return cart.find((item) => item.id === id);
  };
  return (
    <>
    
      <div className="products-container">
        {filterData.length === 0 ? (
        <div className={`empty-wrapper ${theme === "dark" ? "dark" : "light"}`}>
      <div className={`empty-card ${theme === "dark" ? "dark-card" : ""}`}>
        <img src="/emoji.png" alt="No items" className="empty-img" />

        <h2 className="empty-title">No Item Found</h2>

      </div>
    </div>
        ) : (
          <div className="products-grid">
            {filterData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`product-card ${
                    theme === "dark"
                      ? "product-card-dark"
                      : "product-card-light"
                  }`}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="product-image"
                  />

                  <div className="product-content">
                    <h2
                      className={`product-title ${
                        theme === "dark" ? "title-dark" : "title-light"
                      }`}
                    >
                      {item.title}
                    </h2>

                    <p className="product-price">${item.price}</p>


                    {getCartItem(item.id) ? (
                      <div className="cart-controls">
                        <button
                          className="qty-btn"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>

                        <span className="qty-count">
                          {getCartItem(item.id).quatity}
                        </span>

                        <button
                          className="qty-btn"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>

                        <button
                          className="remove-btn"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-btn"
                        onClick={() => handleAdd(item)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default ProductPage;
