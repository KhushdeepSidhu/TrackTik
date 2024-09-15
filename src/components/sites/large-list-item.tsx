import React, { FunctionComponent } from 'react';

// Types
import type { Site } from '../../libs/types/resources/Site';

type LargeSiteListItemProps = {
  site: Site;
};

export const LargeSiteListItem: FunctionComponent<LargeSiteListItemProps> = ({
  site,
}) => {
  const { title, address, contacts, tags } = site;
  return (
    <>
      <h2>{title}</h2>
      <p>{`${address.street}, ${address.city}, ${address.country}, ${address.state}, ${address.zipCode}`}</p>
      <p>{`${contacts.main.jobTitle}: ${contacts.main.firstName} ${contacts.main.lastName}, Email: ${contacts.main.email}`}</p>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    </>
  );
};
