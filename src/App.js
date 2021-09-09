import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (str) => {
    const letFilteredProducts = products.filter(
      (item) => item.name.toLowerCase() === str.toLowerCase()
    );
    setProducts(letFilteredProducts);
    if (letFilteredProducts.length === 0) {
      return alert("Item não encontrado. Tente novamente.");
    }
    return setProducts(letFilteredProducts);
  };

  const handleClick = (productId) => {
    const findProduct = products.find((item) => item.id === productId);

    const duplicatedItem = currentSale.some((item) => item.id === productId);
    if (duplicatedItem) {
      return "";
    }
    return setCurrentSale([...currentSale, findProduct]);
  };

  const totalCart = currentSale
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <div className="App">
      <header>Kenzie Burguer</header>
      <div className="searchDiv">
        <input
          placeholder="Pesquisar item"
          type="text"
          value={filteredProducts}
          onChange={(evt) => setFilteredProducts(evt.target.value)}
        />
        <button onClick={() => showProducts(filteredProducts)}>
          Pesquisar
        </button>
      </div>
      <MenuContainer products={products} handleClick={handleClick} />
      <div className="cartDiv">
        Carrinho:
        <ul>
          {currentSale.map((item, index) => (
            <>
              <li key={index}>Item: {item.name}</li>
              <li key={index}>Categoria: {item.category}</li>
              <li key={index}>Preço: {item.price}</li>
            </>
          ))}
        </ul>
      </div>
      <div className="totalCartDiv">
        <h3>Total da compra: R$:{totalCart}</h3>
      </div>
    </div>
  );
}

export default App;
