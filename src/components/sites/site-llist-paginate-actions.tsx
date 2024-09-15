import React, { FunctionComponent, memo } from 'react';

// MUI
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type SiteListPaginateActions = {
  page: number;
  setPage: (newPage: number) => void;
  isPreviousData: boolean;
};

const SiteListPaginateActions: FunctionComponent<SiteListPaginateActions> = ({
  page,
  setPage,
  isPreviousData,
}) => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          onClick={() => setPage(Math.max(page - 1, 1))}
          disabled={page === 1}
          sx={{
            backgroundColor: '#6495ED',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5380C4',
            },
            mr: 1,
          }}
        >
          Previous
        </Button>

        <Typography
          variant="h6"
          sx={{
            color: '#6495ED',
            mx: 2,
          }}
        >
          {page}
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            if (!isPreviousData) {
              setPage(page + 1);
            }
          }}
          disabled={isPreviousData}
          sx={{
            backgroundColor: '#6495ED',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5380C4',
            },
            ml: 1,
          }}
        >
          Next
        </Button>
      </Grid>
    </>
  );
};

export default memo(SiteListPaginateActions);
