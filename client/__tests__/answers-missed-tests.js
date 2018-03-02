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

  test('displays nothing when showmissed is false', () => {
    const dummystring = 'ABCD EFGH MNOP QVWY';
    const wrapper = shallow(
      <AnswersMissed poolfour={dummystring} showmissed={false} />
    );
    expect(wrapper.text()).toEqual('');
    expect(wrapper.html()).toEqual('<div id="answers-missed"></div>');
  });

  test('displays missed words when showmissed is true', () => {
    const dummystring = 'MNOP QVWY';
    const wrapper = shallow(
      <AnswersMissed poolfour={dummystring} showmissed={true} />
    );
    expect(wrapper.text()).toEqual('MNOP QVWY');
    expect(wrapper.html()).toEqual('<div id="answers-missed">MNOP QVWY</div>');
  });

});
