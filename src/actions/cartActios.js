export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item,
});

export const increment = (id) => ({
    type: "INCREMENT",
    payload: id,
});

export const decrement = (id) => ({
    type: "DECREMENT",
    payload: id,
});

export const removeItem = (id) => ({
    type: "REMOVE_ITEM",
    payload: id,
});

export const search = (value) => ({
    type: "SEARCH",
    payload: value,
});

export const filterType = (value) => ({
    type: "FILTER_TYPE",
    payload: value,
});

export const sortPrice = (value) => ({
    type: "SORT_PRICE",
    payload: value,
});

export const applyCoupon = (coupon, total) => ({
    type: "APPLY_COUPON",
    payload: {
        coupon,
        total,
    },
});