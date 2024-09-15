import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// MUI
import { CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Components
import SiteDetailHeader from './site-detail-header';
import SiteDetailImage from './site-detail-image';
import SiteDetailContactInfo from './site-detail-contact-info';

// Hooks
import useFetchSite from './queries/useFetchSite';

const SiteDetail = () => {
  console.log('SiteDetail component is re-rendered');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Typography>Error: Site not Found</Typography>;
  }

  const navigate = useNavigate();

  const { data: site, isLoading, isError, error } = useFetchSite(id || '');

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error: {error.message}</Typography>;

  if (!site) return <Typography>No site found</Typography>;

  const { title, address, contacts } = site;

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <SiteDetailHeader
        title={title}
        address={address}
        contacts={contacts}
        siteImage={site.images[0]}
        navigateBack={() => navigate(-1)}
      />
      <SiteDetailImage imageUrl={site.images[0]} />
      <SiteDetailContactInfo contact={contacts.main} />
    </Grid>
  );
};

export default SiteDetail;
