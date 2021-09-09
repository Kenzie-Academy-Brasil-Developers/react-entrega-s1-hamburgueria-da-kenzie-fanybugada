import Product from "../Product";

function MenuContainer({ products, handleClick }) {
  return (
    <>
      {products.map((item, index) => {
        return (
          <Product key={index} products={item} handleClick={handleClick} />
        );
      })}
    </>
  );
}

export default MenuContainer;
