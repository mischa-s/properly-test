/*eslint array-callback-return: 0*/

import React from 'react';
import './Home.css';

import fetchItemsCity from '../helperFunctions/fetchItemsCity'

import bookings from '../data/bookings.json'
import properties from '../data/properties.json'
import users from '../data/users.json'

import ParticularCity from './particularCity'
import ParticularCompany from './particularCompany'
import FreeTierMoreThan6 from './freeTierMoreThan6'
import PremiumLessThan4 from './premiumLessThan4'
import UserHasPropertyInDifferentCity from './userHasPropertyInDifferentCity'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locatedProperties: [],
      locatedUsers: [],
    }
  }
  componentDidMount () {
    const locatedProperties = []
    const locatedUsers = []

    properties.map(user => {
      fetchItemsCity(user)
      .then(property => locatedProperties.push(user))
      .then(property => this.setState({
        locatedProperties
      }))
    })

    users.map(user => {
      fetchItemsCity(user)
        .then(user => locatedUsers.push(user))
        .then(user => this.setState({
          locatedUsers
        }))
    })
  }
  render() {
    const { locatedUsers, locatedProperties } = this.state

    return (
      <div className="Home">
        <div className="Home-header">
          <h1>Properly Test</h1>
        </div>
        <ParticularCity locatedUsers={locatedUsers} />
        <ParticularCompany locatedUsers={locatedUsers} />
        <FreeTierMoreThan6 locatedUsers={locatedUsers} locatedProperties={locatedProperties} />
        <PremiumLessThan4 locatedUsers={locatedUsers} locatedProperties={locatedProperties} />
        <UserHasPropertyInDifferentCity locatedUsers={locatedUsers} locatedProperties={locatedProperties} />
      </div>
    );
  }
}

export default Home;
