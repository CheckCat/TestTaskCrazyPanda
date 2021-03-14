import { Component } from 'react'
import { connect } from 'react-redux'
import { filter } from '../redux/actions'

class LiveSearch extends Component {
  constructor({ dataOfPage, filter }) {
    super()
    this.dataOfPage = dataOfPage
    this.filter = filter
  }

  toSearch({ target }) {
    this.filter(this.dataOfPage.filter(item => item.search(target.value) !== -1))
  }

  render() {
    return (
      <textarea onClick={this.toSearch.bind(this)} onInput={this.toSearch.bind(this)}>
      </textarea>
    )
  }
}

const mapDispatchToProps = {
  filter
}

export default connect(() => ({}), mapDispatchToProps)(LiveSearch)