import React from 'react';

export default class InputFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ guess: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    if (this.props.poolfour.includes(this.state.guess)) {
      const newpool = this.props.poolfour.filter(x => x !== this.state.guess);
      const newfound = this.props.foundfour.concat(this.state.guess);
      this.props.guessRight(newpool, newfound);
    } else if (!this.props.foundfour.includes(this.state.guess)
        && !this.props.wrongfour.includes(this.state.guess)) {
      const newwrong = this.props.wrongfour.concat(this.state.guess);
      this.props.guessWrong(newwrong);
    }
    event.preventDefault();
    this.setState({ guess: '' });
  }

  render() {
    return (
      <div id='enter-guess'>
        <form onSubmit={this.handleSubmit}>
          <input
            id='inputguess'
            type='text'
            value={this.state.guess}
            minLength='4'
            maxLength='4'
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
