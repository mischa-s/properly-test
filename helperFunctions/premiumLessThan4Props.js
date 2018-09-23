const { filter, groupBy, map, find } = require("lodash");
const addUsersSubscriptionName = require("./addUsersSubscriptionName");

module.exports = function(properties, users, subscriptions) {
  const grouped = groupBy(properties, "userId");
  const filtered = filter(grouped, item => item.length < 4);

  const usersLessThan4 = map(filtered, arr => {
    return find(addUsersSubscriptionName(users), user => {
      return user.id == arr[0].userId;
    });
  });
  const premiumLessThan4Props = filter(usersLessThan4, user => {
    if (!user) return;
    return user.subscriptionName == "Premium";
  });

  return premiumLessThan4Props;
};
