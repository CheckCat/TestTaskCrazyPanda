import { Component } from 'react'
import ListItem from './ListItem'
import LiveSearch from './LiveSearch'

class List extends Component {
  constructor({ data }) {
    super()
    this.data = data
    console.log(this.data)
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
    const { data, getRandomKey } = this.props

    return (
      <>
        <table>
          <thead>
            <tr onClick={() => this.sortingCells(data)}><th>Столбец</th></tr>
          </thead>
          <tbody>
            <tr>
              {data.map(item => <ListItem key={getRandomKey()} text={item} />)}
            </tr>
          </tbody>

        </table>
        <LiveSearch data={this.data} />
      </>
    )
  }
}

export default List
