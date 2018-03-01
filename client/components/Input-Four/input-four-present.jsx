// @flow

import React from 'react';

type Props = {
  allownew: boolean,
  poolfour: Array<string>,
  foundfour: Array<string>,
  wrongfour: Array<string>,
  guessRight: (Array<string>, Array<string>) => mixed,
  guessWrong: (Array<string>) => mixed,
};

type State = {
  guess: string,
};

export default class InputFour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      guess: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.allownew && prevProps.allownew) {
      this.textInput.focus();
    }
  }

  handleSubmit: Function;
  handleChange: Function;

  // eslint-disable-next-line no-undef
  handleChange(event: SyntheticInputEvent<*>) {
    this.setState({ guess: event.target.value.toUpperCase() });
  }

  // eslint-disable-next-line no-undef
  handleSubmit(event: SyntheticInputEvent<*>) {
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
      <div id='input-four'>
        <form onSubmit={this.handleSubmit}>
          <input
            id='inputguess'
            type='text'
            ref={(input) => { this.textInput = input; }}
            disabled={this.props.allownew}
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
