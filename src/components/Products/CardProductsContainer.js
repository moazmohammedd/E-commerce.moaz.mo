import React from "react";
import ProuductCard from "./ProuductCard";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
const CardProductsContainer = (props) => {
  return (
    <Container>
      <SubTitle title={props.title} btnTitle={props.btnTitle}></SubTitle>
      <Row className="my-2 d-flex jsutify-content-between">
        <ProuductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
