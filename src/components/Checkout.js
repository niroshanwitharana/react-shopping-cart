import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Icon from "@material-ui/core/Icon";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { ProductContext } from "../productContext/ProductContext";
import CounterVal from "./CounterVal";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

export default function Checkout({ data }) {
  const classes = useStyles();
  const [items, setItems] = useState(data);
  const [productTotal, setProductTotal] = useState([]);
  const { cart, setCart, total, setTotal } = useContext(ProductContext);

  const removeItem = (Id) => {
    setItems(items.filter((item) => JSON.stringify(item.id) != Id));
    setCart(items.length);
  };

  useEffect(() => {
    setCart(items.length);
  }, [data]);

  console.log(total);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">price (£)</TableCell>
            <TableCell align="right">Remove Item</TableCell>
            <TableCell align="right">Quntity change</TableCell>
            <TableCell align="right">Sub Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items
          ? items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.itemName}
                  </TableCell>
                  <TableCell align="right">{item.itemPrice}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeItem(item.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <CounterVal
                    id={item.id}
                    counterVal={item.counterVal}
                    price={item.itemPrice}
                    productTotal={productTotal}
                    setProductTotal={setProductTotal}
                    total={total}
                    setTotal={setTotal}
                  />
                </TableRow>
            ))
            : null}
            <TableRow>
              <TableCell><strong>Total</strong></TableCell><TableCell></TableCell><TableCell></TableCell>
              <TableCell></TableCell><TableCell>{ total }</TableCell>
            </TableRow>
            </TableBody>
      </Table>
    </TableContainer>
  );
}
