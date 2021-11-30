import React, { Component } from "react";
import axios from "axios";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    return <div>Right now it is degrees in {this.props.params.name}</div>;
  } //this.props.params.name:params object is reading what the parameter of the hook
}

export default CountrySingle;
