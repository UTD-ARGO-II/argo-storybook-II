import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
  title: 'Inputs/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const items = [10, 20, 30];
export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1140%3A16938&mode=dev'
  }
}
Default.args = {
  variant: 'default',
  listItems: items,
};

export const CheckList = Template.bind({});
CheckList.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1140%3A16851&mode=dev'
  }
}
CheckList.args = {
  variant: 'checklist',
  listItems: items,
};

export const RadioList = Template.bind({});
RadioList.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1140%3A16851&mode=dev'
  }
}
RadioList.args = {
  variant: 'radiolist',
  listItems: items,
};

export const ToggleList = Template.bind({});
ToggleList.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WrbYfhYCrGCb7BUOPSCCRB/ARGO-X-design-library?node-id=1140%3A16851&mode=dev'
  }
}
ToggleList.args = {
  variant: 'togglelist',
  listItems: items,
};