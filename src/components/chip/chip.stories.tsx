import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "./chip";

export default {
    title: "Data Display/Chip",
    component: Chip,
} as ComponentMeta<typeof Chip>;
  
const Template: ComponentStory<typeof Chip> = (args) => (
    <Chip {...args} />
)
  
export const Primary = Template.bind({});
Primary.args = {
  variant: "filled",
  label: "Primary",
  color: "primary"
};


export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "disabled",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  variant: "filled",
  label: "success",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
  variant: "filled",
  label: "error",
};
