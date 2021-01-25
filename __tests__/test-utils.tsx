import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

interface ProviderProps {
  children: React.ReactNode,
}

const AllTheProviders = ({ children }: ProviderProps) => (
  <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
): React.ReactNode => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
