import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import SubTitle from '../Utility/SubTitle';

const BrandFeatured = (props) => {
    return (
        <Container>
            <SubTitle title={props.title} btntitle={props.btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />

            </Row>
        </Container>
    )
}

export default BrandFeatured