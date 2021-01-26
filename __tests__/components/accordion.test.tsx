/* eslint-disable react/prop-types */
import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { render } from '../utils/test-utils';
import Accordion from '../../src/components/accordion';

describe('Accordion', () => {
  it('should render title prop', () => {
    const title = 'Security';

    const { getByTestId } = render(<Accordion title={title} />);

    expect(getByTestId('title')).toHaveTextContent(title);
  });

  it('should render children content', () => {
    const body = 'This is a text';
    const NewComponent = ({ text }) => (
      <div>
        <a href="#top">{text}</a>
      </div>
    );

    const { getByTestId, getByText, rerender } = render(<Accordion title="0">{body}</Accordion>);

    expect(getByTestId('body')).toHaveTextContent(body);

    rerender(<Accordion title="0"><NewComponent text="This is the NewComponent text" /></Accordion>);

    expect(getByText('This is the NewComponent text')).toBeInTheDocument();
  });

  it('should body not to be visible at first time', () => {
    const title = 'Security';

    const { container } = render(<Accordion title={title} />);

    expect(container.firstChild).toHaveStyle('max-height: 46px');
  });

  it('should body be visible after click', async () => {
    const Wrapper = () => {
      const [open, setOpen] = React.useState(false);

      return (
        <Accordion
          title="Click here"
          open={open}
          onClick={() => setOpen(true)}
        />
      );
    };

    const { getByTestId } = render(<Wrapper />);

    userEvent.click(getByTestId('title'));

    expect(await getByTestId('body')).toBeVisible();
  });
});
