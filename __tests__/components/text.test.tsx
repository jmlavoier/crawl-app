/* eslint-disable react/prop-types */
import * as React from 'react';

import { render } from '../utils/test-utils';
import Text from '../../src/components/text';

describe('Text', () => {
  it('should render with default props', () => {
    const { container } = render(<Text>Its a text</Text>);

    expect(container.firstChild).toHaveStyle({
      'font-size': '18px',
      'font-family': '"Museo Sans Rounded 300"',
      'font-weight': 'normal',
      margin: '0',
    });
  });

  it('should render with props', () => {
    const { container } = render(
      <Text height={55} size={28} weight="bold">Its a text</Text>,
    );

    expect(container.firstChild).toHaveStyle({
      'font-size': '28px',
      height: '55px',
      'line-height': '55px',
      'font-family': '"Museo Sans Rounded 700"',
      'font-weight': 'bold',
      margin: '0',
    });
  });

  it('should render text properly', () => {
    const text = 'This text should render';
    const { getByText } = render(<Text>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
  });
});
