import React, { Fragment } from "react";
import Header from "../components/UI/Header";
import Description from "../components/UI/Description";
import Slider from "../components/Layout/Slider";
import Footer from "../components/UI/Footer";

const literature_description = [
  "Janez Bratovž’s book is now out. Along with chef’s kitchen, it also portrays the origin of first-class local ingredients. The book is a culinary journey to the producers of the best ingredients which inspire chef’s creativity displayed with 40 recipes of his masterpieces.",
  "The book is unique in the category of culinary literature as every copy is exclusive with its uniquely hand-painted cover. You can buy your copy in JB Restaurant and bookshops in Slovenia or you can order your copy at info@jb-slo.com.",
  "Contributors:",
  "chef Janez Bratovž",
  "words by Noah Charney",
  "portraits by Matjaž Tančič",
  "food photography by Manca Jevšček",
  "designed by Žare Kerin.",
];

const literature_images = [
  "https://jb-slo.com/wp-content/uploads/2019/11/DSCF1749.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/DSCF1794.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/DSCF1770.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/DSCF1768.jpg",
  "https://jb-slo.com/wp-content/uploads/2019/11/DSCF1767.jpg",
];

const book1_description = [
  "“The book scours JB’s homeland, Slovenia, and visits his favorite producers. He chose twenty ingredients in search of which we visited twenty remote destinations. We travelled from the shores of the Adriatic Sea to the Alps and from the Pannonian Basin to the emerald rivers and rolling hills. We showed Slovenia through ingredients which thrive here, but also hopped over the border to the Croatian part of Istria and the Kvarner Gulf and to the Italian side of the Gorizia Hills.",
  "JB is the book’s main protagonist while one ingredient and its producer are depicted in each chapter. These farmers, cultivators and sellers are the heroes of the story about the search for the best Slovenia has to offer as described by chef’s journeys. I loved being a part of this adventure. My task was to present the producers and ingredients which “forced” me to taste a wealth of excellent dishes.",
  "Highly-decorated Slovenian photographer Matjaž Tančič, who otherwise lives in China, accompanied me on this trip …”",
  "Excerpt from the book",
];

const book2_description = [
  "“Unintentionally, the book title makes us think of two of the four classical elements, namely, of Earth and Water. Where are Air and Fire, you might ask. You can find them in the wide range of dishes created by the Slovenian chef Janez Bratovž. His culinary work stems from the relationship between the four classical elements that have a great symbolic value. They not only correspond to the four human temperaments, but they also symbolize the variety of tastes. Water corresponds to the salty taste, Fire to the bitter, Air to the sour and Earth to the sweet.",
  "Bratovž’s cuisine comprehensively speaks to the individual or the group and is a well thought‑out combination of tastes organized in a strong system of four elements in which the different tastes do not spoil, but rather complement each other. To follow the four classical elements means to understand the great gastronomical or rather culinary syntheses that can give form and instill order to the imaginary.",
  "We, of course, talk about achieving synesthesia of different tastes, smells, colors, shapes etc.”",
  "Excerpt from the book.",
];

export default function LiteraturePage() {
  return (
    <Fragment>
      <Header />
      <Description
        header="Literature"
        btnText="Order Book"
        desc={literature_description}
        align="left"
        side="left"
        narrow={false}
        show={true}
        img="https://jb-slo.com/wp-content/uploads/2019/12/Knjiga.jpg"
      />
      <Slider images={literature_images} autoplay={false} />
      <Description
        header="janez bratovž jb restavracija"
        btnText="Order Book"
        desc={book1_description}
        align="right"
        narrow={false}
        show={false}
        img="https://jb-slo.com/wp-content/uploads/2019/11/Knjiga_2.jpg"
      />
      <Description
        header="zemlja morje 
        okusi iz slovenije"
        btnText="Order Book"
        desc={book2_description}
        align="left"
        side="left"
        narrow={true}
        show={false}
        img="https://jb-slo.com/wp-content/uploads/2019/11/Zemlja-in-more.jpg"
      />
      <Footer />
    </Fragment>
  );
}
