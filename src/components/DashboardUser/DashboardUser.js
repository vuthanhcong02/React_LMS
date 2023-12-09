import React ,{ useState } from 'react'
import { Form } from 'react-bootstrap'
import { Empty,Button , Alert, Calendar} from 'antd';
import dayjs from 'dayjs';
import './DashboardUser.scss'
export default function DashboardUser() {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className='dashboard-user-container container'>
        <span className='dashboard-user-title'>Dashboard</span>
        <div className='dashboard-user-main'>
            <span>Timeline</span>
            <div className='dashboard-user-filter-activity'>
                <Form.Select aria-label="All">
                          <option value="0">All</option>
                          <option value="1">Next 7 days</option>
                          <option value="2">Next 30 days</option>
                          <option value="3">Next 2 months</option>
                          <option value="4">Next 6 months</option>
                          <option value="5">Next 1 year</option>
                </Form.Select>
                <Form.Select aria-label="Sort by time">
                          <option>Sort by time</option>
                          <option value="1">Sort by name A-Z</option>
                          <option value="2">Sort by name Z-A</option>
                          <option value="3">Sort by date newest</option>
                          <option value="4">Sort by date oldest</option>
                      </Form.Select>
            </div>
            <hr/>
            <div className='dashboard-user-list-activity'>
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 60,
                }}
                description={
                  <span>
                    No activity
                  </span>
                }
              >
              <Button type="primary">New Activity</Button>
              </Empty>
            </div>
            <div className='dashboard-user-calendar'>
              <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
              <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
            </div>
        </div>
    </div>
    )
}
