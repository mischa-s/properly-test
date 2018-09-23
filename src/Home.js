/*eslint array-callback-return: 0*/
import React from "react";
import "./Home.css";

import ParticularCity from "./Components/particularCity";
import ParticularCompany from "./Components/particularCompany";
import FreeTierMoreThan6 from "./Components/freeTierMoreThan6";
import PremiumLessThan4 from "./Components/premiumLessThan4";
import UserHasPropertyInDifferentCity from "./Components/userHasPropertyInDifferentCity";
import BookingsLongerOrEqualTo25Days from "./Components/bookingsLongerOrEqualTo25";
import BookingsShorterOrEqualTo3Days from "./Components/bookingsShorterOrEqualTo3";
import BookingIntervalLessOrEqualTo1 from "./Components/bookingIntervalLessOrEqualTo1";
import LimitUsersFromCityToPremium from "./Components/limitUsersFromCityToPremium";

const properties = require("../data/properties.json");
const users = require("../data/users.json");

const fetchItemsCity = require("../helperFunctions/fetchItemsCity");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locatedProperties: [],
      locatedUsers: []
    };
  }
  componentDidMount() {
    const locatedProperties = [];
    const locatedUsers = [];

    properties.map(user => {
      fetchItemsCity(user)
        .then(property => locatedProperties.push(user))
        .then(property =>
          this.setState({
            locatedProperties
          })
        );
    });

    users.map(user => {
      fetchItemsCity(user)
        .then(user => locatedUsers.push(user))
        .then(user =>
          this.setState({
            locatedUsers
          })
        );
    });
  }
  render() {
    const { locatedUsers, locatedProperties } = this.state;

    return (
      <div className="Home">
        <div className="Home-header">
          <h1>Properly Test</h1>
        </div>
        <ParticularCity locatedUsers={locatedUsers} />
        <ParticularCompany locatedUsers={locatedUsers} />
        <FreeTierMoreThan6
          locatedUsers={locatedUsers}
          locatedProperties={locatedProperties}
        />
        <PremiumLessThan4
          locatedUsers={locatedUsers}
          locatedProperties={locatedProperties}
        />
        <UserHasPropertyInDifferentCity
          locatedUsers={locatedUsers}
          locatedProperties={locatedProperties}
        />
        <BookingsLongerOrEqualTo25Days />
        <BookingsShorterOrEqualTo3Days />
        <BookingIntervalLessOrEqualTo1 />
        <LimitUsersFromCityToPremium locatedUsers={locatedUsers} />
      </div>
    );
  }
}

export default Home;
