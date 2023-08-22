import React, { useState } from 'react'
import { DatePicker, Radio, Space } from 'antd'
const { RangePicker } = DatePicker
const AntdRangePicker = () => {
  const [size, setSize] = useState('middle')
  const handleDateChange = (e) => {
    console.log(new Date(e[0].$d).getMonth())
    console.log(new Date(e[1].$d).getMonth())
  }
  return (
    <Space direction="vertical" size={12} className="inline">
      <RangePicker size={size} onChange={handleDateChange}/>
    </Space>
  )
}
export default AntdRangePicker
