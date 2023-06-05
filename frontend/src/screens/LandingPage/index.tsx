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
import { User } from "../../assets";
import styled, { css } from "styled-components";

interface IUserContainer {
  collapse: boolean;
}

const UserContainer = styled.div<IUserContainer>`
  width: 100%;
  position: fixed;
  bottom: 55px;
  z-index: 1;
  color: white;
  margin: 4px;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  ${({ collapse }) =>
    !collapse &&
    css`
      padding-left: 24px;
      padding-right: 16px;
      label {
        margin-left: 10px;
        transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          margin 0.3s, color 0.3s;
        :hover {
          cursor: pointer;
        }
      }
    `};
  ${({ collapse }) =>
    collapse &&
    css`
      width: 72px;
      padding: 0px;
      display: flex;
      justify-content: center;
    `};
`;

const UserPopUpContainer = styled.div`
  height: 100px;
  width: 160px;
  background-color: #001529;
  position: absolute;
  top: 20px;
  left: 85px;
  z-index: 100000;
  border-radius: 8px;
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
  getItem("Input Items", "InputItem", <UserOutlined />, [
    getItem("Brand", "InputBrand"),
    getItem("Category", "InputCategory"),
    getItem("Product", "InputProduct"),
  ]),
  getItem("Transaction", "Transaction", <UserOutlined />, [
    getItem("Daily Report", "DailyReport"),
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
];

const LandingPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <UserPopUpContainer></UserPopUpContainer> */}
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
        <UserContainer collapse={collapsed}>
          <img src={User} />
          {!collapsed && <label>Admin</label>}
        </UserContainer>
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
