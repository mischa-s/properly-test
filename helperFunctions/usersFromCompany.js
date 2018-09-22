module.exports = function (users, company) {
 return users.filter(user => {
   const { email } = user

   const userCompany = email.substring(email.lastIndexOf("@") +1, email.indexOf(".", email.lastIndexOf("@")))

   return userCompany == company
 })
}
