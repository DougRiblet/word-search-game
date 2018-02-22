import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AnswersWrong from '../components/Answers-Wrong/answers-wrong-present';

describe('AnswersWrong', () => {
  test('Snapshot', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const AnswersWrong_tree = renderer.create(
      <AnswersWrong wrongfour={dummystring} />
    ).toJSON();
    expect(AnswersWrong_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const div = document.createElement('div');
    ReactDOM.render(<AnswersWrong wrongfour={dummystring} />, div);
  });
});
