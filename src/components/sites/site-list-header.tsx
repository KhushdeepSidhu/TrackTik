import React, { FunctionComponent, memo } from 'react';

// MUI
import { Typography, Divider } from '@mui/material';

const SiteListHeader: FunctionComponent = () => {
  return (
    <>
      <Typography variant="h5" color="white" align="center">
        Scheduling
      </Typography>

      <Divider
        sx={{
          backgroundColor: '#343434',
          opacity: '0.5',
          height: '1px',
          width: '100%',
          my: 2,
        }}
      />

      <Typography
        variant="h5"
        color="white"
        align="center"
        sx={{
          mb: -3,
        }}
      >
        Sites
      </Typography>
    </>
  );
};

export default memo(SiteListHeader);
