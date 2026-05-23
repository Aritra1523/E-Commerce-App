import products from "../data/products";
export const initialState = {
    products: products,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    filterData: products,
    offerPrice: 0,
    activeCoupon: null,
};

export const cartReducer = (state, action) => {
    switch (action.type) {

        // ADD ITEM
        case "ADD_ITEM":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        // INCREMENT
        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                ),
            };

        // DECREMENT
        case "DECREMENT":

            const updatedCart = state.cart.map((item) =>
                item.id === action.payload
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            );

            return {
                ...state,
                cart: updatedCart.filter(
                    (item) => item.quantity !== 0
                ),
            };

        // REMOVE
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload
                ),
            };

        // SEARCH
        case "SEARCH":

            if (action.payload === "") {
                return {
                    ...state,
                    filterData: state.products,
                };
            }

            const searchItem = state.products.filter((item) =>
                item.title
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
            );

            return {
                ...state,
                filterData: searchItem,
            };

        // FILTER CATEGORY
        case "FILTER_TYPE":

            if (action.payload === "all") {
                return {
                    ...state,
                    filterData: state.products,
                };
            }

            return {
                ...state,
                filterData: state.products.filter(
                    (item) => item.type === action.payload
                ),
            };

        // SORT PRICE
        case "SORT_PRICE":

            let sortedData = [...state.filterData];

            if (action.payload === "lowToHigh") {
                sortedData.sort((a, b) => a.price - b.price);
            }

            if (action.payload === "highToLow") {
                sortedData.sort((a, b) => b.price - a.price);
            }

            return {
                ...state,
                filterData: sortedData,
            };

        // APPLY COUPON
        case "APPLY_COUPON":

            const discount =
                (action.payload.total * action.payload.coupon) /
                100;

            return {
                ...state,
                offerPrice: discount,
                activeCoupon: action.payload.coupon,
            };

        default:
            return state;
    }
}