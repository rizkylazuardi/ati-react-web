// jest.mock('../B', () => 'B');

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AtiButton from '../button/AtiButton';

enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = enzyme;

describe('<AtiButton />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let params;
  let component;

  beforeEach(() => {
    jest.resetModules();
    params = {
      id: 'testButton',
      name: 'testButton',
      text: 'Test',
      value: 'Value',
      size: 'sm',
      events: {
        onClick: jest.fn(),
      },
    };

    makeSubject = () => mount(<AtiButton {...params} />);
    makeShallowSubject = () => shallow(<AtiButton {...params} />);
    makeRenderSubject = () => render(<AtiButton {...params} />);
  });

  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const subject = makeRenderSubject();

      expect(subject.html()).toMatchSnapshot();
    });

    it('should match latest shallow snapshot', () => {
      const subject = makeShallowSubject();

      expect(subject.html()).toMatchSnapshot();
    });

    it('should match latest mount snapshot', () => {
      const subject = makeSubject();

      expect(subject.html()).toMatchSnapshot();
    });
  });

  it('should events.onClick is called', () => {
    const subject = makeSubject();

    subject.simulate('click');
    expect(params.events.onClick).toHaveBeenCalled();
  });
});
