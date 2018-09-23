const subscriptions = require("../data/subscriptions.json");

module.exports = users => {
  return users.map(user => {
    const userSubscription = subscriptions.find(subscription => {
      return subscription.id == user.subscriptionId;
    });
    user.subscriptionName = userSubscription.name;
    return user;
  });
};
