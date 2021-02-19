import { render } from '@testing-library/react';
import React from 'react';
import Error from '../../../pages/error/index';

describe('Error app', () => {
  it('Find repo', () => {
    const { debug } = render(<Error />);
    debug();
  });
});
