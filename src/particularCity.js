import React from 'react';

import usersFromCity from '../helperFunctions/usersFromCity'

class ParticularCity extends React.Component {
  render() {
    const { locatedUsers } = this.props
    const AtascaderoUsers = usersFromCity(locatedUsers, 'Atascadero')
    const GjøvikUsers = usersFromCity(locatedUsers, 'Gjøvik')

    return (
        <div>
          <h2>1.1. All users from a particular city</h2>
          <h3>Atascadero Users</h3>
          {AtascaderoUsers.map(user => <p key={user.id}>{user.name}</p>)}
          <h3>Gjøvik Users</h3>
          {GjøvikUsers.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
  }
}

export default ParticularCity;
