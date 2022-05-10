import React, { Fragment } from "react";
import Header from "../components/UI/Header";
import Description from "../components/UI/Description";
import Footer from "../components/UI/Footer";
import Slider from "../components/Layout/Slider";

const gift_cards = [
  "Did you ever find yourself wondering what to gift your loved ones for special occasions? Are you running out of time and ideas? Gift giving is a generous trait, but sometimes decisions can be difficult. No need to worry anymore.",
  "At JB Restaurant, we offer an exquisite dining experience suitable for everyone – family, friends or business partners – and for every occasion – holidays, birthdays, business meetings, Christmas or New Year’s Eve Dinners. You decide the value of the gift card while your loved ones can use it whenever it is most suitable to them. Value gift cards can spare you a lot of time and worry when picking out gifts.",
  "You can collect the gift card at our restaurant or we can send it to you by mail. Gift cards are valid for 6 months (from the day of purchase) and cannot be exchanged for money.",
];

const gift_cards_images = [
  "https://jb-slo.com/wp-content/uploads/2019/11/Restaurant-JB-February-2017-69.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restaurant-JB-February-2017-9.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Restaurant-JB-February-2017-2.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Pecena-kurja-prsa-nadevana_5.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Knjiga-slike-045.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Knjiga-slike-016.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/Knjiga-slike-002.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/02_DQH1295.jpg",
];

export default function GiftCardsPage() {
  return (
    <Fragment>
      <Header />
      <Description
        header="Gift Cards"
        btnText="Order Book"
        desc={gift_cards}
        align="left"
        narrow={false}
        show={false}
        img="https://jb-slo.com/wp-content/uploads/2019/11/Darilni-bon.jpg"
      />
      <Slider images={gift_cards_images} autoplay={true} />
      <Footer />
    </Fragment>
  );
}
