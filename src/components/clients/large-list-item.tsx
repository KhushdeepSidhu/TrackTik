import React, { FunctionComponent } from 'react';

import type { Client } from '../../libs/types/resources/Client';

type LargeClientListItemProps = {
  client: Client;
};

export const LargeClientListItem: FunctionComponent<
  LargeClientListItemProps
> = ({ client }) => {
  const { givenName, logo, tags } = client;
  return (
    <>
      <h2>{`Name: ${givenName}`}</h2>
      <p>{`Logo: ${logo}`}</p>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    </>
  );
};
