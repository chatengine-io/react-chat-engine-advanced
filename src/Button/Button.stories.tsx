import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Primary: Story<Props> = () => <Button type='primary'>Click Me!</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Primary.bind({});

Default.args = {};
