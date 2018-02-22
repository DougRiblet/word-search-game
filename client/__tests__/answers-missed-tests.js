import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AnswersMissed from '../components/Answers-Missed/answers-missed-present';

describe('Answers Missed', () => {
  test('Snapshot', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const AnswersMissed_tree = renderer.create(
      <AnswersMissed poolfour={dummystring} showmissed={true} />
    ).toJSON();
    expect(AnswersMissed_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const dummystring = 'ABCD EFGH MNOP';
    const div = document.createElement('div');
    ReactDOM.render(<AnswersMissed poolfour={dummystring} showmissed={true} />, div);
  });
});
