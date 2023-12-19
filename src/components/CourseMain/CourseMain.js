import React from "react";
import { Tabs } from "antd";
import "./CourseMain.scss";
import { useState } from "react";
import SidebarCourse from "../SidebarCourse/SidebarCourse";
import InforCourse from "./MenuTab/InforCourse";
import Notification from "./MenuTab/Notification";
import Documentation from "./MenuTab/Documentation";
import Excercise from "./CourseContent/Excercise";
import Test from "./CourseContent/Test";
import Attendance from "./CourseContent/Attendance";
export default function CourseMain() {
  const [activeItemOption, setActiceItemOption] = useState(null);
  const handleToggleItemOption = (item) => {
    setActiceItemOption(item === activeItemOption ? null : item);
  };
  return (
    <div className="course-main-container">
      <div className="sidebar-course-main">
        <SidebarCourse
          acticeItemOption={activeItemOption}
          handleToggleItemOption={handleToggleItemOption}
        />
      </div>
      <div className="course-main-content-nav container">
        {!activeItemOption && (
          <>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: "Thông tin khóa học",
                  key: "1",
                  children: <InforCourse />,
                },
                {
                  label: "Thông báo",
                  key: "2",
                  children: <Notification />,
                },
                {
                  label: "Tài liệu",
                  key: "3",
                  children: <Documentation />,
                },
              ]}
            />
          </>
        )}
        <div className="details-content-course mt-3 container">
          {activeItemOption && (
            <>
              <div className="more-detail-course">
                {activeItemOption === "1.1" && (
                  <>
                    <Excercise />
                  </>
                )}
                {activeItemOption === "2.1" && (
                  <>
                    <Test />
                  </>
                )}
                {activeItemOption === "3.1" && (
                  <>
                    <Attendance />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
