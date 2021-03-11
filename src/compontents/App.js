import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import List from './List'
import Navbar from './Navbar'
import data from '../data.json'

class App extends Component {
  constructor() {
    super()
    this.data = data.reduce((accum, item, index) => {
      if(!(index%50)) accum.push([])
      accum[~~(index/50)].push(item)
      return accum
    }, [])
  }

  getRandomKey() {
    return Math.random()
  }

  render() {
    return (
      <>
        <h1>hasda</h1>
        <BrowserRouter>
          <Switch>
            {this.data.map((item, index)=>
              <Route 
              key={this.getRandomKey()}
              render={() => <List data={item} getRandomKey={this.getRandomKey} />}
              path={`/${index+1}`}/>)
            }
          </Switch>
          <Navbar data={this.data} />
        </BrowserRouter>
        
      </>
    )
  }
}

export default App;
