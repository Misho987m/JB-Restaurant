import React, { Fragment } from "react";
import Header from "../components/UI/Header";
import Slider from "../components/Layout/Slider";
import Footer from "../components/UI/Footer";
import Description from "../components/UI/Description";
import Awards from "../components/Layout/Awards";

const chef_description = [
  "Janez Bratovž - a masterchef - is not only among the best chefs in Slovenia but in the whole culinary world. He is the pioneer of the modern Slovenian cuisine with vast experience. His dishes are prepared and served with utmost taste and knowledge.",
  "Janez Bratovž has experienced a lot and even explored molecular gastronomy, but, in the end, discovered that the simplest solutions are also the best. He was one of the first chefs in Slovenia to uncover the importance of quality ingredients, with Ljubljana's Central Market a part of his morning routine for the last 20 years. For the chef, everything starts with his ingredients. In his own words: “If the ingredients are good, there's no need for fancy cooking techniques. I like clean, natural tastes. It means the world to me when our guests say that they ate carrots that tasted like they did 40 years ago at my restaurant.”",
  "The menu is based on the relationship between the four classical elements: Earth, Water, Air and Fire, each representing a taste - sweet, salty, sour and bitter. The atmosphere and chef's clever dishes create the ambiance of harmonious luxury.",
];

const chef_gallery = [
  "https://jb-slo.com/wp-content/uploads/2019/11/Slika_1.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Slika_2.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Slika_3.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Slika_4.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/12/Janez-portret.jpeg",
];

const restaurant_description = [
  "JB Restaurant is the story of the Bratovž family and is built on family love and cooperation. The restaurant is a real gourmet's paradise. Its beginnings can be traced back to the year 1992 when Janez Bratovž, having gained invaluable experience abroad, returned home to Slovenia after 5 years. JB Restaurant with its chef Janez Bratovž was the first Slovenian restaurant to make the World's 50 Best Restaurants.",
  "Janez knows that his creative ideas are not enough and that running a fine restaurant requires a team effort with the whole family chipping in. His son, Tomaž, is chef's right hand in the kitchen, daughter Nina is an Advanced Sommelier in charge of the wine list, customer service and communication between staff, guests and media, and wife Ema, rounding it all up, takes care of the management.",
  "It is no coincidence that JB Restaurant sits at 19 Miklošič Street, designed by the greatest Slovenian architect, Jože Plečnik. Even though it is located right in the middle of the city bustle, it offers a calm and elegant escape where our guests can relax and peacefully experience exquisite cuisine. Clean lines and the perfection of the interior décor are a special experience for many tourists who cannot wait to visit us again.",
];

const restaurant_gallery = [
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_1.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_2.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_3.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_4.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_5.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restavracija_Slika_6.jpg",
];

export default function RestaurantPage() {
  return (
    <Fragment>
      <Header />
      <Description
        header="Chef"
        btnText="Literature"
        desc={chef_description}
        align="left"
        narrow="false"
        show={false}
        img="https://jb-slo.com/wp-content/uploads/2019/11/Janez.jpg"
      />
      <Slider images={chef_gallery} />
      <Description
        header="JB Restaurant"
        btnText="Literature"
        desc={restaurant_description}
        align="right"
        narrow={false}
        show={false}
        img="https://jb-slo.com/wp-content/uploads/2019/11/Restavracija.jpg"
      />
      <Slider images={restaurant_gallery} />
      <Awards />
      <Footer />
    </Fragment>
  );
}
