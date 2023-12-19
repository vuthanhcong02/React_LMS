import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
export default function Attendance() {
  return (
    <>
      <div className="attendance-container">
        <div className="attendance-title mt-3 fw-bold fs-5 border p-3">
          Điểm danh
        </div>
      </div>
      <div className="attendance-content p-4 border mt-2">
        <div>
          <h6>Trạng thái điểm danh</h6>
          <Form className="mt-3">
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Có mặt"
                  name="status"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Vắng mặt"
                  name="status"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
        </div>
        <Table striped bordered hover size="sm" className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2021-01-01</td>
              <td>Otto</td>
              <td>Có mặt</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2021-01-03</td>
              <td>Otto</td>
              <td>Có mặt</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2021-01-05</td>
              <td>Otto</td>
              <td>Có mặt</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
