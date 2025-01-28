import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import * as React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  headings: {
    fontFamily:
      'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },
});

function AppProvider({ children }: AppProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default AppProvider;
