import { useState } from "react";
import { contextItem } from "./Contextstore";

const initialValue = {
  id: Math.random() * 10,
  candyName: "",
  candyDescription: "",
  candyPrice: 10,
};

const ContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addItems = (item) => {
    setList([...list, item]);
  };

  const removeItem = (Id) => {
    const filterItems = list.filter((item) => item.id !== Id);
    setList(filterItems);
  };

  return (
    <contextItem.Provider
      value={{
        list,
        addItems,
        handleInputChange,
        formData,
        showCart,
        setShowCart,
        removeItem,
      }}
    >
      {props.children}
    </contextItem.Provider>
  );
};

export default ContextProvider;
