import React, { FunctionComponent, memo } from 'react';
import {
  Box,
  Select,
  MenuItem,
  TextField,
  FormControl,
  IconButton,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import Grid from '@mui/material/Grid2';
import FilterDialogWithToggle from './filter-dialog-with-toggle';

type SearchBarProps = {
  searchBy: string;
  onSearchByChange: (event: SelectChangeEvent<string>) => void;
  search: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortBy: string;
  onSortByChange: (event: SelectChangeEvent<string>) => void;
  fromDate: string;
  toDate: string;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchBy,
  onSearchByChange,
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  fromDate,
  toDate,
}) => {
  return (
    <>
      {/* Search By dropdown */}
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="body1" sx={{ color: 'white', mb: 0.9 }}>
          Search By
        </Typography>
        <FormControl
          fullWidth
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            mr: 2,
          }}
          size="small"
        >
          <Select
            data-testid="search-by-select"
            value={searchBy}
            onChange={onSearchByChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="contactFirstName">Contact First Name</MenuItem>
            <MenuItem value="contactLastName">Contact Last Name</MenuItem>
            <MenuItem value="state">State</MenuItem>
            <MenuItem value="country">Country</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search Sites"
          value={search}
          onChange={onSearchChange}
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            mt: 3.5,
          }}
        />
      </Grid>

      {/* Sort By dropdown */}
      <Grid size={{ sm: 12, md: 2 }}>
        <Typography variant="body1" sx={{ color: 'white', mb: 0.7 }}>
          Sort By
        </Typography>
        <FormControl
          fullWidth
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            mr: 2,
          }}
          size="small"
        >
          <Select
            value={sortBy}
            data-testid="sort-by-select"
            onChange={onSortByChange}
          >
            <MenuItem value="createdAt">Created At</MenuItem>
            <MenuItem value="updatedAt">Updated At</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 1 }}>
        <Typography variant="body1" sx={{ color: 'white', mb: 0.7 }}>
          Filters
        </Typography>
        <FilterDialogWithToggle fromDate={fromDate} toDate={toDate} />
      </Grid>
    </>
  );
};

export default memo(SearchBar);
