import { Component } from 'react'
import ListItem from './ListItem'
import LiveSearch from './LiveSearch'

class List extends Component {
  constructor() {
    super()
    this.state = {
      isSorting: false
    }
  }

  sortingCells(cells) {
    cells.sort((a, b) => {
      if (a < b && !this.state.isSorting) return -1
      if (a > b && !this.state.isSorting) return 1

      if (a < b) return 1
      if (a > b) return -1
      return 0
    })
    this.setState(() => ({ ...this.state, isSorting: !this.state.isSorting }))
  }

  render() {
    const { data, getRandomKey } = this.props

    return (
      <table>
        <thead>
          <tr onClick={() => this.sortingCells(data)}><th>Столбец</th></tr>
        </thead>
        <tbody>
          <tr>
            {data.map(item => <ListItem key={getRandomKey()} text={item} />)}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <LiveSearch data={data} />
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default List
