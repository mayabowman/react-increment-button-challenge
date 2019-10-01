import React from 'react'

class IncrementButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <button onClick={this.clickHandler}>Increment</button>
        )
    }
    
}

export default IncrementButton
