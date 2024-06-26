import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
	title: 'Inputs/Button',
	component: Button,
	argTypes: {
		color: { control: { type: 'color' } },
		hoverColor: { control: { type: 'color' } }
    }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
  }
Primary.args = {
	variant: 'primary',
	label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1076%3A10085&mode=dev'
	}
}
Secondary.args = {
	label: 'Button'
};

export const Quiet = Template.bind({});
Quiet.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1076%3A10126&mode=dev'
	}
}
Quiet.args = {
	variant: 'quiet',
	label: 'Button'
};

export const PrimaryDanger = Template.bind({});
PrimaryDanger.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1076%3A10167&mode=dev'
	}
}
PrimaryDanger.args = {
	variant: 'primary-danger',
	label: 'Button'
};

export const SecondaryDanger = Template.bind({});
SecondaryDanger.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1076%3A10208&mode=dev'
	}
}
SecondaryDanger.args = {
	variant: 'secondary-danger',
	label: 'Button'
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
	variant: 'quiet',
	label: 'Button',
	disabled: true
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button'
};

export const HelloWorld = Template.bind({});
HelloWorld.args = {
	variant: 'primary',
	label: 'Hello World!',
	onClick: () => {
		const hello = document.createElement("p");
		hello.textContent = "Hi there!";
		document.body.append(hello);
	}
}


// gpt

export const PrimaryARGO = Template.bind({});
PrimaryARGO.args = {
  variant: 'primary',
  color: '#01579B', // ARGO Primary color
  label: 'Primary Button',
};

export const SecondaryARGO = Template.bind({});
SecondaryARGO.args = {
  variant: 'secondary',
  color: '#2962FF', // ARGO Secondary color
  label: 'Secondary Button',
};