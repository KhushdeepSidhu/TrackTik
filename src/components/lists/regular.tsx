import React, { FunctionComponent } from 'react';

// MUI
import { List } from '@mui/material';

// Type
import type { Site } from '../../libs/types/resources/Site';

type RegularListProps = {
  items: Site[];
  sourceName: string;
  ItemComponent: React.ComponentType<{ key: number }>;
};

export const RegularList: FunctionComponent<RegularListProps> = ({
  items,
  sourceName,
  ItemComponent,
}) => {
  return (
    <List>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </List>
  );
};
