import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
});
