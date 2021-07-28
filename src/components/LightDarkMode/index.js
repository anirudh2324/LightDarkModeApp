import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: true}

  onBtnClicked = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }

  render() {
    const {changeMode} = this.state
    const modeClassName = changeMode ? 'dark-mode' : 'light-mode'
    const buttonText = changeMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onBtnClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
