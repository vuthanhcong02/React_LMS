import React from "react";
import { Form, Pagination } from "react-bootstrap";
import CardCourse from "../CardCourse/CardCourse";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <div className="home-container container">
        <div className="header-home-content">
          <span>Danh sách các khóa học</span>
          <div className="search-home-content">
            <input type="text" placeholder="Tên khóa học, mô tả, tác giả" />
            <button className="btn-search">Tìm kiếm</button>
          </div>
        </div>
        <div className="body-home-content">
          <div className="filter-home-content">
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
          <div className="list-home-content">
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>
          <div className="pagination-home-content">
            <Pagination>
              <Pagination.First />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
