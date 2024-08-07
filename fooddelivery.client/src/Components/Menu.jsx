import { useState, useEffect } from 'react'
import MenuItem from './MenuItem';

function Menu() {
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        populateMenu();
    }, []);

    const result = menuItems === undefined ? <p>No items available, please refresh</p> :
        <ul id="menu">{menuItems.map(item => <MenuItem key={item.id} meal={item }/>)}</ul>
    async function populateMenu() {
        const response = await fetch('menuItem');        
        const data = await response.json();        
        setMenuItems(data);
    }
    return (
        result
  );
}

export default Menu;