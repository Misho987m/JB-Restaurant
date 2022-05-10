import DatePicker from "sassy-datepicker";

import classes from "./TableReservation.module.css";

export default function TableReservation(props) {
  return (
    <form className={classes.form}>
      <div className={classes.overlay}></div>
      <h3 className={classes.narrow}>{props.heading}</h3>
      {props.heading !== "" && (
        <div className={classes[`divider-left`]}>
          <div className={classes.divider_separator}></div>
        </div>
      )}
      <input type="text" placeholder="NAME *" className={classes.half} />
      <input type="text" placeholder="SURNAME *" className={classes.half} />
      <input type="text" placeholder="PHONE NUMBER *" />
      <input type="email" placeholder="EMAIL *" />
      <input type="number" placeholder="NUMBER OF GUESTS *" />
      <textarea placeholder="ADDITIONAL INFORMATION " />
      <label htmlFor="date">Reservation Date</label>
      <DatePicker className={classes.calendar} />
      <label htmlFor="work_hours">Expected time on arrival:</label>
      <input type="time" id="work_hours" name="work_hours" required></input>
      <div className={classes.working_hours}>
        <p>Mon – Fri: 12 pm – 3 pm / 6 pm – 11 pm </p>
        <p>Sat: 6 pm – 11 pm</p>
      </div>
      <p> Advance payment: 0.00€</p>
      <button className={classes.button}>Book Now</button>
    </form>
  );
}
