function Products({ products: { name, category, id, price }, handleClick }) {
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{category}</li>
        <li>{price}</li>
        <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>
      </ul>
    </>
  );
}

export default Products;
