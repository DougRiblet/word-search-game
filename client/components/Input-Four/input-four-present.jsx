import React from 'react';

export default class InputFour extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'guess': ''
    }
    this.handleGuess = this.handleGuess.bind(this)
  }

  handleChange (event) {
    this.setState({'guess': event.target.value})
  }

  render () {
    return (
      <div id='enter-guess'>
      </div>
    )
  }
}
