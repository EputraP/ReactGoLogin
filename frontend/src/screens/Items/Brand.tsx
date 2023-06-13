import React, { useState } from "react";
import Splitter from "m-react-splitters";
import styled from "styled-components";
import { Radio } from "antd";
import { RadioButton } from "../../components";
import { Button, Form, Input, InputNumber } from "antd";
import "./Brand.css";
const SplitterContainer = styled.div`
  margin: 10px;
`;
const RadioButtonContainer = styled.div`
  width: 100%;
  height: 30px;
`;
const FormContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: green;
`;
const FormContainerInner = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: -110px;
  justify-content: center;
`;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const Brand = () => {
  const [RadioValue, setRadioValue] = useState("Create");

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  console.log(RadioValue);
  return (
    <Splitter
      position="vertical"
      primaryPaneMaxWidth="80%"
      primaryPaneMinWidth={420}
      primaryPaneWidth="60%"
      postPoned={false}
    >
      <SplitterContainer>
        <RadioButtonContainer>
          <RadioButton
            data={[
              { label: "Create", value: "Create" },
              { label: "Update", value: "Update" },
            ]}
            change={radioButtonOnChange}
            selectedValue={RadioValue}
          />
        </RadioButtonContainer>
        <FormContainer>
          {RadioValue == "Create" && (
            <FormContainerInner
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["user", "website"]} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </FormContainerInner>
          )}
          {RadioValue != "Create" && (
            <FormContainerInner
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["user", "website"]} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </FormContainerInner>
          )}
        </FormContainer>
      </SplitterContainer>
      <SplitterContainer></SplitterContainer>
    </Splitter>
  );
};

export default Brand;
