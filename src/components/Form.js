import React, { Fragment, useContext } from "react";
import { contextItem } from "../store/Contextstore";
import "./Form.css";
import FormDisplay from "./FormDisplay";

const Form = () => {
  const { list, setList, handleInputChange, formData } =
    useContext(contextItem);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setList([
      ...list,
      {
        candyName: formData.candyName,
        candyDescription: formData.candyDescription,
        candyPrice: formData.candyPrice,
        qauntity:1
      },
   
    ]);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <div>
            <label>Candy Name</label>
            <input
              id="candyName"
              type="text"
              name="candyName"
              value={formData.candyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Candy Description</label>
            <input
                id="candyDescription"
              type="text"
              name="candyDescription"
              value={formData.candyDescription}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Candy Price</label>
            <input
             id="candyPrice"
              type="number"
              name="candyPrice"
              value={formData.candyPrice}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="text">Add Candy</button>
          </div>
        </div>
      </form>
      <FormDisplay />
    </Fragment>
  );
};

export default Form;
