import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateIndexOfPage } from '../redux/actions'

class Navbar extends Component {
  constructor({ data, updateIndexOfPage, getRandomKey }) {
    super()
    this.data = data
    this.updateIndexOfPage = updateIndexOfPage
    this.getRandomKey = getRandomKey
  }

  render() {
    return (
      <ul>
        <li onClick={() => { document.querySelector('textarea').value = ""; this.updateIndexOfPage() }} key={this.getRandomKey()}><NavLink to={'/'} exact>1</NavLink></li>
        {this.data.map((_, index) => {
          if (!index) return null;
          return <li onClick={() => { document.querySelector('textarea').value = ""; this.updateIndexOfPage() }} key={this.getRandomKey()}><NavLink to={`/${index}`}>{index + 1}</NavLink></li>
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  data
})

const mapDispatchToProps = {
  updateIndexOfPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)