function MenuItem({meal}) {
    return (
        <li className="menu-item">
            <article>
               <img src={`./${meal.image}`} alt={meal.name} />
              <h3>{meal.name}</h3>
          </article>
    </li>
  );
}

export default MenuItem;