import React from "react";

const limitUsersFromGivenCityToPremiumSubscription = require("../../helperFunctions/limitUsersFromGivenCityToPremiumSubscription");
const addUsersSubscriptionName = require("../../helperFunctions/addUsersSubscriptionName");

class LimitUsersFromCityToPremium extends React.Component {
  render() {
    const { locatedUsers } = this.props;

    return (
      <div>
        <h2>
          3.1. How would you identify users who live in any given city and make it mandatory that users from that city are only allowed to have a premium subscription?
        </h2>
        <h3>Auckland Users Pay Premium!</h3>
        {addUsersSubscriptionName(
          limitUsersFromGivenCityToPremiumSubscription(locatedUsers, "Auckland")
        ).map(user => (
          <p key={user.id}>
            {user.name} - {user.city} - {user.subscriptionName}
          </p>
        ))}
      </div>
    );
  }
}

export default LimitUsersFromCityToPremium;
