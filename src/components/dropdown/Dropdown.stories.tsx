import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
	<Dropdown {...args} />
);

const items = [10, 20, 30];
export const Primary = Template.bind({});
Primary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1462%3A17979&mode=dev'
	}
}
Primary.args = {
	label: 'Label',
	items: items
};