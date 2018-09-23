const differenceInDays = require("date-fns/difference_in_days");
const bookings = require("../data/bookings.json");
const properties = require("../data/properties.json");
const { sortBy, groupBy, map, filter, find } = require("lodash");

module.exports = function() {
  // get all of a properties bookings
  const grouped = groupBy(bookings, "propertyId");

  // sort them by start date
  const sorted = map(grouped, property => {
    return sortBy(property, "startDate");
  });

  // compare the end date of the active booking with the start date of next
  const propertiesWithLessThan1Day = map(sorted, propertyBookings => {
    const bookingsWithLessThanOneDayBetweenFound = find(
      propertyBookings,
      (booking, index) => {
        return propertyBookings[index + 1]
          ? differenceInDays(
              propertyBookings[index + 1].startDate,
              booking.endDate
            ) <= 1
          : false;
      }
    );

    return bookingsWithLessThanOneDayBetweenFound
      ? find(
          properties,
          property => property.id == propertyBookings[0].propertyId
        )
      : false;
  });
  return propertiesWithLessThan1Day;
};
