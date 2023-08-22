import React, { useState } from 'react';
import { DateRangePicker } from '@mui/lab';
import { TextField } from '@mui/material';

function DateRangePickerComponent({ onDateRangeChange }) {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateRangeChange = (newDateRange) => {
    setDateRange(newDateRange);
    if (onDateRangeChange) {
      onDateRangeChange(newDateRange);
    }
  };

  return (
    <DateRangePicker
      startText="Start Date"
      endText="End Date" 
      value={dateRange}
      onChange={handleDateRangeChange}
    //   renderInput={(startProps, endProps) => (
    //     <React.Fragment>
    //       <TextField {...startProps} variant="standard" />
    //       <TextField {...endProps} variant="standard" />
    //     </React.Fragment>
    //   )}
    />
  );
}

export default DateRangePickerComponent;
