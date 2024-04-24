import type { Meta, StoryObj } from '@storybook/react';

import { screen } from './screen';

const meta = {
  title: 'Example/screen',
  component: screen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof screen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bb: Story = {};



