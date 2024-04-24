import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './Badge';

export default {
	title: 'Inputs/Badge',
	component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1123%3A15434&mode=dev'
	}
}
Default.args = {
	variant: 'default',
	label: 'Default'
};

export const Primary = Template.bind({});
Primary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1123%3A15434&mode=dev'
	}
}
Primary.args = {
	variant: 'primary',
	label: 'Primary'
};

export const Success = Template.bind({});
Success.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1123%3A15434&mode=dev'
	}
}
Success.args = {
	variant: 'success',
	label: 'Success'
};

export const Warning = Template.bind({});
Warning.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1123%3A15434&mode=dev'
	}
}
Warning.args = {
	variant: 'warning',
	label: 'Warning'
};

export const Error = Template.bind({});
Error.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1123%3A15434&mode=dev'
	}
}
Error.args = {
	variant: 'error',
	label: 'Error'
};
