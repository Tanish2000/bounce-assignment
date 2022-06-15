import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Items from "./Components/Items";
import Invoice from "./Components/Invoice";
import { useState } from 'react';


const items_array = [
  {
    id : 1,
    name : "Burger",
    price : "200",
    desc : "Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat"
  },
  {
    id : 2,
    name: "Halwa",
    price : "100",
    desc : "Halva (also halvah, halwa, and other spellings) is a type of confectionery originating from Persia and widely spread throughout the Middle East"
  },
  {
    id : 3,
    name : "Mango Juice",
    price : "60",
    desc : "Homemade Mango Juice is a refreshing drink made using just 2 ingredients – mangoes and sugar. This sweet, tangy, and fruity tropical juice can be made using a blender"
  },
  {
    id : 4,
    name : "Samosa",
    price : "20",
    desc : "A Samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas."
  },
  {
    id : 5,
    name : "Jalebi",
    price : "200",
    desc : "Jalebi, is a popular sweet snack in south and west Asia, Africa, and Mauritius. It goes by many names, including jilapi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, or zalabia."
  },
]

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(0); 

  const addItems = (id) => {
    const item = items_array.filter((item) => item.id === id);
    setCartItems((cartItems) => cartItems+1);
    setItems([...items , item[0]])
  }

  const removeItems = (id) => {
    const first_index = items.findIndex((item) => item.id === id);
    const temp_items = JSON.parse(JSON.stringify(items))
    temp_items.splice(first_index,1);
    setCartItems((cartItems) => cartItems-1);
    setItems(temp_items);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Items items={items_array} addItems={addItems} cartItems={cartItems}  />} exact />
          <Route path="/invoice" element={<Invoice items={items} removeItems={removeItems} cartItems={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
