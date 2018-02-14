import React from 'react';

export default class InputFour extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'guess': ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit (event) {
    if ()
    event.preventDefault();
  }

  render () {
    return (
      <div id='enter-guess'>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.guess}
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
