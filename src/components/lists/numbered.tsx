import React, { FunctionComponent } from 'react';

// MUI
import { List } from '@mui/material';

// Type
import type { Client } from '../../libs/types/resources/Client';

type NumberedListProps = {
  items: Client[];
  sourceName: string;
  ItemComponent: React.ComponentType<{ key: number; site?: Client }>;
};

export const NumberedList: FunctionComponent<NumberedListProps> = ({
  items,
  sourceName,
  ItemComponent,
}) => {
  return (
    <>
      <List>
        {items?.map((item, i) => (
          <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{ [sourceName]: item }} />
          </>
        ))}
      </List>
    </>
  );
};
