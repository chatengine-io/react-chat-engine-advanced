import React from 'react';

import { Meta, Story } from '@storybook/react';

import { FileThumb } from '.';

import { Props } from './props';

import { fileAttachment } from '../../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/FileThumb',
  component: FileThumb,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <FileThumb {...props}></FileThumb>;

export const Default = Template.bind({});
Default.args = {
  attachment: fileAttachment,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
