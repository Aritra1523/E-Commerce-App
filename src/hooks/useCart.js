import { useEffect, useState } from "react";
import products from "../data/products";
import Swal from "sweetalert2";
export const useCart = () => {
    const [cart, setCart] = useState(() => {
        const saveCart = localStorage.getItem("cart");
        return saveCart ? JSON.parse(saveCart) : [];
    });
    const [filterData, setFilterData] = useState(products)
    const [offerPrice, setOfferPrice] = useState(0)
    const [activeCoupon, setActiveCoupon] =
        useState(null);
    JSON.parse(localStorage.getItem("cartItems"))
    const handleAdd = (item) => {
        const existItem = cart.find((ClickItem) => ClickItem.id === item.id);
        if (existItem) {
            Swal.fire({
                title: "Already Added!",
                text: "Item is already added to cart",
                icon: "warning",
            });
            return
        }
        setCart((prev) => [
            ...prev, {
                ...item, quatity: 1
            }
        ]
        )
        Swal.fire({
            title: "Success!",
            text: "Item added to cart!",
            icon: "success",
            timer: 2000,
        });

    };
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    // console.log(cart)


    const handleIncrement = (id) => {

        setCart((prev) => prev.map((item) => {
            return (
                item.id === id
                    ? { ...item, quatity: item.quatity + 1 } : item
            )

        }))
    };
    const handleDecrement = (id) => {
        const update = cart.map((item) => {
            if (item.id === id && item.quatity > 0) {
                return {
                    ...item,
                    quatity: item.quatity - 1,
                };
            }
            return item;
        });
        const filter = update.filter((item) => item.quatity !== 0);
        setCart(filter);
    };
    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                const remove = cart.filter((item) => item.id !== id);
                setCart(remove);

                Swal.fire({
                    title: "Deleted!",
                    text: "Item removed successfully",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title: "Cancelled",
                    text: "Item is safe 🙂",
                    icon: "info",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });


    };
    const handleSearch = (e) => {
        const serachItem = products.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()))
        // console.log(serachItem)
        setFilterData(serachItem)

    }
    const handleItem = (value) => {
        if (value === "all") {
            setFilterData(products)
            return;
        }
        const filterize = products.filter((item) => item.type === value)

        setFilterData(filterize)
    }
    const handlePrice = (value) => {
        if (value === "all") {
            setFilterData(products)
        }
        const storeData = [...filterData]//(.sort) modifies original data so that i make a copy of original data because of i do not need to modifies original data

        if (value === "lowToHigh") {
            storeData.sort((a, b) => a.price - b.price)
        }
        if (value === "highToLow") {
            storeData.sort((a, b) => b.price - a.price)
        }
        setFilterData(storeData)
    }

    const Totalprice = cart.reduce((total, item) => {
        return total + item.price * item.quatity
    }, 0)
    const handleDiscount = (e) => {
        // console.log("e", e)

        if (e == 10) {
            const FinalPrice = (Totalprice * e) / 100
            setOfferPrice(FinalPrice)
            setActiveCoupon(e);
        }
        if (e == 20) {
            const FinalPrice = (Totalprice * e) / 100
            setOfferPrice(FinalPrice)
            setActiveCoupon(e);
        }
        if (e == 30) {
            const FinalPrice = (Totalprice * e) / 100
            setOfferPrice(FinalPrice)
            setActiveCoupon(e);
        }

    }
    // console.log(offerPrice)
    const PayBleAmount = Totalprice - offerPrice
    // console.log("PayBleAmount",PayBleAmount)


    const totalItems = cart.reduce((acc, item) => acc + item.quatity, 0)
    return { cart, handleAdd, handleIncrement, handleDecrement, handleRemove, Totalprice, handleSearch, handleItem, filterData, totalItems, handlePrice, handleDiscount, offerPrice, PayBleAmount, activeCoupon }
}

