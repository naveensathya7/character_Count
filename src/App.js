import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {wordsList: [], inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  updateList = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const wordObject = {id: v4(), word: inputValue}
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, wordObject],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, wordsList} = this.state
    console.log(wordsList)
    const noWords = wordsList.length === 0
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="words-display">
            <div className="words-display-top-section">
              <h1 className="top-section-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {noWords ? (
              <img
                className="no-words-image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="words-list">
                {wordsList.map(each => (
                  <li key={each.id} className="list-item">
                    <p className="word-name">
                      {each.word}:{each.word.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="words-input">
            <h1 className="input-heading">Character Counter</h1>
            <div>
              <form onSubmit={this.updateList}>
                <div className="input-container">
                  <input
                    placeholder="Enter the Characters here"
                    className="input-box"
                    type="text"
                    value={inputValue}
                    onChange={this.onChangeInput}
                  />
                  <button
                    onClick={this.updateList}
                    type="submit"
                    className="add-btn"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
