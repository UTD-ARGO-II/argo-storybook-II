import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Inputs/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "text",
  children: "Default",
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  children: "Contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "disabled",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  variant: "contained",
  children: "success",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
  variant: "outlined",
  children: "error",
};
