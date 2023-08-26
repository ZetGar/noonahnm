import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ZetGar/noonahnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <p>₩{product?.price}</p>

          <Form.Select aria-label="Default select example">
            {product?.size.map((size) => {
              return <option>{size}</option>;
            })}
          </Form.Select>
          <br/>
          <Button variant="danger" type="submit">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
