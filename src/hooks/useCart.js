import { useEffect, useReducer } from "react";

import Swal from "sweetalert2";

import {
  cartReducer,
  initialState,
} from "../reducer/cartReducer";

import {
  addItem,
  increment,
  decrement,
  removeItem,
  search,
  filterType,
  sortPrice,
  applyCoupon,
} from "../actions/cartActios";

export const useCart = () => {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  // LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    );

  }, [state.cart]);

  // ADD ITEM
  const handleAdd = (item) => {

    const existItem = state.cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existItem) {

      Swal.fire({
        title: "Already Added!",
        text: "Item already exists",
        icon: "warning",
      });

      return;
    }

    dispatch(
      addItem({
        ...item,
        quantity: 1,
      })
    );

    Swal.fire({
      title: "Success!",
      text: "Item added successfully",
      icon: "success",
      timer: 1500,
    });
  };

  // REMOVE ITEM
  const handleRemove = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {

        dispatch(removeItem(id));

        Swal.fire({
          title: "Deleted!",
          text: "Item removed successfully",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  // TOTAL PRICE
  const Totalprice = state.cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // TOTAL ITEMS
  const totalItems = state.cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  // PAYABLE AMOUNT (Total Price)
  const PayBleAmount =
    Totalprice - state.offerPrice;

  // APPLY DISCOUNT
  const handleDiscount = (coupon) => {

    dispatch(
      applyCoupon(coupon, Totalprice)
    );
  };

  return {

    // state
    cart: state.cart,
    filterData: state.filterData,
    offerPrice: state.offerPrice,
    activeCoupon: state.activeCoupon,

    // handlers
    handleAdd,

    handleIncrement: (id) =>
      dispatch(increment(id)),

    handleDecrement: (id) =>
      dispatch(decrement(id)),

    handleRemove,

    handleSearch: (value) =>
      dispatch(search(value)),

    handleItem: (value) =>
      dispatch(filterType(value)),

    handlePrice: (value) =>
      dispatch(sortPrice(value)),

    handleDiscount,

    // calculated values
    Totalprice,
    totalItems,
    PayBleAmount,
  };
};