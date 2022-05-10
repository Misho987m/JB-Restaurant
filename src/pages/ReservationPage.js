import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import TableReservation from "../components/Layout/TableReservation";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

import classes from "./ReservationPage.module.css";

export default function ReservationPage() {
  return (
    <Fragment>
      <Header />
      <section className={classes.reservation}>
        <div>
          <h2 className={classes.heading}>Reservation</h2>
          <div className={classes[`divider-left`]}>
            <div className={classes.divider_separator}></div>
          </div>
          <p>
            Bookings for the same day can not be made online. If you would like
            to book a table for today or for a larger group, please contact us
            on info@jb-slo.com or +386 (0)1 430 70 70.{" "}
          </p>
          <p>We are looking forward to seeing you!</p>
        </div>
        <TableReservation heading="" />
        <div className={classes.cancel}>
          <p>
            * In case of cancellation 7 days before the booked date, we will
            refund the entire advance payment.{" "}
          </p>
          <p>
            ** In case of cancellation 2 days before the date, we will refund
            50% of the advance payment.{" "}
          </p>
          <p>
            *** In case of cancellation less than 2 days before the date, the
            advance payment will not be refunded.
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
