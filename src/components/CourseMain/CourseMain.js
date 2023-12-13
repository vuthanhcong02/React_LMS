import React from 'react'
import { Tabs } from 'antd';
import './CourseMain.scss'
import SidebarCouse from '../SidebarCourse/SidebarCouse'
import InforCourse from './MenuTab/InforCourse';
import Notification from './MenuTab/Notification';
import Documentation from './MenuTab/Documentation';
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
                    children: <InforCourse/>,
                },
                {
                    label: 'Thông báo',
                    key: '2',
                    children: <Notification/>,
                },
                {
                    label: 'Tài liệu',
                    key: '3',
                    children: <Documentation/>,
                },
                ]}
            />
        </div>

    </div>
  )
}
