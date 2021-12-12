#!/bin/bash

mkdir ./src/$1

COMPONENT_NAME=`basename $1`

# Index
echo "import React from 'react';" > ./src/$1/index.tsx
echo "import { Props } from './props';" >> ./src/$1/index.tsx
echo "" >> ./src/$1/index.tsx
echo "export const $COMPONENT_NAME: React.FC<Props> = ({}: Props) => {" >> ./src/$1/index.tsx
echo "  return <div />;" >> ./src/$1/index.tsx
echo "};" >> ./src/$1/index.tsx

# Props
echo "export interface Props {}" > ./src/$1/props.tsx

# Stories
echo "import { ArgsTable, Meta, Story, Canvas } from '@storybook/addon-docs/blocks';" > ./src/$1/stories.mdx
echo "import { $COMPONENT_NAME } from '.';" >> ./src/$1/stories.mdx
echo "import { Props } from './props';" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "<Meta title=\"$1\" component={$COMPONENT_NAME} />" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "export const Template = (args) => <$COMPONENT_NAME {...args} />;" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "# $COMPONENT_NAME" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "## Default" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "<Story name='Default' args={{}}>" >> ./src/$1/stories.mdx
echo "  {Template.bind({})}" >> ./src/$1/stories.mdx
echo "</Story>" >> ./src/$1/stories.mdx
echo "" >> ./src/$1/stories.mdx
echo "<ArgsTable story='Default' />" >> ./src/$1/stories.mdx

# Style
echo "export interface $COMPONENT_NAME""Styles {" >> ./src/$1/styles.tsx
echo "  style?: React.CSSProperties;" >> ./src/$1/styles.tsx
echo "}" >> ./src/$1/styles.tsx
echo "" >> ./src/$1/styles.tsx
echo "export const styles: $COMPONENT_NAME""Styles = {" >> ./src/$1/styles.tsx
echo "  style: {}," >> ./src/$1/styles.tsx
echo "};" >> ./src/$1/styles.tsx

# Test
echo "import React from 'react';" > ./src/$1/.test.tsx
echo "import * as ReactDOM from 'react-dom';" >> ./src/$1/.test.tsx
echo "import { $COMPONENT_NAME as Thing } from '.';" >> ./src/$1/.test.tsx
echo "" >> ./src/$1/.test.tsx
echo "describe('Thing', () => {" >> ./src/$1/.test.tsx
echo "  it('renders without crashing', () => {" >> ./src/$1/.test.tsx
echo "    const div = document.createElement('div');" >> ./src/$1/.test.tsx
echo "    ReactDOM.render(<Thing />, div);" >> ./src/$1/.test.tsx
echo "    ReactDOM.unmountComponentAtNode(div);" >> ./src/$1/.test.tsx
echo "  });" >> ./src/$1/.test.tsx
echo "});" >> ./src/$1/.test.tsx