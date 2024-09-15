import React, { FunctionComponent } from 'react';

import type { Client } from '../../libs/types/resources/Client';

type SmallClientListItemProps = {
  client: Client;
};

export const SmallClientListItem: FunctionComponent<
  SmallClientListItemProps
> = ({ client }) => {
  const { givenName, logo } = client;
  return (
    <>
      <h2>{`Name: ${givenName}`}</h2>
      <p>{`Logo: ${logo}`}</p>
    </>
  );
};
