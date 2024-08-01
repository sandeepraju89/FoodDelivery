import { useState, useEffect } from 'react'
import MenuItem from "./MenuItem";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        populateMenu();
    }, []);

    async function populateMenu() {
        const response = await fetch('MenuItem');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setMenuItems(data);
    }
  return (
      <ul>
          {menuItems.map(item => <MenuItem key={item.name} meal={item} />)}
    </ul>
  );
}

export default Menu;