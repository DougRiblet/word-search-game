// @flow

import React from 'react';
import TimerFormat from './timer-format';

type Props = {
  tick2: () => mixed,
  secondsleft: number,
};

export default class TimerCountdown extends React.Component<Props> {
  componentDidMount() {
    this.tickerID = setInterval(() => {
      this.props.tick2();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickerID);
  }

  // eslint-disable-next-line no-undef
  tickerID: IntervalID;

  render() {
    return (
      <div>
        <TimerFormat secondsleft={this.props.secondsleft} />
      </div>
    );
  }
}
