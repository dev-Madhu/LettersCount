// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeButton = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="text-card">
          <h1 className="heading">Calculate The Letters You Enter</h1>
          <label className="label" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            placeholder="Enter the phrase"
            value={inputPhrase}
            onChange={this.onChangeButton}
            className="text-box"
          />
          <p className="button">No.of letters: {inputPhrase.length}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="poster"
            alt="letters container"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
