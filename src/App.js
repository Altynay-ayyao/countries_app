import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,population"
      )
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <>
        <div className="flag-wrap">
          {this.state.data.map((country) => (
            <div className="flag-single" key={country.name}>
              <h2>{country.name}</h2>

              <p>
                capital: <span>{country.capital}</span>
              </p>

              <p>
                language(s):{" "}
                {country.languages.map((lang) => (
                  <span>{lang.name} </span>
                ))}
              </p>

              <p>
                population:{" "}
                <span>{country.population.toLocaleString("fr")}</span>
              </p>

              <img src={country.flags.svg} alt="#" />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
