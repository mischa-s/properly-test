const differenceInDays = require("date-fns/difference_in_days");
const bookings = require("../data/bookings.json");

module.exports = function() {
  return bookings.filter(booking => {
    return differenceInDays(booking.endDate, booking.startDate) <= 3;
  });
};
