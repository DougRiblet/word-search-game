import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TimerFormat from '../components/Timer-Clock/timer-format';

describe('Timer Clock', () => {
  test('Snapshot with timer off', () => {
    const TimerFormat_tree = renderer.create(
      <TimerFormat secondsleft={140} />
    ).toJSON();
    expect(TimerFormat_tree).toMatchSnapshot();
  });

  test('renders without crashing with timer off', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimerFormat secondsleft={140} />, div);
  });

});
