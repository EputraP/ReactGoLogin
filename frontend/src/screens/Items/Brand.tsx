import React, { useState } from "react";
import Splitter from "m-react-splitters";
import styled from "styled-components";
import { RadioButton } from "../../components";
import { Button, Form, Input, InputNumber } from "antd";
import { ListItems } from "../Items";
import "./Items.css";

interface Props {
  screenName?: string | undefined;
}

const SplitterContainer = styled.div`
  margin: 10px;
`;
const RadioButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
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
  margin-top: 20px;
  margin-left: -20px;

  // justify-content: center;
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

const data = [
  {
    key: "1",
    name: "Alfred",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Red",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Donald",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Alfred",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Jim Red",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Donald",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "9",
    name: "Alfred",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Jim Red",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "11",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Donald",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a: any, b: any) => a.address.length - b.address.length,
  },
];

const Brand = (props: Props) => {
  const { screenName } = props;
  const [RadioValue, setRadioValue] = useState("Create");
  const [CreUptButtonFlag, setCreUptButtonFlag] = useState(false);

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  console.log(screenName);
  return (
    <Splitter
      position="vertical"
      primaryPaneMaxWidth="100%"
      primaryPaneMinWidth={600}
      primaryPaneWidth="70%"
      postPoned={false}
    >
      <SplitterContainer>
        <ListItems
          screenName={screenName}
          funcSplitterTrigger={() => {
            setCreUptButtonFlag(!CreUptButtonFlag);
          }}
          data={data}
          columns={columns}
        />
      </SplitterContainer>
      {CreUptButtonFlag && (
        <SplitterContainer>
          <RadioButtonContainer>
            <RadioButton
              data={[
                { label: "Create", value: "Create" },
                { label: "Update", value: "Update" },
              ]}
              change={radioButtonOnChange}
              selectedValue={RadioValue}
              optionType={true}
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
      )}
    </Splitter>
  );
};

export default Brand;
