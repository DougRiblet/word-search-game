import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AnswersRight from '../components/Answers-Right/answers-right-present';

describe('Answers Right', () => {
  test('Snapshot', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const AnswersRight_tree = renderer.create(
      <AnswersRight foundfour={dummystring} />
    ).toJSON();
    expect(AnswersRight_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const div = document.createElement('div');
    ReactDOM.render(<AnswersRight foundfour={dummystring} />, div);
  });
});
