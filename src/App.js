import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";
import "./isLoading.css";

class App extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }

  searchHandler = (e) => {
    this.setState({ searchInput: e.target.value });
    console.log(this.state.data);
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <>
          <div className="flag-wrap">
            <input type="text" name="search" onChange={this.searchHandler} />
            {this.state.data
              .filter((c) => {
                return c.name
                  .toLowerCase()
                  .includes(this.state.searchInput.toLowerCase());
              })
              .map((country) => (
                <div className="flag-single" key={country.name}>
                  <h2>{country.name}</h2>

                  <p>
                    capital: <span>{country.capital}</span>
                  </p>

                  <p>
                    language(s):{" "}
                    {country.languages.map((lang, i) => (
                      <span key={i}>{lang.name} </span>
                    ))}
                  </p>

                  <p>
                    population:
                    <span className="population">
                      {country.population.toLocaleString("fr")}
                    </span>
                  </p>
                  <p>
                    Currencies:
                    {country.currencies.map((mon, i) => (
                      <span key={i}>
                        {mon.name} - {mon.symbol}
                      </span>
                    ))}
                  </p>

                  <img src={country.flags.svg} alt="#" />
                </div>
              ))}
          </div>
        </>
      );
    }
  }
}

export default App;
