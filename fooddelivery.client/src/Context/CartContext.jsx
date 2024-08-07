import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) =>
{
    const [cartItems, setCartItems] = useState(sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []);

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        const updatedItems = [...cartItems];
        if (existingItemIndex > -1) {
            const existingItem = cartItems[existingItemIndex];
            const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
            updatedItems[existingItemIndex] = updatedItem;

        }
        else {
            updatedItems.push({ ...item, quantity: 1 });
        }
        setCartItems(updatedItems);
        console.log(updatedItems);
    }

    const removeFromCart = (item) =>
    {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        const updatedItems = [...cartItems];
        if (existingItemIndex < 0)
            return;
        const existingItem = cartItems[existingItemIndex];
        if (item.quantity === 1) {
            updatedItems.splice(existingItemIndex, 1);
        }
        else
        {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems[existingItemIndex] = updatedItem;
        }
        setCartItems(updatedItems);
    }

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = sessionStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );


};


