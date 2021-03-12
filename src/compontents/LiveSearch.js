import { Component } from 'react'

class LiveSearch extends Component {
  constructor({data}) {
    super()
    this.data = data
    this.state = {
      data: this.data
    }
  }

  toSearch({target}) {
    console.log(this.data)
    this.setState(function () {
      return {...this.state, data: this.data.filter(item => item.search(target.value) !== -1)}
    })
  }

  render() {
    return (
      <textarea onInput={ev => this.toSearch(ev)}>
      </textarea>
    )
  }
}

export default LiveSearch