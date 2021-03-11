import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  constructor({ data }) {
    super()
    this.data = data
  }

  render() {
    return (
      <>
        <ul>
          {this.data.map((_, index) => <li><NavLink to={`/${index+1}`}>{index+1}</NavLink></li>)}
        </ul>
      </>
    )
  }
}

export default Navbar