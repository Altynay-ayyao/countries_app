import React, { Component } from "react";
import axios from "axios";
import "./isLoading.css";
import CountryCard from "./CountryCard";
import { Outlet } from "react-router-dom";

class CountriesList extends Component {
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

  searchHandler(e) {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <div className="countries">
          <Outlet />
          <input
            type="text"
            name="search"
            onChange={this.searchHandler.bind(this)}
          />
          {this.state.data
            .filter((c) => {
              return c.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((c) => (
              <CountryCard {...c} key={c.name} />
            ))}
        </div>
      );
    }
  }
}

export default CountriesList;
