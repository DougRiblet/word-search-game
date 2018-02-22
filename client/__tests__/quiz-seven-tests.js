import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CurrentSeven from '../components/Quiz-Seven/quiz-seven-present';

describe('Quiz Seven', () => {
  test('Snapshot', () => {
    const CurrentSeven_tree = renderer.create(
      <CurrentSeven currentseven='JEEZELY' />
    ).toJSON();
    expect(CurrentSeven_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentSeven currentseven='JEEZELY' />, div);
  });

});
