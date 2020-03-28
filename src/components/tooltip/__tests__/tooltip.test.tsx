import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from '..';

test('loads items eventually', async () => {
  const { getByText } = render(<Tooltip>Test</Tooltip>);

  expect(getByText('Test')).toBeTruthy();
});
