import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { CKMarchingLogo, CKMarchingPhoto } from "../../assets";
import styled from "styled-components";
import { Divider } from "antd";
import "./Login.css";
const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url(${CKMarchingPhoto});
  background-repeat: no-repeat;
  background-size: cover;
`;
const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const LoginContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -300px;
  background-color: white;
  opacity: 0.9;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 70px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 75%;
  background-color: white;
`;

const SeparatorContainer = styled.div`
  width: 100%;
  height: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 5px;
`;
const FormContainer = styled.div`
  width: 100%;
  height: 84%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <LoginPageContainer>
      <OverlayContainer />
      <LoginContainer>
        <ImageContainer>
          <img src={CKMarchingLogo} />
        </ImageContainer>
        <SeparatorContainer>
          <Divider
            dashed
            style={{
              margin: "0px",
              borderWidth: "4px 0 0",
              borderColor: "#D3D3D3",
            }}
          />
        </SeparatorContainer>
        <ContentContainer>
          <TitleContainer>Login Admin</TitleContainer>
          <FormContainer>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
        </ContentContainer>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default Login;
