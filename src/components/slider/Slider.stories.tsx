import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Slider from "./Slider";

export default {
  title: "Inputs/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=3890%3A2592&mode=dev'
  }
}
Default.args = {};