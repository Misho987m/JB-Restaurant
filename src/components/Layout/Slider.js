import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import classes from "./Slider.module.css";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
SwiperCore.use([Navigation, EffectFade, Autoplay]);

const Slider = (props) => {
  return (
    <Swiper
      autoplay={props.autoplay}
      centeredSlides={true}
      speed={1000}
      effect="fade"
      loop={true}
      className={classes["slider-container"]}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      fadeEffect={{
        crossFade: true,
      }}
    >
      {props.images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img className={classes.slide} src={image} alt="Menu item" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
