import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";

const CountriCard = ({
  name,
  capital,
  languages,
  currencies,
  population,
  flags,
}) => {
  return (
    <Link to={capital}>
      <div className="country" key={name}>
        <h2> {name}</h2> <h3>{capital}</h3>
        <img src={flags.png} alt={name} />
        <div className="cardContent">
          <p>
            Language(s):
            {languages.map((lang, i) => (
              <span key={i}> {lang.name} </span>
            ))}
          </p>
          <p>
            Currencies:
            {currencies.map((mon, i) => (
              <span key={i}>
                {mon.name} - {mon.symbol}
              </span>
            ))}
          </p>
          <p>
            Population:
            <span className="low">{number.formatNumber(population)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountriCard;
