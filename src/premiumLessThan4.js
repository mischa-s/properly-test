import React from 'react';

import premiumLessThan4Props from '../helperFunctions/premiumLessThan4Props'

class PremiumLessThan4 extends React.Component {
  render() {
    const { locatedUsers, locatedProperties } = this.props
    const PremiumLessThan4Props = premiumLessThan4Props(locatedProperties, locatedUsers)

    return (
        <div>
          <h2>1.4. All users from Premium tier subscription which have less than 4 properties</h2>
          {PremiumLessThan4Props.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
  }
}

export default PremiumLessThan4;
