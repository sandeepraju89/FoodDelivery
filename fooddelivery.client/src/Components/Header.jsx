import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
    const { cartItems} = useContext(CartContext);
    const [showModel, setShowModel] = useState(false);

    function onHandleClick() {
        const newState = !showModel;
        setShowModel(newState);

    }

    async function onComplete() {
        const foodItems = [];
        cartItems.map(item => foodItems.push({ foodItemId: item.id, quantity: item.quantity }));
                
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foodItems)
        };
        console.log(requestOptions.body);
        const response = await fetch('order', requestOptions);
        console.log(response);
    }

    return (
        <header id="main-header">
            <h1>FoodDelivery</h1>
            <button onClick={onHandleClick}>cart ({cartItems.length})</button>
            <Modal show={showModel} onHide={onHandleClick} backdrop="static">
                <Modal.Body>
                    <Cart />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={onComplete}>Complete</button>
                    <button onClick={onHandleClick}>Close</button>
                </Modal.Footer>

            </Modal>
        </header>        
  );
}

export default Header;