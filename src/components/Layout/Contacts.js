import React from "react";

import classes from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={classes.wrapper}>
      <div>
        <h3>Contact</h3>
        <div>
          <div className={classes.divider_separator}></div>
        </div>
      </div>
      <div>
        <p>Experience a culinary journey in the city center.</p>
        <h3>Address</h3>
        <address>
          JB Restavracija Miklošičeva 19 1000 Ljubljana Slovenia
        </address>
        <div>
          <h3>Google Maps</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.6875415665745!2d14.5082037!3d46.0573303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329c169e13f1%3A0x15804da30ecc9ccf!2zTWlrbG_FoWnEjWV2YSBjZXN0YSAxOSwgMTAwMCBManVibGphbmEsINCh0LvQvtCy0LXQvdC40Y8!5e0!3m2!1sbg!2sbg!4v1652098305707!5m2!1sbg!2sbg"
            width="100%"
            height="450"
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <div>
          <h3>CONTACT / RESERVATION</h3>
          <p>+386 1 430 70 70</p>
          <p>info@jb-slo.com</p>
        </div>
        <div>
          <h3>Opening Hours </h3>
          <p>MONDAY – FRIDAY: 12 pm – 3 pm / 6 pm – 11 pm</p>
          <p>SATURDAY: 6 pm – 11 pm</p>
          <p>SUNDAYS AND HOLIDAYS: CLOSED</p>
        </div>
        <div>
          <h3>Follow us</h3>
          <a href="https://www.facebook.com/restavracijaJB/">Facebook</a>
          <a href="https://www.instagram.com/jbrestavracija/">Instagram</a>
        </div>
      </div>
    </section>
  );
}
