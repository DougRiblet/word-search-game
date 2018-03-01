import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AnswersCount from '../components/Answers-Count/answers-count-present';

describe('Answers Count', () => {
  test('Snapshot', () => {
    const AnswersCount_tree = renderer.create(
      <AnswersCount poollength={14} foundlength={8} />
    ).toJSON();
    expect(AnswersCount_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnswersCount poollength={14} foundlength={8} />, div);
  });
});