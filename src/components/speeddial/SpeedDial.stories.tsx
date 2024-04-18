import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpeedDial from './SpeedDial';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
} as ComponentMeta<typeof SpeedDial>;

const Template: ComponentStory<typeof SpeedDial> = (args) => <SpeedDial {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  direction: 'up',
  actions: [
    { icon: <AddIcon />, name: 'Add', onClick: () => console.log('Add action') },
    { icon: <EditIcon />, name: 'Edit', onClick: () => console.log('Edit action') },
    { icon: <DeleteIcon />, name: 'Delete', onClick: () => console.log('Delete action') }
  ]
};


export const LeftOpening = Template.bind({});
LeftOpening.args = {
  direction: 'left',
  actions: [
    { icon: <AddIcon />, name: 'Add', onClick: () => console.log('Add action') },
    { icon: <EditIcon />, name: 'Edit', onClick: () => console.log('Edit action') },
    { icon: <DeleteIcon />, name: 'Delete', onClick: () => console.log('Delete action') }
  ]
};
