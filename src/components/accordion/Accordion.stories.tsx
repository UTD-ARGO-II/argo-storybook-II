import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Surfaces/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1004%3A10869&mode=dev'
  }
}
Default.args = {
  header: "Title1",
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, mollitia?
      Nobis voluptates officiis aperiam ab itaque reiciendis aliquid inventore
      sunt!
    </div>
  ),
};

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1004%3A10869&mode=dev'
  }
}
Primary.args = {
  header: "Title2",
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, mollitia?
      Nobis voluptates officiis aperiam ab itaque reiciendis aliquid inventore
      sunt!
    </div>
  ),
  backgroundColor: "#ECF1FF"
};
