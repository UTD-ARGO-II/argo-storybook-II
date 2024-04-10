import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=982%3A3621&mode=dev'
	}
}
Default.args = {
	variant: 'default',
	label: 'Label'
};

export const Partial = Template.bind({});
Partial.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=982%3A3621&mode=dev'
	}
}
Partial.args = {
	variant: 'partial',
	label: 'Label'
};
