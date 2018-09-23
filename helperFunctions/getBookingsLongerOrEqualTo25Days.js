const differenceInDays = require("date-fns/difference_in_days");
const bookings = require("../data/bookings.json");
const { sortBy } = require("lodash");

module.exports = function() {
  return sortBy(
    bookings.filter(booking => {
      return differenceInDays(booking.endDate, booking.startDate) >= 25;
    }),
    "id"
  );
};
