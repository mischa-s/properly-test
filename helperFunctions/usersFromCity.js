module.exports = function(users, city) {
  return users.filter(user => user.city == city);
};
