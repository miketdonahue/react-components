import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Tooltip } from './tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const Text = () => <Tooltip>Hello Tooltip</Tooltip>;
