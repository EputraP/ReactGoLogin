import React, { useState, useEffect } from "react";
import {
  BarChartOutlined,
  FolderOpenOutlined,
  CloudUploadOutlined,
  DollarOutlined,
  DashboardOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Dashboard } from "../index";
import { Layout, Menu, theme, MenuProps } from "antd";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { User } from "../../assets";
import styled, { css } from "styled-components";
import "./LandingPage.css";
import { Brand, Category, Product } from "../Items";
import { UserTree } from "../Teams";

interface IUserContainer {
  collapse: boolean;
}

const UserContainer = styled.div<IUserContainer>`
  position: fixed;
  height: 50px;
  bottom: 55px;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  div {
    position: relative;
    width: 100%;
    margin: 4px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ collapse }) =>
      collapse == true
        ? "justify-content: center;"
        : "justify-content: flex-start;"}
    img {
      :hover {
        cursor: pointer;
      }
    }
  }

  ${({ collapse }) =>
    !collapse &&
    css`
      padding-left: 24px;
      padding-right: 16px;
      width: 192px;
      label {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        margin-left: 10px;
        transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          margin 0.3s, color 0.3s;
        color: #9ba299;
        :hover {
          cursor: pointer;
          color: white;
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

const UserPopUpContainer = styled.div<IUserContainer>`
  height: 100px !important;
  width: 200px !important;
  background-color: transparant;
  position: absolute !important;
  top: -60px !important;
  ${({ collapse }) => (collapse == true ? "left: 60px;" : "left: 155px;")}
  z-index: 100000;
  border-radius: 8px;
  margin: 0px !important;
`;
const InnerUserPopUpContainer = styled.div<IUserContainer>`
  background-color: #001529;
  width: 152px !important;
  height: 90px !important;
  border-radius: 8px;
  margin-left: 0px !important;
  display: flex;
  flex-direction: column;
  ${({ collapse }) =>
    collapse == true
      ? "margin-left: 0px !important;"
      : "margin-left: 22px !important;"}
  div {
    height: 45%;
    width: 100%;
    display: flex !important;
    justify-content: flex-start;
    :hover {
      cursor: pointer;
    }
    label {
      margin-left: 15px;
      color: #9ba299;
      :hover {
        cursor: pointer;
        color: white;
      }
    }
  }
`;

const { Content, Sider } = Layout;

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
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),
  getItem("Items", "", <CloudUploadOutlined />, [
    getItem("Brand", "/items/brand"),
    getItem("Category", "items/category"),
    getItem("Product", "items/product"),
  ]),
  getItem("Transaction", "Transaction", <DollarOutlined />, [
    getItem("Daily Report", "DailyReport"),
  ]),
  getItem("Organization", "Organization", <ApartmentOutlined />, [
    getItem("User Tree", "/teams/usertree"),
    getItem("Permission", "InputTeam"),
  ]),
  getItem("Analytic", "Analytic", <BarChartOutlined />, [
    getItem("Product", "ProductAnalytic"),
    getItem("Team", "TeamAnalytic"),
  ]),
  getItem("Repository", "Repository", <FolderOpenOutlined />),
];

const GetScreenNameFromPathName = (location: any) => {
  const pathLocationArr = String(location.pathname).split("/");

  return (
    pathLocationArr[pathLocationArr.length - 1].charAt(0).toUpperCase() +
    pathLocationArr[pathLocationArr.length - 1].slice(1)
  );
};

const LandingPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedUser, setCollapsedUser] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();

  const screenName = GetScreenNameFromPathName(location);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    if (location.pathname == "/") navigate("/dashboard");
  }, []);
  console.log(location.pathname);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflowY: "auto",
          marginBottom: "100px",
        }}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={
            location.pathname == "/" ? ["/dashboard"] : [location.pathname]
          }
          mode="inline"
          items={items}
          onClick={({ key }) => {
            navigate(key);
          }}
        ></Menu>
        <UserContainer
          onMouseOver={() => setCollapsedUser(false)}
          onMouseOut={() => setCollapsedUser(true)}
          collapse={collapsed}
        >
          <div>
            <img src={User} />
            {!collapsed && <label>Admin</label>}
            {!collapsedUser && (
              <UserPopUpContainer
                collapse={collapsed}
                onMouseOver={() => setCollapsedUser(false)}
                onMouseOut={() => setCollapsedUser(true)}
              >
                <InnerUserPopUpContainer collapse={collapsed}>
                  <div>
                    <label>My Account</label>
                  </div>
                  <div>
                    <label>Logout</label>
                  </div>
                </InnerUserPopUpContainer>
              </UserPopUpContainer>
            )}
          </div>
        </UserContainer>
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route
              path="/items/brand"
              element={<Brand screenName={screenName} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/items/category"
              element={<Category screenName={screenName} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/items/product"
              element={<Product screenName={screenName} />}
            />
          </Routes>
          <Routes>
            <Route path="/teams/usertree" element={<UserTree />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LandingPage;
