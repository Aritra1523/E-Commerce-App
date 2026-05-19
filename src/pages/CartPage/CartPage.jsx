import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { ThemeContext } from "../../context/ThemeContext";
const CartPage = () => {
  const {
    cart,
    handleIncrement,
    handleDecrement,
    handleRemove,
    Totalprice,
    totalItems,
    handleDiscount,
    offerPrice,
    PayBleAmount,
    activeCoupon,
  } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`cart-page ${theme === "dark" ? "cart-dark" : "cart-light"}`}
      >
        <div className="cart-layout">
          {/* LEFT SIDE */}

          <div
            className={`cart-section ${
              theme === "dark" ? "section-dark" : "section-light"
            }`}
          >
            <h1 className="cart-heading">Cart Items ({totalItems})</h1>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <img
                  src="/empty-cart.png"
                  alt="empty-cart"
                  className="empty-cart-img"
                />

                <h2 className="cart-heading">No Items Found</h2>

                <p className="empty-text">
                  Sorry mate... no items found inside your cart
                </p>
              </div>
            ) : (
              cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`cart-item ${
                      theme === "dark" ? "item-dark" : "item-light"
                    }`}
                  >
                    <div className="cart-left">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="cart-image"
                      />

                      <div>
                        <h2 className="cart-title">{item.title}</h2>

                        <p className="cart-subtitle">₹{item.price} each</p>
                      </div>
                    </div>

                    <div className="cart-right">
                      <div className="quantity-box">
                        <button
                          className="qty-btn"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>

                        <span className="qty-value">{item.quatity}</span>

                        <button
                          className="qty-btn"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <h2 className="item-price">
                        ₹{item.price * item.quatity}
                      </h2>

                      <button
                        className="delete-btn"
                        onClick={() => handleRemove(item.id)}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                );
              })
            )}
            <button className="undo-btn">
              <Link to="/">Go To Buy</Link>
            </button>{" "}
          </div>

          {/* RIGHT SIDE */}

          <div
            className={`summary-section ${
              theme === "dark" ? "section-dark" : "section-light"
            }`}
          >
            <h2 className="summary-title">Order Summary</h2>

            <div className="coupon-section">
              <p className="coupon-text">Select a coupon</p>

              <div className="coupon-box">
                <button
                  className={`coupon-btn ${
                    activeCoupon == 10 ? "active-coupon" : ""
                  }`}
                  value={10}
                  onClick={(e) => handleDiscount(Number(e.target.value))}
                >
                  SAVE10
                </button>

                <button
                  className={`coupon-btn ${
                    activeCoupon == 20 ? "active-coupon" : ""
                  }`}
                  value={20}
                  onClick={(e) => handleDiscount(Number(e.target.value))}
                >
                  SAVE20
                </button>

                <button
                  className={`coupon-btn ${
                    activeCoupon == 30 ? "active-coupon" : ""
                  }`}
                  value={30}
                  onClick={(e) => handleDiscount(Number(e.target.value))}
                >
                  SAVE30
                </button>
              </div>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <p>Subtotal</p>

                <p>₹{Totalprice}</p>
              </div>
              <div className="summary-row">
                <p>Save</p>

                <p>-₹{offerPrice}</p>
              </div>

              <div className="summary-row total-row">
                <p>Total Amount</p>

                <h2>₹{PayBleAmount}</h2>
              </div>
            </div>

            <div className="discount-box">
              Add ₹50 more to get 10% bulk discount!
            </div>

            <button className="checkout-btn">Proceed to Checkout →</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
