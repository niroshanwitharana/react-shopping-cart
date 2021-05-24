import React, { useState, createContext } from "react";

// creatng a context
export const ProductContext = React.createContext();

export default ({ children }) => {
  // the data we want to pass to the context using useState method.
  const [cart, setCart] = useState(0);
  const [message, setMessage] = useState(null);
  const [total, setTotal] = useState(null);

  return (
    <div>
      {/* set the data what we going to use in the contextApi, inside the provider's value property if browser is loaded. */}
      <ProductContext.Provider
        value={{
            cart,
            setCart,
            message,
            setMessage,
            total,
            setTotal         
        }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};
