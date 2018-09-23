module.exports = function(users, city) {
  const limitedUsers = JSON.parse(JSON.stringify(users));

  return limitedUsers.map(user => {
    if (!(user.city == city)) return user;

    if (user.subscriptionId != "sub03" || user.subscriptionId != "sub04") {
      user.subscriptionId = "sub03";
    }

    return user;
  });
};
