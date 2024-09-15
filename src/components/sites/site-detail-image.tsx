import React, { FunctionComponent, memo } from 'react';
import Grid from '@mui/material/Grid2';

type SiteDetailImageProps = {
  imageUrl: string;
};

const SiteDetailImage: FunctionComponent<SiteDetailImageProps> = ({
  imageUrl,
}) => (
  <Grid
    container
    size={8}
    justifyContent="center"
    alignItems="center"
    component="img"
    sx={{
      width: '50%',
      height: 400,
      backgroundColor: '#e0e0e0',
      display: 'block',
      margin: '0 auto',
      mb: 2,
    }}
    src={imageUrl}
  />
);

export default memo(SiteDetailImage);
