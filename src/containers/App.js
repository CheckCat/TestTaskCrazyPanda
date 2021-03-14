import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import List from '../compontents/List'
import Navbar from './Navbar'
import LiveSearch from './LiveSearch'
class App extends Component {
  constructor({ data, indexOfPage }) {
    super()
    this.data = data
    this.indexOfPage = indexOfPage
  }

  shouldComponentUpdate({ data }) {
    this.data = data
    return true
  }

  getRandomKey() {
    return Math.random()
  }

  render() {
    return (
      <BrowserRouter>
        <h1>Table</h1>
        <Switch>
          <Route
            render={() => <List dataOfPage={this.data[0]} getRandomKey={this.getRandomKey} />}
            path='/' exact />
          {this.data.map((item, index) => {
            if (!index) return null;
            return <Route
              key={this.getRandomKey()}
              render={() => <List dataOfPage={item} getRandomKey={this.getRandomKey} />}
              path={`/${index}`} />
          })}
        </Switch>
        <LiveSearch dataOfPage={this.data[this.indexOfPage]} />
        <Navbar getRandomKey={this.getRandomKey} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ data, indexOfPage }) => ({
  data,
  indexOfPage
})

export default connect(mapStateToProps)(App);
