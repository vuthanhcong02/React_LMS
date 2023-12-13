import React, { useState } from 'react';
import { HighlightOutlined, BookOutlined, CarryOutOutlined  , MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Menu, Switch ,Button} from 'antd';
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
    getItem('Bài tập', 'sub1', <BookOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Kiểm tra', 'sub2', < HighlightOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Điểm danh', 'sub4', <CarryOutOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];
export default function SidebarCouse() {
    const [theme, setTheme] = useState('light');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  return (
    <>
          <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            style={{
              marginBottom: 16,
              marginLeft: 12
            }}
          />
          <br />
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
              marginLeft: 18
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={collapsed ? { width: 80 } : { width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed={collapsed}
      />
    </>
  )
}
