import React, { useState, useContext, useEffect } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";

function CounterVal({
  id,
  counterVal,
  price,
  productTotal,
  setProductTotal,
  total,
  setTotal,
}) {
  const [quantity, setQuantity] = useState(counterVal);
  const [subTotal, setSubTotal] = useState(quantity * price);
  
  useEffect(() => {
    setProductTotal((prevTotal) => [...prevTotal, (counterVal*price)]);   
    const array = productTotal;
  const sum = array.reduce((pv, cv) => pv + cv, 0);
  console.log(sum);
  setTotal(sum)
  }, [id]);
  

  const addItem = (id) => {
    setQuantity((prevCount) => prevCount + 1);
    setSubTotal(parseFloat((quantity + 1) * price).toFixed(2));
    console.log(subTotal);
    
      let newTotal = parseFloat(total + price);
      console.log(parseFloat(newTotal));
      setTotal(Math.round(newTotal*100)/100)
  };

  const subsItem = (counterVal) => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
      setSubTotal((quantity - 1) * price);
      if((total-price)>0){
      let newTotal = parseFloat(total - price);
      console.log(parseFloat(newTotal));
      setTotal(Math.round(newTotal*100)/100)
      }
      else{
        setTotal(0)
      }
      // setTotal(prevTotal => [...prevTotal.push(subTotal)])
    } else {
      setQuantity(0);
      setSubTotal(quantity * price);      
    }
  };

  console.log(id);
  console.log(total);
  return (
    <>
      <TableCell align="right">
        <IconButton aria-label="arrowUpwardIcon" size="small" onClick={()=>{addItem(id)}}>
          <ArrowUpwardIcon fontSize="inherit" />
        </IconButton>
        <label htmlFor="count">{quantity}</label>
        <IconButton
          aria-label="arrowDownwardIcon"
          size="small"
          onClick={subsItem}
        >
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
      <TableCell align="right">{subTotal}</TableCell>
    </>
  );
}

export default CounterVal;
