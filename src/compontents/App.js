import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { validateData } from './validateData'
import List from './List'
import Navbar from './Navbar'

class App extends Component {
  constructor({data}) {
    super()
    this.data = data
    console.log(this.data)
  }

  getRandomKey() {
    return Math.random()
  }

  render() {
    return (
      <BrowserRouter>
        <h1>hasda</h1>
        <Switch>
          {this.data.map((item, index) =>
            <Route
              key={this.getRandomKey()}
              render={() => <List data={item} getRandomKey={this.getRandomKey} />}
              path={`/${index + 1}`} />)
          }
        </Switch>
        <Navbar getRandomKey={this.getRandomKey} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ data }) => {
return ({
  data
})}

export default connect(mapStateToProps)(App);
