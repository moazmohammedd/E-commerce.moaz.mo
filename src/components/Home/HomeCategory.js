import React from "react";
import SubTitle from "../Utility/SubTitle";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import sale from "../../assets/images/sale.png";
import pic from "../../assets/images/pic.png";
const HomeCategory = () => {
    const data =[
        {id:1 , src:clothe , bg:'#F4DBA450' ,title:'اجهوة منزلية'},
        {id:2 , src:cat2 , bg:'#e9d1c3b8' ,title:'اجهوة منزلية'},
        {id:3 , src:labtop , bg:'#0034FF50' ,title:'اجهوة منزلية'},
        {id:4 , src:clothe , bg:'#F4DBA480' ,title:'اجهوة منزلية'},
        {id:5 , src:sale , bg:'#FF626260' ,title:'اجهوة منزلية'},
        {id:6 , src:pic , bg:'#F4DBA440' ,title:'اجهوة منزلية'}
    ]
return (
    <div className="category">
    <Container>
    <SubTitle title='التصنيفات' btnTitle='المزيد'></SubTitle>
    <Row className="my-2 d-flex jsutify-content-between">
    {
        data.length > 0 ? data.map(item=>{
        return(
        <CategoryCard key={item.id} src={item.src} bg={item.bg} title={item.title}></CategoryCard>
        )
    }) : null
    }
    </Row>
    </Container>
    </div>
);
};

export default HomeCategory;
