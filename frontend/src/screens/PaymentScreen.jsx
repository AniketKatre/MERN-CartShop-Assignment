import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { savePaymentMethod } from "../slices/cartSlice";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <>
      <FormContainer>
        <h1>Payment Methods</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend" className="my-3">
              Select Method
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                className="my-3"
                label="PayPal or Credit Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
            <Col>
              <Form.Check
                type="radio"
                className="my-3"
                label="Cash on delivery"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
            <Col>
              <Form.Check
                type="radio"
                className="my-3"
                label="Debit Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
            <Col>
              <Form.Check
                type="radio"
                className="my-3"
                label="Gift Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary " className="btn-info my-3">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
