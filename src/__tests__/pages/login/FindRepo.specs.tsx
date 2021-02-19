import { render } from '@testing-library/react';
import React from 'react';
import Login from '../../../pages/login/index';

describe('login app', () => {
  it('Find repo', () => {
    const { debug } = render(<Login />);
    debug();
  });
});
