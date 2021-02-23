import { render } from '@testing-library/react';
import React from 'react';
import Error from '../../pages/error/index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Error app', () => {
  it('Find repo', () => {
    const { debug } = render(<Error />);
    debug();
  });
});
