import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    result: 0,
    heads: 0,
    tails: 0,
    total: 0,
  }

  buttonEl = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({result: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {result, heads, tails, total} = this.state
    return (
      <div className="mainContainer">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>heads (or) Tails</p>

          {result === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="name"
              className="image"
            />
          )}

          <button type="button" className="button" onClick={this.buttonEl}>
            Toss Coin
          </button>
          <div className="tails">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
