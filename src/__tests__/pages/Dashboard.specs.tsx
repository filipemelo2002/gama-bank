import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from '../../pages/dashBoard/index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Dashboard app', () => {
  it('Find repo', () => {
    const { debug } = render(<Dashboard />);
    debug();
  });
});
