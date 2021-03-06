jest.mock('../../icons');
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import BankIcon from '../BankIcon';

const defaultProps = { size: 16 };

const BankIconComponent = (props = defaultProps) => shallow(<BankIcon {...props} />);
const findChild = (selector) => BankIconComponent().find(selector);

describe('<BankIcon />', () => {
  it('renders BankIcon component correctly when BankName is provided', () => {
    const component = renderer.create(<BankIcon {...defaultProps} bankName="cajuina" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders BankIcon component correctly when BankId is provided', () => {
    const component = renderer.create(<BankIcon {...defaultProps} bankId={-11} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('showld show console warn when both BankID and BankName are provided', () => {
    const originalWarn = console.warn;
    const consoleSpy = jest.fn();
    console.warn = consoleSpy;
    renderer.create(<BankIcon {...defaultProps} bankName="cajuina" bankId={-11} />);
    expect(consoleSpy).toHaveBeenCalledWith('Both BankID and BankName were provided. BankName will be used.');
    console.warn = originalWarn;
  });

  it('should render FallbackIcon when dont match any icon', () => {
    const component = renderer.create(<BankIcon bankName="foo" size={16} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
