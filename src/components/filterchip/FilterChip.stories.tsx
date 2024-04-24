import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterChip from './FilterChip';

export default {
	title: 'Inputs/FilterChip',
	component: FilterChip
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = (args) => (
	<FilterChip {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/UKAhg88xvcWT8M4NjF2YYk/Playground?node-id=1246%3A18676&mode=dev'
	}
  }
Default.args = { value: 'Filter' };
