import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    icon: { control: '' },
    onClick: { control: '' },
  },
};
  
export default meta;

const Template: Story<Props> = ({ avatarUrl, username, isOnline, showOnline, onClick }) => (
  <Avatar avatarUrl={avatarUrl} username={username} isOnline={isOnline} showOnline={showOnline} onClick={onClick} />
)

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png'
};

export const AvatarOnline = Template.bind({});
AvatarOnline.args = {
  avatarUrl: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  showOnline: true,
  isOnline: true
};

export const NoAvatarUrl = Template.bind({});
NoAvatarUrl.args = {
  username: 'Dylan',
  showOnline: true,
  isOnline: false
};

