import React from "react";
import { Col } from "react-bootstrap";

const CategoryCard = (props) => {
  return (
    <Col
      sm="6"
      xs="6"
      md="4"
      lg="2"
      className="my-f d-flex justify-content-around"
    >
      <div className="allCard mb-3">
        <div className="category-card" style={{ background: `${props.bg}` }}>
          <img
            className="category-card-img w-100"
            src={props.src}
            alt="category-img"
          />
          <p>{props.title}</p>
        </div>
      </div>
    </Col>
  );
};

export default CategoryCard;
