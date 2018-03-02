import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import NewButton from '../components/New-Game/new-game-present';

describe('New Game', () => {
  test('Snapshot', () => {
    const NewButton_tree = renderer.create(
      <NewButton newGame={() => newGame()} allownew={true} />
    ).toJSON();
    expect(NewButton_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewButton newGame={() => newGame()} allownew={true} />, div);
  });

  test('calls newGame when button is clicked', () => {
    const newGame = jest.fn();
    const wrapper = mount(
      <NewButton newGame={newGame} allownew={true} />
    );
    const butt = wrapper.find('#new-game-button');
    butt.simulate('click');
    expect(newGame).toHaveBeenCalled();
  });

  test('displays correct button text', () => {
    const newGame = jest.fn();
    const wrapper = shallow(
      <NewButton newGame={newGame} allownew={true} />
    );
    expect(wrapper.text()).toEqual('New Game');
  });

});
