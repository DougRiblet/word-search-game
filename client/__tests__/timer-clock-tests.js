import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TimerClock from '../components/Timer-Clock/timer-clock-present';

describe('Timer Clock', () => {
  test('Snapshot with timer off', () => {
    const TimerClock_off_tree = renderer.create(
      <TimerClock
        tickTock={() => tickTock()}
        endGame={() => endGame()}
        timer={false}
        isclicking={false}
        secondsleft={0}
      />
    ).toJSON();
    expect(TimerClock_off_tree).toMatchSnapshot();
  });

  test('renders without crashing with timer off', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimerClock
      tickTock={() => tickTock()}
      endGame={() => endGame()}
      timer={false}
      isclicking={false}
      secondsleft={0}
    />, div);
  });

});
