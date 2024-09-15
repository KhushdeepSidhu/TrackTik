import React, { FunctionComponent } from 'react';

import { useNavigate } from 'react-router-dom';

// MUI
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from '@mui/material';

// MUI Icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Types
import type { Site } from '../../libs/types/resources/Site';

type SmallSiteListItemProps = {
  site: Site;
};

export const SmallSiteListItem: FunctionComponent<SmallSiteListItemProps> = ({
  site,
}) => {
  const { title, address, contacts } = site;

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/sites/${id}`);
  };

  return (
    <ListItem key={site.id} divider>
      <ListItemAvatar>
        <Avatar src={site.images[0]} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            {`${address.street}, ${address.city}, ${address.country}, ${address.state}, ${address.zipCode}`}{' '}
            <br />
            {`${contacts.main.firstName} ${contacts.main.lastName}`}
          </>
        }
      />
      <IconButton onClick={() => handleNavigate(site.id)}>
        <ArrowForwardIosIcon />
      </IconButton>
    </ListItem>
  );
};
