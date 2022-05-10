import React, { Fragment } from "react";
import MenuSlider from "../components/Layout/MenuSlider";
import Slider from "../components/Layout/Slider";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const menuImages = [
  "https://jb-slo.com/wp-content/uploads/2019/12/DSCF4724-1024x768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/DSCF6906-1024x768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/DSCF6921-1024x768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/DSCF6930-1024x768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0059-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0143-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0169-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0374-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0424-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0454-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0463-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0492-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0504-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH0684-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH1168-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH1293-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2039-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2064-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2125-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2212-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2238-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2375-1024x683.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2570-1024x768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/SDQH2626-1024x768.jpg",
];

export default function MenuPage() {
  return (
    <Fragment>
      <Header />
      <MenuSlider />
      <Slider images={menuImages} />
      <Footer />
    </Fragment>
  );
}
