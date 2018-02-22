import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
});
