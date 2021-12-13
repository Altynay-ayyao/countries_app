import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";

const CountryCard = ({
  capital,
  name,
  languages,
  currencies,
  population,
  flags,
  region,
}) => {
  return (
    <div className="country" key={name}>
      <Link to={capital}>
        <div className="title">
          <h2>{name}</h2>
          <h3>{capital}</h3>
        </div>
        <img src={flags.png} alt={name} />
        <div className="cardContent">
          <p>
            Language(s):{" "}
            {languages.map((lang, i) => (
              <span key={i}>{lang.name} </span>
            ))}
          </p>
          <p>
            Currencies:{" "}
            {currencies.map((mon, i) => (
              <span key={i}>
                {mon.name} - {mon.symbol}
              </span>
            ))}
          </p>
          <p>
            Continental affiliation: <span>{region}</span>
          </p>
          <p>
            Population: <span> {number.formatNumber(population)} </span>
          </p>
        </div>
      </Link>
    </div>
  );
};
export default CountryCard;
