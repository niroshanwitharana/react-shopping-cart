import React, {useContext, useEffect} from "react";
import { Form, Col } from "react-bootstrap";
import Checkout from "./Checkout";
import useFetch from './useFetch';
import { ProductContext } from "../productContext/ProductContext"

export default function Cart() {
  
  const {data, pending, error } = useFetch('http://localhost:5000/cart')
    const {cart, setCart, total, setTotal} = useContext(ProductContext);
    console.log(total);    

  return (
    <div className="checkout">
      <h1>Proceed to Checkout</h1>
      <div className="address">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose</option>
                <option>State1</option>
                <option>State2</option>
                <option>State3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Post Code</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Choose as my Delivery Address" />
          </Form.Group>
        </Form>
      </div>
      <div className="productInfo">
         {  data && <Checkout data={data} />}
      </div>
    </div>
  );
}
