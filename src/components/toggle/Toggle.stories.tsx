import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';

export default {
	title: 'Inputs/Toggle',
	component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.parameters = {
	design: {
		  type: 'figma',
		  url: 'https://www.figma.com/file/UKAhg88xvcWT8M4NjF2YYk/Playground?node-id=983%3A3588&mode=dev'
	  }
  }
Default.args = {};
