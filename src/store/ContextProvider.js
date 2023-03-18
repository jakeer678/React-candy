import { useState } from "react";
import { contextItem } from "./Contextstore";

const ContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [formData, setFormData] = useState("");
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const removeItem = (Id) => {
    const filterItems = list.filter((item) => item.id !== Id);
    setList(filterItems);
  };

  console.log(formData, "oooooo");
  console.log(list, "iiiiiii");

  return (
    <contextItem.Provider
      value={{
        list,
        setList,
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