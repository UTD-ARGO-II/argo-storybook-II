import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './TextField';

export default {
	title: 'Inputs/TextField',
	component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
	<TextField {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1439%3A17523&mode=dev'
	}
}
Default.args = {
	label: 'Label',
	variant: 'default'
};

export const CalendarIcon = Template.bind({});
CalendarIcon.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1540%3A20632&mode=dev'
	}
}
CalendarIcon.args = {
	label: 'Label',
	variant: 'calendar-icon'
};
