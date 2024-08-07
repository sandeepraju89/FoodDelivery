import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
export default function MenuItem({ meal }) {
    const { cartItems, addToCart } = useContext(CartContext)
    function onHandleAdd(item)
    {
        addToCart(item);
    }
    return (
        <li className="menu-item">
            <article>
              <img src={`./${meal.image}`} alt={meal.name} />
                <h3>{meal.name}</h3>
                <p>{meal.price}$</p>
                <p className="menu-item-actions">
                    <button onClick={() => onHandleAdd(meal)}>Add to Cart</button>
                </p>
          </article>
    </li>
  );
}
