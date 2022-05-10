import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import classes from "./Slider.module.css";
import SwiperCore, { Navigation } from "swiper";
import MenuList from "./MenuList";
SwiperCore.use([Navigation]);

const menu = {
  "a-la-carte": {
    title: "a-la-carte",
    meals: [
      {
        title: "Tuna",
        price: "15€",
      },
      {
        title: "Beef fillet",
        price: "18€",
      },
      {
        title: "Kvarner scampi",
        price: "18€",
      },
      {
        title: "Trout",
        price: "15€",
      },
      {
        title: "Sweetbread",
        price: "18€",
      },
      {
        title: "Ravioli JB",
        price: "18€",
      },
      {
        title: "Foie gras",
        price: "20€",
      },
      {
        title: "Fish",
        price: "25€",
      },
      {
        title: "Veal cheeks",
        price: "25€",
      },
      {
        title: "Cheese",
        price: "12€",
      },
      {
        title: "Dessert",
        price: "10€",
      },
    ],
  },
  "six-course-meal": {
    title: "6 Course Meal",
    meals: [
      {
        title: "Couvert",
        price: "",
      },
      {
        title: "Beef file - Eggplant",
        price: "",
      },
      {
        title: "Polenta - Chicory",
        price: "",
      },
      {
        title: "Trout - Brussels sprouts",
        price: "",
      },
      {
        title: "Ravioli JB",
        price: "",
      },
      {
        title: `
        Fish - Vegetables 

        ali - or

        Pig - Shallots`,
        price: "",
      },
      {
        title: "Dessert",
        price: "",
      },
    ],
    price: "65€",
  },
  "eight-course-meal": {
    title: "8 Course Meal",
    meals: [
      {
        title: "Couvert",
        price: "",
      },
      {
        title: "Beef file - Eggplant",
        price: "",
      },
      {
        title: "Sea bass - Turnip - Daschi",
        price: "",
      },
      {
        title: "Langustine - Almonds",
        price: "",
      },
      {
        title: "Polenta - Chicory",
        price: "",
      },
      {
        title: "Ravioli JB",
        price: "",
      },
      {
        title: "Egg - Cracklings",
        price: "",
      },
      {
        title: "Pig - Shallots",
        price: "",
      },
      {
        title: "Dessert",
        price: "",
      },
    ],
    price: "90€",
  },
  "eleven-course-meal": {
    title: "11 Course Meal",
    meals: [
      {
        title: "Couvert",
        price: "",
      },
      {
        title: "Beef file - Eggplant",
        price: "",
      },
      {
        title: "Sea bass - Turnip - Daschi",
        price: "",
      },
      {
        title: "Langustine - Almonds",
        price: "",
      },
      {
        title: "Polenta - Chicory",
        price: "",
      },
      {
        title: "Trout - Brussels sprouts",
        price: "",
      },
      {
        title: "Ravioli JB",
        price: "",
      },
      {
        title: "Egg - Cracklings",
        price: "",
      },
      {
        title: "Fish - Vegetables",
        price: "",
      },
      {
        title: "Pig - Shallots",
        price: "",
      },
      {
        title: "Pre - Dessert",
        price: "",
      },
      {
        title: "Dessert",
        price: "",
      },
    ],
    price: "120€",
  },
  "six-course-meal-vegeterian": {
    title: "6 Course Meal - Vegeterian",
    meals: [
      {
        title: "Couvert",
        price: "",
      },
      {
        title: "Eggplant",
        price: "",
      },
      {
        title: "Turnip - Alge",
        price: "",
      },
      {
        title: "Polenta - Chicory",
        price: "",
      },
      {
        title: "Brussel sprouts",
        price: "",
      },
      {
        title: "Ravioli JB",
        price: "",
      },
      {
        title: "Dessert",
        price: "",
      },
    ],
    price: "55€",
  },
};

const Slider = (props) => {
  return (
    <Swiper
      centeredSlides={true}
      speed={1000}
      loop={true}
      className={classes["slider-container"]}
      navigation
    >
      {Object.keys(menu).map((key, index) => {
        return (
          <SwiperSlide key={index}>
            <MenuList
              key={index}
              title={menu[key].title}
              meals={menu[key].meals}
            />
            <p className="center">{menu[key].price}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
