const { filter, groupBy, map, find } = require("lodash");
const addUsersSubscriptionName = require("./addUsersSubscriptionName");

module.exports = function(properties, users, subscriptions) {
  // Group properties by user Id
  const grouped = groupBy(properties, "userId");

  // Get users with less than 4 properties from Premium
  const premiumUsersLessThan4Props = map(grouped, userProperties => {
    // Early return if user has less than 6 properties
    if (!(userProperties.length < 4)) return false;

    // Find the user for the active properties and only return the user if they are Premium
    return find(addUsersSubscriptionName(users), user => {
      return (
        user.id == userProperties[0].userId &&
        user.subscriptionName == "Premium"
      );
    });
  });

  // remove false's from array
  return filter(premiumUsersLessThan4Props, user => user);
};
