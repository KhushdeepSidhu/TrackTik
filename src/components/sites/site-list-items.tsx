import React, { FunctionComponent, memo } from 'react';

// MUI
import Grid from '@mui/material/Grid2';

// Components
import { RegularList } from '../lists/regular';
import { SmallSiteListItem } from '../sites/small-list-item';

// Types
import type { Site } from '../../libs/types/resources/Site';
import SiteLlistPaginateActions from './site-llist-paginate-actions';

type SiteListItemsProps = {
  sites: Site[];
  page: number;
  setPage: (newPage: number) => void;
  isPreviousData: boolean;
};

const SiteListItems: FunctionComponent<SiteListItemsProps> = ({
  sites,
  page,
  setPage,
  isPreviousData,
}) => {
  return (
    <Grid container size={8} justifyContent="center" alignItems="center">
      <Grid size={12}>
        <RegularList
          items={sites}
          sourceName="site"
          // @ts-ignore
          ItemComponent={SmallSiteListItem}
        />
      </Grid>

      <SiteLlistPaginateActions
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
      />
    </Grid>
  );
};

export default memo(SiteListItems);
