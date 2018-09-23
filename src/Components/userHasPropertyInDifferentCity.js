import React from "react";

const userHasPropertyInDifferentCity = require("../../helperFunctions/userHasPropertyInDifferentCity");

class UsersWithPropertyInDifferentCity extends React.Component {
  render() {
    const { locatedUsers, locatedProperties } = this.props;
    const UsersWithPropertyInDifferentCity = userHasPropertyInDifferentCity(
      locatedProperties,
      locatedUsers
    );

    return (
      <div>
        <h2>
          1.5. All users that live in a different city than their properties
        </h2>
        {UsersWithPropertyInDifferentCity.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default UsersWithPropertyInDifferentCity;
