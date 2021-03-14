import { Component } from 'react'

class ListItem extends Component {
  constructor({ textOfCell }) {
    super()
    this.textOfCell = textOfCell
  }

  render() {
    return (
      <td>{this.textOfCell}</td>
    )
  }
}

export default ListItem