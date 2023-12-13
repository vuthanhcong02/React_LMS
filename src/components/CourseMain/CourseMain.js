import React from 'react'
import { Tabs } from 'antd';
import './CourseMain.scss'
import SidebarCouse from '../SidebarCourse/SidebarCouse'
export default function CourseMain() {
  return (
    <div className='course-main-container'>
        <div className='sidebar-course-main'>
            <SidebarCouse />
        </div>
        <div className='course-main-content-nav container'>
        <Tabs
                defaultActiveKey="1"
                items={[
                {
                    label: 'Thông tin khóa học',
                    key: '1',
                    children: 'Tab 1',
                },
                {
                    label: 'Thông báo',
                    key: '2',
                    children: 'Tab 2',
                },
                {
                    label: 'Tài liệu',
                    key: '3',
                    children: 'Tab 3',
                },
                ]}
            />
        </div>

    </div>
  )
}
