import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ImageThumb } from '.';

import { Props } from './props';

import { imageAttachment } from '../../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/Thumbnail',
  component: ImageThumb,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ImageThumb {...props}></ImageThumb>;

export const Default = Template.bind({});
Default.args = {
  attachment: imageAttachment,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
