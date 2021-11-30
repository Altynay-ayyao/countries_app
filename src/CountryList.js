import React, { Component } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import "./isLoading.css";

export default class CountryList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,population"
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
                <CountryCard {...country} key={country.name} />
              ))}
          </div>
        </>
      );
    }
  }
}
