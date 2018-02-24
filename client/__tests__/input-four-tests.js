import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import InputFour from '../components/New-Game/new-game-present';

describe('New Game', () => {
  test('Snapshot', () => {
    const InputFour_tree = renderer.create(
      <InputFour poolfour={['JEEZ']} foundfour={['EELY']} wrongfour={[]} />
    ).toJSON();
    expect(InputFour_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputFour poolfour={['JEEZ']} foundfour={['EELY']} wrongfour={[]} />, div);
  });
  
});
