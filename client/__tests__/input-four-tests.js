import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import InputFour from '../components/Input-Four/input-four-present';

describe('Input Four', () => {
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
