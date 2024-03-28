import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';

export default {
	title: 'Inputs/RadioButton',
	component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
	<RadioButton {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=982%3A3716&mode=dev'
	}
}
Default.args = {
};
