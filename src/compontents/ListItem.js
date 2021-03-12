import { Component } from 'react'

class ListItem extends Component {
  constructor({ text }) {
    super()
    this.text = text
  }

  render() {
    return (
      <td>{this.text}</td>
    )
  }
}

export default ListItem