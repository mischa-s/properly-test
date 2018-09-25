module.exports = function(users, city) {
  return users.map(user => {
    if (!(user.city == city)) return user;

    if (user.subscriptionId != "sub03" || user.subscriptionId != "sub04") {
      return Object.assign({}, user, {
        subscriptionId: "sub03"
      });
    }
    return user;
  });
};
