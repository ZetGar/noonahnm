import React from "react";
import { Row, Col} from "react-bootstrap";

const ContactItem = ({item}) => {

  return (
    <Row>
      <Col lg={2}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          width={"50px"}
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
