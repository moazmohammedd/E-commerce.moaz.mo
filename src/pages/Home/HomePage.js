import React from "react";
import NavBarLogin from "../../components/Utility/NavBarLogin";
import { Slider } from "../../components/Home/Slider";
import "../../css/Home.scss";
import HomeCategory from "../../components/Home/HomeCategory";

const HomePage = () => {
  return (
    <div>
    <NavBarLogin/>
    <Slider/>
    <HomeCategory />
    </div>
  );
};

export default HomePage;
