/* eslint-disable react/prop-types */
import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { render } from '../utils/test-utils';
import Input from '../../src/components/input';

describe('Input', () => {
  it('should render with default props', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      height: '46px',
      position: 'relative',
    });
  });

  it('should have value that was typed', () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState('');

      return (<Input onChange={(e) => setValue(e.currentTarget.value)} value={value} />);
    };

    const { container } = render(<Wrapper />);

    expect(container.querySelector('input')).toHaveValue('');
    userEvent.type(container.querySelector('input'), 'I typed this');
    expect(container.querySelector('input')).toHaveValue('I typed this');
  });

  it('should should focus on input', async () => {
    const { getByTestId } = render(<Input />);

    getByTestId('input').focus();
    expect(getByTestId('input')).toHaveFocus();
  });

  it('should focus on input when clicked at search icon', async () => {
    const { getByTestId } = render(<Input />);

    userEvent.click(getByTestId('icon'));
    expect(getByTestId('input')).toHaveFocus();
  });
});
