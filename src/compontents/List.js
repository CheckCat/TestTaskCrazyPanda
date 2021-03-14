import { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  constructor({ dataOfPage }) {
    super()
    this.dataOfPage = dataOfPage
    this.state = {
      isAscendingOrder: false
    }
  }

  sortingCells(cells) {
    cells.sort((a, b) => {
      if (a < b && !this.state.isAscendingOrder) return -1
      if (a > b && !this.state.isAscendingOrder) return 1

      if (a < b) return 1
      if (a > b) return -1
      return 0
    })
    this.setState(() => ({ ...this.state, isAscendingOrder: !this.state.isAscendingOrder }))
  }

  render() {
    const { dataOfPage, getRandomKey } = this.props

    return (
      <table>
        <thead>
          <tr onClick={() => this.sortingCells(dataOfPage)}><th>Столбец</th></tr>
        </thead>
        <tbody>
          <tr>
            {dataOfPage.map(item => <ListItem key={getRandomKey()} textOfCell={item} />)}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default List
