import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Switch from "./Switch";

export default {
  title: "Inputs/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  design: {
		type: 'figma',
		url: 'https://www.figma.com/file/UKAhg88xvcWT8M4NjF2YYk/Playground?node-id=983%3A3588&mode=dev'
	}
}
