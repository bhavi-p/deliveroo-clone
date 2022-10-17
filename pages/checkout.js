/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  const {isAuthenticated, cart} = useContext(AppContext);
  // console.log(`AUTH: ${JSON.stringify(isAuthenticated)}`)
  // console.log(`CHECKOUT: ${JSON.stringify(cart)}`)
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  let {items} = cart;
  console.log(`in CART: ${JSON.stringify(items.length)}`)
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51Li4KkDLVYbccAO3GumsCgBwi8t4vuKBonFWXoZW1kCCdKojD2kwRA07f7agjKeEXAUjnHfhZUI344fhQ3Qd0dcz00GuOp3l7R"
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
