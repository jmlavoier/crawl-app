/* eslint-disable react/prop-types */
import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { render } from '../utils/test-utils';
import Button from '../../src/components/button';

describe('Button', () => {
  it('should render text', () => {
    const text = 'Security';

    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('should call event click', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>Feedback</Button>);

    userEvent.click(container.firstChild);

    expect(onClick).toHaveBeenCalled();
  });
});
