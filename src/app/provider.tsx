import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import * as React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  colors: {
    slate: [
      '#F7FAFC',
      '#EDF2F7',
      '#E2E8F0',
      '#CBD5E0',
      '#A0AEC0',
      '#718096',
      '#4A5568',
      '#2D3748',
      '#1A202C',
      '#171923',
    ],
  },
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontSizes: {
    xs: '16px',
    sm: '20px',
    md: '26px',
    lg: '36px',
    xl: '50px',
  },
  headings: {
    fontFamily:
      'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },
});

function AppProvider({ children }: AppProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default AppProvider;
