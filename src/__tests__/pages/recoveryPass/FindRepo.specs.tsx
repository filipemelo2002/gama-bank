import { render } from '@testing-library/react';
import React from 'react';
import RecoveryPass from '../../../pages/recoveryPass/index';

describe('RecoveryPass app', () => {
  it('Find repo', () => {
    const { debug } = render(<RecoveryPass />);
    debug();
  });
});
