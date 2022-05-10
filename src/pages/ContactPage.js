import React, { Fragment } from "react";
import Contacts from "../components/Layout/Contacts";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

export default function ContactPage() {
  return (
    <Fragment>
      <Header />
      <Contacts />
      <Footer />
    </Fragment>
  );
}
