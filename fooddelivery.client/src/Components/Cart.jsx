import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

export default function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    function handleRemove(item)
    {
        removeFromCart(item);
    }
    function handleAdd(item)
    {
        addToCart(item);
    }

    return (
        <Container>
          {cartItems.map(item =>
              <Row key={item.id}>
                  <Column>{item.name}</Column>
                  <Column sm={2}>
                      <button onClick={() => handleRemove(item)}>-</button>
                  </Column>
                  <Column sm={2}>{item.quantity} </Column>
                  <Column sm={2}>
                      <button onClick={() => handleAdd(item)}>+</button>
                   </Column>                  
              </Row>)
          }
      </Container>
  );
}
