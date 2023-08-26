import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchList = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    dispatch({type:'SEARCH', payload:{keyword}} )
  };

  return (
    <Form onSubmit={searchList}>
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="이름을 입력해주세요" />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
