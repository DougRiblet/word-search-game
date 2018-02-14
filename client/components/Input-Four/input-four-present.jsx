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
    if (this.props.poolfour.includes(this.state.guess)) {
      let newpool = this.props.poolfour.filter(x => x !== this.state.guess);
      let newfound = this.props.foundfour.concat(this.state.guess);
      this.props.guessRight(newpool, newfound);
    }
    event.preventDefault();
  }

  render () {
    return (
      <div id='enter-guess'>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.guess}
            minlength='4'
            maxlength='4'
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
