import React from "react";
import NavBarLogin from "../../components/Utility/NavBarLogin";
import { Slider } from "../../components/Home/Slider";
import "../../css/Home.scss";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import Footer from "../../components/Utility/Footer";

const HomePage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <NavBarLogin/>
    <Slider/>
    <HomeCategory />
    <CardProductsContainer title="المنتجات الاكثر مبيعاً" btnTitle='المزيد'/>
    <DiscountSection>
      
    </DiscountSection>
    <CardProductsContainer title="احدث الازياء" btnTitle='المزيد'/>
    <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />
    <Footer></Footer>
    </div>
  );
};

export default HomePage;
