module.exports = {
  stories: [
    '../src/components/MultiChatWindow/stories.mdx', // Default Story
    '../src/components/**/stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
