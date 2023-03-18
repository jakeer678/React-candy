import React, { Fragment, useContext } from "react";
import { contextItem } from "../store/Contextstore";
import "./FormDisplay.css";

const FormDisplay = () => {
  const { list, setList } = useContext(contextItem);

  return (
    <Fragment>
      <div>
        <div className="itemList">
          {list?.map((item) => (
            <div>
              <div key={item.id} className="itemList_1">
                <div className="itemlist">
                  <p className="name">{item?.candyName}</p>
                  <p className="description">{item?.candyDescription}</p>
                  <p className="price">{item?.candyPrice}</p>
                </div>

                <button className="button" onClick={() => setList(item)}>
                  AddTwoItem
                </button>
                <button className="button" onClick={() => setList(item)}>
                  AddThreeItem
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FormDisplay;
