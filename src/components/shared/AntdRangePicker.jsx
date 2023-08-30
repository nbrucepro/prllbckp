import React, { useState } from 'react'
import { DatePicker, Radio, Space } from 'antd'
const { RangePicker } = DatePicker
const AntdRangePicker = ({onDateRangeChange}) => {
  const [size, setSize] = useState('middle');
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (e) => {
    setDateRange(e);
    if (onDateRangeChange) {
      onDateRangeChange(e);
    }
  }
  return (
    <Space direction="vertical" size={12} className="inline">
      <RangePicker size={size} onChange={handleDateChange}/>
    </Space>
  )
}
export default AntdRangePicker
