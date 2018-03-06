import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ToggleTimer from '../components/Toggle-Timer/toggle-timer-present';

describe('New Game', () => {
  test('Snapshot', () => {
    const dummy = jest.fn();
    const ToggleTimer_tree = renderer.create(
      <ToggleTimer toggleTimer={dummy} allownew={true} timer={false} />
    ).toJSON();
    expect(ToggleTimer_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    const dummy = jest.fn();
    ReactDOM.render(<ToggleTimer toggleTimer={dummy} allownew={true} timer={false} />, div);
  });

});
