// @flow

import React from 'react';
import TimerFormat from './timer-format';

type Props = {
  tickTock: () => mixed,
  secondsleft: number,
};

export default class TimerCountdown extends React.Component<Props> {
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.props.tick2();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  render() {
    return (
      <div>
        <TimerFormat secondsleft={this.props.secondsleft} />
      </div>
    );
  }
}
