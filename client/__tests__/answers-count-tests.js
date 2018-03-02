import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import AnswersCount from '../components/Answers-Count/answers-count-present';

describe('Answers Count', () => {
  test('Snapshot', () => {
    const AnswersCount_tree = renderer.create(
      <AnswersCount
      poollength={14}
      foundlength={8}
      allownew={false}
      endGame={() => endGame()}
    />
    ).toJSON();
    expect(AnswersCount_tree).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnswersCount
      poollength={14}
      foundlength={8}
      allownew={false}
      endGame={() => endGame()}
    />, div);
  });

  test('displays two counts correctly', () => {
    const wrapper = shallow(<AnswersCount poollength={14} foundlength={8} />);
    expect(wrapper.text()).toEqual('8 of 14');
    expect(wrapper.html()).toEqual('<div id="answers-count">8 of 14</div>');
  });

  test('calls endGame when all words found in active game', () => {
    const endGame = jest.fn();
    const wrapper = mount(
      <AnswersCount
        poollength={14}
        foundlength={14}
        allownew={false}
        endGame={endGame}
      />
    );
    expect(endGame).toHaveBeenCalled();
  });

});
