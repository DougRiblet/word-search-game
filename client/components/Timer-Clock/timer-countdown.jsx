// @flow

import React from 'react';
import TimerFormat from './timer-format';

type Props = {
  tickTock: () => mixed,
  secondsleft: number,
};

export default class TimerCountdown extends React.Component<Props> {
  componentDidMount() {
    this.ticker = setInterval(this.decrementSecs, 1000);
  }

  componentDidUnmount() {
    clearInterval(this.ticker);
  }

  decrementSecs() {
    this.props.tickTock();
  }

  render() {
    return (
      <div>
        <TimerFormat secondsleft={this.props.secondsleft} />
      </div>
    );
  }
}
