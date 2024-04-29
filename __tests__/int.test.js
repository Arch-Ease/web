// Sidebar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders Sidebar', () => {
  const { getByTestId } = render(<Sidebar />);
  const sidebarElement = getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();
});
