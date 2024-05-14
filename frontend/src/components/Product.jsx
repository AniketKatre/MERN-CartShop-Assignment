import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded procard">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ width: "100%", height: "250px", overflow: "hidden" }}
          />
        </Link>
        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>

            <Card.Text as="div" className="product-body">
              {product.description}
            </Card.Text>
          </Link>

          <Card.Text as="h3">${product.price}</Card.Text>

          <Card.Text as="h6" className="cardtextor">
            <strong>Order soon only few left</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
