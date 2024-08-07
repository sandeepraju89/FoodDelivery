import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { CartProvider } from './Context/CartContext'

function App() {
    
   
    return (
        <CartProvider>
            <Header />
            <Menu />
        </CartProvider>



    );
    
   
}

export default App;