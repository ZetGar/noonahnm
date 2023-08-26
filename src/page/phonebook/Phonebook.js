import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ContactForm from './../../component/phonebook/ContactForm'
import ContactList from './../../component/phonebook/ContactList'

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다
// 2. 리스트에 유저 이름와 전화번호를 추가할 수 있다
// 3. 리스트에 아이템이 몇개 있는 지 보인다
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다

const Phonebook = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Phonebook;
