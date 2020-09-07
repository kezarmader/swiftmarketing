import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from './app-header';

test('renders learn react link', () => {
  const { getByText } = render(<AppHeader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
