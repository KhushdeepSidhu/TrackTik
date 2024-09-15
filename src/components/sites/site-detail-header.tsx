import React, { FunctionComponent, memo } from 'react';

// MUI
import { Avatar, Typography, Box, IconButton, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid2';

// Types
import type { Address, Contact } from '../../libs/types/resources/Site';

type Contacts = {
  main: Contact;
};

type SiteDetailHeaderProps = {
  title: string;
  address: Address;
  contacts: Contacts;
  siteImage: string;
  navigateBack: () => void;
};

const SiteDetailHeader: FunctionComponent<SiteDetailHeaderProps> = ({
  title,
  address,
  contacts,
  siteImage,
  navigateBack,
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#6495ED',
        padding: 2,
        mb: 2,
        borderRadius: '8px',
      }}
      size={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid size={12}>
        <Typography variant="h5" align="center" color="white">
          Scheduling
        </Typography>
        <Grid />

        <Divider
          sx={{
            backgroundColor: '#343434',
            opacity: '0.5',
            height: '1px',
            width: '100%',
            my: 2,
          }}
        />
      </Grid>

      <Grid container size={8} justifyContent="center" alignItems="center">
        <IconButton onClick={navigateBack}>
          <ArrowBackIcon />
        </IconButton>
        <Avatar
          src={siteImage}
          alt="Site Image"
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography color="white" variant="h6">
            {title}
          </Typography>
          <Typography color="white" variant="body2">
            {`${address.street}, ${address.city}, ${address.country}, ${address.state}, ${address.zipCode}`}
          </Typography>
          <Typography color="white" variant="body2">
            {`${contacts.main.firstName} ${contacts.main.lastName}`}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(SiteDetailHeader);
