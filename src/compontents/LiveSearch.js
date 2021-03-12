import { Component } from 'react'
import {connect} from 'react-redux'
import {filter, updateTextareaValue} from '../redux/actions'

class LiveSearch extends Component {
  constructor({data, textareaValue, filter, updateTextareaValue}) {
    super()
    this.instanceData = data
    this.dataIsNotFiltered = true
    this.textareaValue = textareaValue
    this.updateTextareaValue = updateTextareaValue
    this.indexOfPage = window.location.pathname.slice(1)-1
    this.data = data
    this.filter = filter
  }
  
  toSearch(ev) {
    this.updateTextareaValue(ev.target.value)
    this.data.length && this.filter(this.data.filter(item => item.search(this.textareaValue) !== -1), this.indexOfPage)
  }

  render() {
    return (
      <textarea defaultValue={this.textareaValue} onInput={this.toSearch.bind(this)}>
      </textarea>
    )
  }
}

const mapStateToProps = ({textareaValue}) => ({textareaValue})

const mapDispatchToProps = {
  filter,
  updateTextareaValue
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveSearch)