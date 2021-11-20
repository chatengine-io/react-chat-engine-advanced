import React from 'react';

import { Meta, Story } from '@storybook/react';

import { LoadingOutlined } from '@ant-design/icons';

import { RenderTrigger } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'Components/RenderTrigger',
  component: RenderTrigger,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => (
  <RenderTrigger {...props}></RenderTrigger>
);

export const Default = Template.bind({});
Default.args = {
  onShow: () => console.log('Chat Loader is visible.'),
  onHide: () => console.log('Chat Loader is NOT visible.'),
};

export const Children = Template.bind({});
Children.args = {
  children: (
    <div>
      <LoadingOutlined /> Your code here
    </div>
  ),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  style: {
    maxWidth: '400px',
    border: '1px solid red',
    textAlign: 'center',
    margin: '4px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: '4px',
  },
};
