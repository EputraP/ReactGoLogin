import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dashboard, InputData } from "../index";
import { Layout, Menu, theme } from "antd";
import { Route, Routes, useLocation } from "react-router-dom";
import "./LandingPage.css";
import styled from "styled-components";

interface ILogoutContainer {
  collapse: boolean;
}

const LogoutContainer = styled.div<ILogoutContainer>`
  heigth: 20px;
  background-color: #001529;
  position: fixed;
  bottom: 48px;
  z-index: 1;
  color: white;
  transition: all 0.1s, background 0.1s;
`;

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "Dashboard", <PieChartOutlined />),
  getItem("Input Item", "InputItem", <UserOutlined />, [
    getItem("Brand", "InputBrand"),
    getItem("Category", "InputCategory"),
    getItem("Product", "InputProduct"),
  ]),
  getItem("Team", "Team", <TeamOutlined />, [
    getItem("Team Tree", "TeamTree", <TeamOutlined />),
    getItem("Input Team", "InputTeam", <TeamOutlined />),
  ]),
  getItem("Analytic", "Analytic", <TeamOutlined />, [
    getItem("Product", "ProductAnalytic", <TeamOutlined />),
    getItem("Team", "TeamAnalytic", <TeamOutlined />),
  ]),
  getItem("Repository", "Repository", <FileOutlined />),
  getItem("Logout", "Logout", <FileOutlined />),
];

const LandingPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ overflowY: "auto", marginBottom: "48px" }}
      >
        <div>Test</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        ></Menu>
        {/* {collapsed == false ? (
          <LogoutContainer collapse={collapsed}>logout</LogoutContainer>
        ) : (
          <LogoutContainer collapse={collapsed}>logout</LogoutContainer>
        )} */}
        <LogoutContainer collapse={collapsed}>logout</LogoutContainer>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LandingPage;
