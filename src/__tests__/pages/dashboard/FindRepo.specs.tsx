import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from '../../../pages/dashBoard/index';

describe('Dashboard app', () => {
  it('Find repo', () => {
    const { debug } = render(<Dashboard />);
    debug();
  });
});
