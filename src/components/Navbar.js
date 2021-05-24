import React, { useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import { GiShoppingCart } from "react-icons/gi"
import {ProductContext} from "../productContext/ProductContext"
import useFetch from './useFetch';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavLinks() {
  const {data } = useFetch('http://localhost:5000/cart')
  const classes = useStyles();
  const {cart, setCart} = useContext(ProductContext);
  // const numOfItem=data.length;
  // if(numOfItem){
  //   setCart(numOfItem);
  // }
  console.log(cart);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Catagories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/cat/mens">Mens</NavDropdown.Item>
        <NavDropdown.Item href="/cat/womens">Womens</NavDropdown.Item>
        <NavDropdown.Item href="/cat/kids">Kids</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/cat/accessories">Accessories</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="/cart">
      <div className={classes.root}>
      <Badge badgeContent={cart} color="primary">
      < GiShoppingCart />
      </Badge>
      </div>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
