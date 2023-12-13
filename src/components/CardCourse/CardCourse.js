import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CourseImage from '../../assets/img/course-demo.png'
import './CardCourse.scss'
export default function CardCourse() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CourseImage} />
            <div className='course-status'>New</div>
            <Card.Body>
                <Card.Title>Nền tảng phát triển web</Card.Title>
                <Card.Text>
                    Lập trình web cơ bản
                </Card.Text>
                <Link to="/course/view/1">
                  <Button variant="primary">Truy cập</Button>
                  </Link>
            </Card.Body>
        </Card>
    </>
  )
}
