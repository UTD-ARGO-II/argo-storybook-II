import type { Meta, StoryObj } from '@storybook/react';

import { screen } from './screen';

const meta = {
  title: 'Example/screen',
  component: screen,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof screen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bb: Story = {};



