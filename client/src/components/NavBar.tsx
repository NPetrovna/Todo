import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
import { Outlet, useNavigate } from 'react-router';
import { array } from '../lib/enums';

const items = array.map((el) => ({
  label: el.label,
  key: el.path,
}));

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );

  const onChangeHandler = (activeKey: string): void => {
    navigate(activeKey)
  }

  return (
    <>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} onChange={onChangeHandler} items={items} />
        <Outlet />
    </>
);
};

export default NavBar;