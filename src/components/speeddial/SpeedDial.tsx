import React from 'react';
import { SpeedDial as MuiSpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

export interface SpeedDialProps {
  actions: Array<{
    icon: JSX.Element,
    name: string,
    onClick?: () => void
  }>;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const SpeedDial: React.FC<SpeedDialProps> = ({ actions, direction = 'up' }) => {
  return (
    <MuiSpeedDial
      ariaLabel="Speed Dial"
      sx={{
        position: 'fixed',
        bottom: 16, // 16 pixels from the bottom
        right: 16  // 16 pixels from the right
      }}
      icon={<SpeedDialIcon />}
      direction={direction}
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          key={index}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </MuiSpeedDial>
  );
}

export default SpeedDial;
