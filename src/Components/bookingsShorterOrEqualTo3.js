import React from "react";

const getBookingsShorterOrEqualTo3Days = require("../../helperFunctions/getBookingsShorterOrEqualTo3");

class BookingsShorterOrEqualTo3Days extends React.Component {
  render() {
    return (
      <div>
        <h2>2.3. All bookings shorter or equal to 3 days.</h2>
        {getBookingsShorterOrEqualTo3Days().map(booking => (
          <p key={booking.id + " - " + booking.startDate}>
            {"booking id: " + booking.id + " "}
            {"property id: " + booking.propertyId}
          </p>
        ))}
      </div>
    );
  }
}

export default BookingsShorterOrEqualTo3Days;
