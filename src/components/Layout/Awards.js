import React from "react";

import classes from "./Awards.module.css";

const awards = {
  restaurant: {
    title: "RESTAURANT",
    awards: [
      {
        year: "2009:",
        award:
          "Confrerie de la Chaine des Rotisseurs - Conseiller Culinaire du Bailliage de Slovenia",
      },
      {
        year: "2010:",
        award:
          "The Spelegrino World 50 Best Restaurant 89. place \nEuropa Gourmet City Guide Der Feinschmecker 3F",
      },
      {
        year: "2013:",
        award:
          "The Daily Meal Best Restaurants in Europe 10. place \nLifetime Achievement Award for Slovenian culinary \nGault-Millau 2 haub, 16 points",
      },
      {
        year: "2014:",
        award: "Life Learning Academia - Ambassador of knowledge",
      },
      {
        year: "2019:",
        award:
          "The World 50 Best Discovery \nGaultMillau 2 haubi, 16,5 points \nThe Slovenian Restaurant Awards - Regional Winner",
      },
    ],
  },
  book: {
    title: "BOOK",
    awards: [
      {
        year: "2008:",
        award:
          "Earth Sea: Tastes of Slovenia, “Most Beautiful Slovenian Book of the Year” Award",
      },
      {
        year: "2009:",
        award:
          "SOF, Grand Prix \nNew York Festival, Bronze for the book Earth Sea: Tastes of Slovenia \nThe Best Cook Book, Paris, Award “Most Beautiful Book of the Region” for Earth Sea: Tastes of Slovenia",
      },
      {
        year: "2019:",
        award:
          "SOF, Grand prix 3x golden for Janez Bratovž - JB Restavracija \nADSTARS Festival - Crystal award \nThe World 50 Best Discovery \nADC*E Awards \nCreativity International Graphic Design and Advertising Awards",
      },
    ],
  },
};

export default function Awards() {
  return (
    <section className={classes.wrapper}>
      <h3>Awards</h3>
      <div>
        <div className={classes.divider_separator}></div>
      </div>
      {Object.keys(awards).map((key) => {
        return (
          <div key={Math.random()}>
            <h4>{awards[key].title}</h4>
            {awards[key].awards.map((award) => {
              return (
                <div className={classes.award} key={Math.random()}>
                  <p>{award.year}</p>
                  <p>{award.award}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
