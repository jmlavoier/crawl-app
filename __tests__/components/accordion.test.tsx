import * as React from 'react';

import { render } from '../utils/test-utils';
import Accordion from '../../src/components/accordion';

describe('Accordion', () => {
  it('should render', () => {
    const { getByText } = render(<Accordion name="Maria" />);

    expect(getByText('Accordion Component It is An Maria')).toBeInTheDocument();
  });
});
