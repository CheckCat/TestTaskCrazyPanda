import { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super()
  }

  render() {
    const { data, getRandomKey } = this.props

    return (
      <>
        <table>
          <tbody>
            <tr>
              {data.map(item => <ListItem key={getRandomKey()} text={item} />)}
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default List
