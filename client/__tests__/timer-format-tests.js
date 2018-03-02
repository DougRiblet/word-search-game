import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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

  test('converts number of seconds into correct string', () => {
    const wrapper = shallow(<TimerFormat secondsleft={140} />);
    expect(wrapper.text()).toEqual('2:20');
    expect(wrapper.html()).toEqual('<span>2:20</span>');
  });

});
