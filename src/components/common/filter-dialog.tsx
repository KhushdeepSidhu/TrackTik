// React
import React, { FunctionComponent, memo } from 'react';

// MUI
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

type FilterDialogProps = {
  open: boolean;
  onClose: () => void;
  fromDate: string;
  toDate: string;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
  onSave: () => void;
};

const FilterDialog: FunctionComponent<FilterDialogProps> = ({
  open,
  onClose,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  onSave,
}) => {
  console.log('Filter dialog is re-rendered.');
  return (
    <Dialog open={open} onClose={onClose}>
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(FilterDialog);
