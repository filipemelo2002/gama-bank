import { render } from '@testing-library/react';
import React from 'react';
import Login from '../../pages/login/index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('login app', () => {
  it('Find repo', () => {
    const { debug } = render(<Login />);
    debug();
  });
});
