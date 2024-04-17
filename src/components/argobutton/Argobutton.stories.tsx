import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Argobutton";

export default {
  title: "Inputs/Argo Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Default.args = {
  variant: "text",
  children: "Default",
};

export const Contained = Template.bind({});
Contained.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Contained.args = {
  variant: "contained",
  children: "Contained",
};

export const Outlined = Template.bind({});
Outlined.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Outlined.args = {
  variant: "outlined",
  children: "outlined",
};

export const Disabled = Template.bind({});
Disabled.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Disabled.args = {
  disabled: true,
  children: "disabled",
};

export const Secondary = Template.bind({});
Secondary.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1076%3A10085&mode=dev'
	}
}
Secondary.args = {
  color: "secondary",
  children: "secondary",
};

export const Success = Template.bind({});
Success.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Success.args = {
  color: "success",
  variant: "contained",
  children: "success",
};

export const Error = Template.bind({});
Error.parameters = {
	design: {
	  type: 'figma',
	  url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1035%3A9744&mode=dev'
	}
}
Error.args = {
  color: "error",
  variant: "outlined",
  children: "error",
};
