// jest.mock('../B', () => 'B');

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AtiAlertBox from './../alert/AtiAlertBox';

enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = enzyme;

describe('<AtiAlertBox />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let params;
  let component;

  beforeEach(() => {
    jest.resetModules();
    params = {
      id: 'alertId',
      color: 'success',
      isOpen: true,
      onToggle: jest.fn(),
      closable: true,
      message: 'Successfull !!!!',
    };

    makeSubject = () => mount(<AtiAlertBox {...params} />);
    makeShallowSubject = () => shallow(<AtiAlertBox {...params} />);
    makeRenderSubject = () => render(<AtiAlertBox {...params} />);
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

  it('should events.onToggle is called', () => {
    const subject = makeSubject();

    subject.find('.close').simulate('click');
    expect(params.onToggle).toHaveBeenCalled();
  });
});
