const { filter, groupBy, map, find } = require("lodash");
const addUsersSubscriptionName = require("./addUsersSubscriptionName");

module.exports = function(properties, users) {
  // Group properties by user Id
  const grouped = groupBy(properties, "userId");

  // Get users with more than 6 properties from Free Tier
  const usersMoreThan6 = map(grouped, userProperties => {
    // Early return if user has less than 6 properties
    if (!(userProperties.length > 6)) return false;

    // Find the user for the active properties and only return the user if they are Free Tier
    return find(addUsersSubscriptionName(users), user => {
      return (
        user.id == userProperties[0].userId &&
        user.subscriptionName == "Free Tier"
      );
    });
  });
  // remove false's from array
  return filter(usersMoreThan6, user => user)
};
