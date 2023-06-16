import React from "react";
import { Modal } from "antd";

interface Data {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface Props {
  isOpen?: boolean | undefined;
  onCancel?: Function | undefined;
  selectedData?: object | undefined;
  data: Array<Data>;
}

const ModalDeleteConfirmation = (props: Props) => {
  const { isOpen, onCancel, data } = props;
  const onCancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Modal
      open={isOpen}
      okText="Delete"
      onCancel={onCancelHandler}
      centered
      okButtonProps={{ style: { backgroundColor: "red" } }}
    >
      <div>Are you sure want to delete this items?</div>
      {data.map((data: Data) => (
        <div>{data.name}</div>
      ))}
    </Modal>
  );
};

export default ModalDeleteConfirmation;
