module.exports = function (properties, users) {
  return matchingUsers = users.filter(user => {
    const matchFound = properties.find(property => {
      return property.userId == user.id && property.city != user.city
    })
    return matchFound ? user : false
  })
}
