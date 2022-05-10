import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import HomeScreen from "../components/Layout/HomeScreen";
import SampleMenu from "../components/Layout/SampleMenu";
import TableReservation from "../components/Layout/TableReservation";
import UpcomingEvents from "../components/Layout/UpcomingEvents";
import Description from "../components/UI/Description";
import Footer from "../components/UI/Footer";

const restaurantDescription = [
  "JB Restaurant is the story of the Bratovž family and is built on family love and cooperation. The restaurant is a real gourmet's paradise. Its beginnings can be traced back to the year 1992 when Janez Bratovž, having gained invaluable experience abroad, returned home to Slovenia after 5 years. JB Restaurant with its chef Janez Bratovž was the first Slovenian restaurant to make the World's 50 Best Restaurants.",
  "Janez knows that his creative ideas are not enough and that running a fine restaurant requires a team effort with the whole family chipping in. His son, Tomaž, is chef's right hand in the kitchen, daughter Nina is an Advanced Sommelier in charge of the wine list, customer service and communication between staff, guests and media, and wife Ema, rounding it all up, takes care of the management.",
  "It is no coincidence that JB Restaurant sits at 19 Miklošič Street, designed by the greatest Slovenian architect, Jože Plečnik. Even though it is located right in the middle of the city bustle, it offers a calm and elegant escape where our guests can relax and peacefully experience exquisite cuisine. Clean lines and the perfection of the interior décor are a special experience for many tourists who cannot wait to visit us again.",
];

const literatureDescription = [
  "Janez Bratovž's book is now out. Along with chef's kitchen, it also portrays the origin of first-class local ingredients. The book scours JB's homeland Slovenia and visits his favorite providers.",
  "He chose twenty ingredients in search of which we visited twenty remote destinations. We travelled from the shores of the Adriatic Sea to the Alps and from the Pannonian Basin to the emerald rivers and rolling hills. JB is the main protagonist while one ingredient and its provider are depicted in each chapter.",
  "The book is unique in the category of culinary literature as every copy is exclusive with its uniquely hand-painted cover. You can buy your copy in JB Restaurant and other bookshops in Slovenia.",
];

export default function HomePage() {
  return (
    <Fragment>
      <HomeScreen />
      <Description
        header="JB Restaurant"
        btnText="Restaurant"
        desc={restaurantDescription}
        img="https://jb-slo.com/wp-content/uploads/2019/12/Domov-JB-Restavracija.jpg"
        align="right"
        show={true}
      />
      <SampleMenu />
      <TableReservation heading="Table Reservation" />
      <Description
        header="JB Literature"
        btnText="Literature"
        desc={literatureDescription}
        align="left"
        narrow="true"
        show={true}
        img="https://jb-slo.com/wp-content/uploads/2019/12/Domov-knjiga.jpg"
      />
      <UpcomingEvents />
      <Footer />
    </Fragment>
  );
}
