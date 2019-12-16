import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  const { getByLabelText } = render(<App />);
  const inputLabel = getByLabelText(/github username*/i);
  expect(inputLabel).toBeInTheDocument();
});

test('renders search button', () => {
  const { getByText } = render(<App />);
  const searchForm = getByText(/search/i);
  expect(searchForm).toBeInTheDocument();
});
