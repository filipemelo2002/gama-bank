import { render } from '@testing-library/react';
import React from 'react';
import RecoveryPass from '../../pages/recoveryPass/index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('RecoveryPass app', () => {
  it('Find repo', () => {
    const { debug } = render(<RecoveryPass />);
    debug();
  });
});
