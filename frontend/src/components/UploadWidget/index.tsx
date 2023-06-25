import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import axios from "axios";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "myFile",
  multiple: true,
  action: "http://localhost:8080/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
  customRequest: (options: any) => {
    const data = new FormData();
    data.append("myFile", options.file);
    console.log(data);
    const config = {
      headers: {
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
      },
    };
    axios
      .post(options.action, data, config)
      .then((res: any) => {
        options.onSuccess(res.data, options.file);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  },
};

const UploadWidget: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
  </Dragger>
);

export default UploadWidget;
