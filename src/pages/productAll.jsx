import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/productCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProdcutes = async () => {
    let url = "http://localhost:3004/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProdcutes();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
