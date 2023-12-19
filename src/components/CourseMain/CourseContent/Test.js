import React from "react";

export default function Test() {
  return (
    <>
      <div className="test-container">
        <div className="test-title mt-3 fw-bold fs-5 border p-3">
          Danh sách bài kiểm tra
        </div>
        <div className="test-content p-4 border d-flex justify-content-between mt-2">
          <label>Bài kiểm tra số 1</label>
          <a href="/test/1">Test</a>
        </div>
      </div>
    </>
  );
}
