import React, { useState } from "react";
import {
  HighlightOutlined,
  BookOutlined,
  CarryOutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Menu, Switch, Button } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Bài tập", "1", <BookOutlined />, [
    getItem("Option 1", "1.1"),
    getItem("Option 2", "1.2"),
    getItem("Option 3", "1.3"),
  ]),
  getItem("Kiểm tra", "2", <HighlightOutlined />, [
    getItem("Option 5", "2.1"),
    getItem("Option 6", "2.2"),
  ]),
  getItem("Điểm danh", "3", <CarryOutOutlined />, [
    getItem("Option 9", "3.1"),
    getItem("Option 10", "3.2"),
    getItem("Option 11", "3.3"),
    getItem("Option 12", "3.4"),
  ]),
];
export default function SidebarCourse({
  acticeItemOption,
  handleToggleItemOption,
}) {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("1");
  const [sidebarState, setSidebarState] = useState({
    showAttendance: false,
    showBaiTap: false,
    showKiemTra: false,
  });
  const onClickItemOption = (e) => {
    handleToggleItemOption(e.key);
    setCurrent(e.key);
    const updatedState = { ...sidebarState };
    console.log("click ", e);
    if (e.key === 1) {
      updatedState.showKiemTra = false;
      updatedState.showAttendance = false;
      // console.log("ok");
    }
    if (e.key === 2) {
      updatedState.showBaiTap = false;
      updatedState.showAttendance = false;
    }
    if (e.key === 3) {
      updatedState.showBaiTap = false;
      updatedState.showKiemTra = false;
    }
    updatedState[e.key] = !updatedState[e.key];
    setSidebarState(updatedState);
  };
  console.log("action", acticeItemOption);
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  // const onClickItemOption = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{
          marginBottom: 16,
          marginLeft: 12,
        }}
      />
      <br />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          marginLeft: 18,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <br />
      <Menu
        theme={theme}
        onClick={onClickItemOption}
        style={collapsed ? { width: 80 } : { width: 240 }}
        defaultOpenKeys={["1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed={collapsed}
      />
    </>
  );
}
