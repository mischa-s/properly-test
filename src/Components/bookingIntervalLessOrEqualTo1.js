import React from "react";

const getPropertiesWithBookingIntervalLessThanOrEqual1 = require("../../helperFunctions/getPropertiesWithBookingIntervalLessThanOrEqual1");

class BookingIntervalLessOrEqualTo1 extends React.Component {
  render() {
    return (
      <div>
        <h2>
          2.4. All Properties with Bookings with 1 day or less between bookings
        </h2>
        {getPropertiesWithBookingIntervalLessThanOrEqual1().map(property => {
          return property ? <p key={property.id}>{property.title}</p> : null;
        })}
      </div>
    );
  }
}

export default BookingIntervalLessOrEqualTo1;
