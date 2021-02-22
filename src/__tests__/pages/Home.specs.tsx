import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/home/index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Home app', () => {
  it('Find repo', () => {
    const { debug } = render(<Home />);
    debug();
  });
});
