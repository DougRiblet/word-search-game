// @flow

import React from 'react';
import TimerFormat from './timer-format';

type Props = {
  tick2: () => mixed,
  secondsleft: number,
};

export default class TimerCountdown extends React.Component<Props> {
  tickerID: IntervalID;
  componentDidMount() {
    this.tickerID = setInterval(() => {
      this.props.tick2();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickerID);
  }

  render() {
    return (
      <div>
        <TimerFormat secondsleft={this.props.secondsleft} />
      </div>
    );
  }
}
