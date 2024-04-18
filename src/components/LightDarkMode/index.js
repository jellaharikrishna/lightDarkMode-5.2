import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    modeText: 'Light Mode',
    cardClassName: 'card1',
    headingClassName: 'heading1',
  }

  isBtnClicked = () => {
    const {modeText} = this.state
    if (modeText === 'Light Mode') {
      this.setState(() => ({
        modeText: 'Dark Mode',
        cardClassName: 'card2',
        headingClassName: 'heading2',
      }))
    } else {
      this.setState(() => ({
        modeText: 'Light Mode',
        cardClassName: 'card1',
        headingClassName: 'heading1',
      }))
    }
  }

  render() {
    const {modeText, cardClassName, headingClassName} = this.state
    return (
      <div className="container">
        <div className={cardClassName}>
          <h1 className={headingClassName}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.isBtnClicked}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
