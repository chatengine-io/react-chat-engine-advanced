import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Dot } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'Dot',
  component: Dot,
  argTypes: {
    onClick: { control: '' }
  }
}

export default meta;

const Template: Story<Props> = ({ avatarUrl, username, style, visible }) => (
  <Dot avatarUrl={avatarUrl} username={username} style={style} visible={visible} />
);

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  username: 'Dylan',
  style: { float: 'right', marginLeft: '4px' }
};

export const NoAvatarUrl = Template.bind({});
NoAvatarUrl.args = {
  avatarUrl: undefined,
  username: 'Dylan',
  style: { float: 'right', marginLeft: '4px' }
};