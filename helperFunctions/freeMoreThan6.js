const { filter, groupBy, map, find } = require("lodash");
const addUsersSubscriptionName = require("./addUsersSubscriptionName");

module.exports = function(properties, users) {
  const grouped = groupBy(properties, "userId");
  const filtered = filter(grouped, item => item.length > 6);
  const usersMoreThan6 = map(filtered, arr => {
    return find(addUsersSubscriptionName(users), user => {
      return user.id == arr[0].userId;
    });
  });
  const freeMoreThan6 = filter(usersMoreThan6, user => {
    if (!user) return;
    return user.subscriptionName == "Free Tier";
  });

  return freeMoreThan6;
};
