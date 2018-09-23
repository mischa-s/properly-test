import React from "react";

const getBookingsLongerOrEqualTo25Days = require("../../helperFunctions/getBookingsLongerOrEqualTo25Days");

class BookingsLongerOrEqualTo25Days extends React.Component {
  render() {
    return (
      <div>
        <h2>2.2. All bookings longer or equal to 25 days</h2>
        {getBookingsLongerOrEqualTo25Days().map(booking => (
          <p key={booking.id + " - " + booking.startDate}>
            {"booking id: " + booking.id + " "}
            {"property id: " + booking.propertyId}
          </p>
        ))}
      </div>
    );
  }
}

export default BookingsLongerOrEqualTo25Days;
