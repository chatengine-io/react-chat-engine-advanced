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
  customStyle: { renderTrigger: { maxWidth: '400px' } },
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  onShow: () => console.log('Chat Loader is visible.'),
  onHide: () => console.log('Chat Loader is NOT visible.'),
  customStyle: {
    renderTrigger: {
      maxWidth: '400px',
      backgroundColor: '#4a5162',
      fontFamily: 'Avenir',
      textAlign: 'center',
      margin: '4px',
      paddingTop: '14px',
      paddingBottom: '14px',
      borderRadius: '4px',
    },
  },
  children: <LoadingOutlined style={{ fontSize: '21px', color: '#f0f0f0' }} />,
};
