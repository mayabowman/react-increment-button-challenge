import React from 'react'
import IncrementButton from './increment-button'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0
      }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className='parent'>
          <div className='count'>
              Number of clicks: {this.state.count}
          </div>
          <IncrementButton incrementClick={() => this.handleClick()}/>
      </div>
    )
  }
}

export default App
