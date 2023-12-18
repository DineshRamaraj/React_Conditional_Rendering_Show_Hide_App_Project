// Write your code here
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="name-container">
              <button
                className="button"
                type="button"
                onClick={this.onShowFirstName}
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="names">Joe</p>}
            </div>
            <div className="name-container">
              <button
                className="button"
                type="button"
                onClick={this.onShowLastName}
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="names">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyComponent
