import React from 'react'
import {Form} from 'react-bootstrap'
import './MyCourse.scss'
import CardCourse from '../CardCourse/CardCourse'
export default function MyCourse() {
  return (
    <>
        <div className='my-course-container container'>
            <div className='my-course-content'>
                <span>Các khóa học của tôi</span>
            </div>
            <div className='main-my-course-content'>
                <div className='filter-my-course-content'>
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
                <div className='list-my-course-content'>
                    <CardCourse/>
                    <CardCourse/>
                    <CardCourse/>
                </div>
            </div>
        </div>
    </>
  )
}
