import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ToggleTimer from '../components/Toggle-Timer/toggle-timer-present';

describe('New Game', () => {
  test('Snapshot', () => {
    const ToggleTimer_tree = renderer.create(
      <ToggleTimer toggleTimer={() => toggleTimer()} allownew={true} timer={false} />
    ).toJSON();
    expect(ToggleTimer_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    const dummy = jest.fn();
    ReactDOM.render(<ToggleTimer toggleTimer={dummy} allownew={true} timer={false} />, div);
  });

  test('calls toggleTimer when checkbox is clicked', () => {
    const toggleTimer = jest.fn();
    const wrapper = shallow(
      <ToggleTimer toggleTimer={toggleTimer} allownew={true} timer={false} />
    );
    const checkbox = wrapper.find('#timer-choice');
    checkbox.simulate('change', { target: { checked: false } });
    expect(toggleTimer).toHaveBeenCalled();
  });

});
