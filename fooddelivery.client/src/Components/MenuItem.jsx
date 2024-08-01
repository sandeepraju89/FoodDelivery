function MenuItem({meal }) {
  return (
      <li>
          <article>
              <h3>{meal.name}</h3>
          </article>
    </li>
  );
}

export default MenuItem;