import React from 'react';

import freeMoreThan6 from '../helperFunctions/freeMoreThan6'

class FreeTierMoreThan6 extends React.Component {
  render() {
    const { locatedUsers, locatedProperties } = this.props
    const FreeMoreThan6 = freeMoreThan6(locatedProperties, locatedUsers)

    return (
        <div>
          <h2>1.3. All users from Free tier subscription which have more than 6 properties</h2>
          {FreeMoreThan6.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
  }
}

export default FreeTierMoreThan6;
