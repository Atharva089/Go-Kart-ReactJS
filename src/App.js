// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";
// import React, { useState } from "react";

// function App() {
//   const productList = [
//     {
//       name: "SamsungGalaxy A22 ",
//       price: 18000,
//       quantity: 0,
//     },
//     {
//       name: "OnePlus Nord 22CE",
//       price: 25000,
//       quantity: 0,
//     },
//   ];

//   let [ProductList, setProductList] = useState(productList);

//   const incrementQuantity = (index) => {
//     let newProductList = [...productList];
//     newProductList[index].quantity++;
//     setProductList(newProductList);
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="container mt-5">
//         <ProductList
//           productList={productList}
//           incrementQuantity={incrementQuantity}
//         />
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"; // Imported component
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const initialProductList = [
    {
      name: "SamsungGalaxy A22 ",
      price: 18000,
      quantity: 0,
    },
    {
      name: "OnePlus Nord 22CE",
      price: 25000,
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(initialProductList); // State variable
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount -= newProductList.quantity * newProductList.price;
    newProductList.splice(index, 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
