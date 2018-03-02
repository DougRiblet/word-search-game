import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import EndButton from '../components/End-Game/end-game-present';

describe('End Game', () => {
  test('Snapshot', () => {
    const EndButton_tree = renderer.create(
      <EndButton endGame={() => endGame()} allownew={false} />
    ).toJSON();
    expect(EndButton_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EndButton endGame={() => endGame()} allownew={false} />, div);
  });

  test('calls endGame when button is clicked', () => {
    const endGame = jest.fn();
    const wrapper = mount(
      <EndButton endGame={endGame} allownew={false} />
    );
    const butt = wrapper.find('#end-game-button');
    butt.simulate('click');
    expect(endGame).toHaveBeenCalled();
  });

  test('displays correct button text', () => {
    const endGame = jest.fn();
    const wrapper = shallow(
      <EndButton endGame={endGame} allownew={false} />
    );
    expect(wrapper.text()).toEqual('End Game');
  });

});
