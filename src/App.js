import React, { Fragment } from "react";
import Cart from "./cart/Cart";
import Form from "./components/Form";
import Header from "./Layout/Header";

import ContextProvider from "./store/ContextProvider";

const App = () => {
  return (
    <Fragment>
      <ContextProvider>
        <Cart />

        <Header />
        <Form />
      </ContextProvider>
    </Fragment>
  );
};

export default App;
