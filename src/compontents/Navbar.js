import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

class Navbar extends Component {
  constructor({ data, getRandomKey }) {
    super()
    this.data = data
    this.getRandomKey = getRandomKey
  }

  render() {
    return (
      <ul>
        {this.data.map((_, index) => <li key={this.getRandomKey()}><NavLink to={`/${index + 1}`}>{index + 1}</NavLink></li>)}
      </ul>
    )
  }
}

const mapStateToProps = ({data}) => ({
  data
})

export default connect(mapStateToProps)(Navbar)