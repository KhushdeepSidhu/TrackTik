// React
import React, { FunctionComponent, useState, memo } from 'react';

// MUI
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import { FilterList } from '@mui/icons-material';

type FilterDialogProps = {
  fromDate: string;
  toDate: string;
};

const FilterDialogWithToggle: FunctionComponent<FilterDialogProps> = ({
  fromDate,
  toDate,
}) => {
  const [filterDialogOpen, setFilterDialogOpen] = useState<boolean>(false); // State to manage filter dialog

  const handleFilterDialogOpen = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleSaveFilters = () => {
    // We can dispatch an action here to update the state.filter and update the query params
    setFilterDialogOpen(false);
  };

  const handleSetToDate = () => {};

  const handleSetFromDate = () => {};

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
          },
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
        onClick={handleFilterDialogOpen}
      >
        <FilterList />
      </IconButton>
      <Dialog open={filterDialogOpen} onClose={handleFilterDialogClose}>
        <DialogTitle>Filter Sites</DialogTitle>
        <DialogContent>
          <TextField
            label="From Date"
            type="date"
            value={fromDate}
            onChange={() => {}}
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
          <TextField
            label="To Date"
            type="date"
            value={toDate}
            onChange={() => {}}
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterDialogClose}>Cancel</Button>
          <Button onClick={handleSaveFilters} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(FilterDialogWithToggle);
