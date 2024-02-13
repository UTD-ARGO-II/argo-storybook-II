import type { ComponentMeta, ComponentStory } from "@storybook/react";

import HorizontalLinearStepper from "./Stepper";

export default {
  title: "Navigation/Stepper",
  component: HorizontalLinearStepper,
} as ComponentMeta<typeof HorizontalLinearStepper>;

const Template: ComponentStory<typeof HorizontalLinearStepper> = (args) => (
  <HorizontalLinearStepper />
);

export const HorizontalLinear = Template.bind({});
HorizontalLinear.args = {};
