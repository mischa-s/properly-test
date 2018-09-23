import React from "react";

const usersFromCompany = require("../../helperFunctions/usersFromCompany");

class ParticularCompany extends React.Component {
  render() {
    const { locatedUsers } = this.props;
    const StompUsers = usersFromCompany(locatedUsers, "stomp");
    const AcmeUsers = usersFromCompany(locatedUsers, "acme");

    return (
      <div>
        <h2>1.2. All users from a particular company</h2>
        <h3>Stomp Users</h3>
        {StompUsers.map(user => <p key={user.id}>{user.name}</p>)}
        <h3>Acme Users</h3>
        {AcmeUsers.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    );
  }
}

export default ParticularCompany;
