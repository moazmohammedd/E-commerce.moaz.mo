import React from "react";
import { Card, Col } from "react-bootstrap";

const BrandCard = (props) => {
    return (
        <Col
            sm="6"
            xs="6"
            md="4"
            lg="2"
            className="my-f d-flex justify-content-center"
        >
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}
            >
                <Card.Img style={{ width: "100%", height: "151px" }} src={props.img} />
            </Card>
        </Col>
    );
};

export default BrandCard;
