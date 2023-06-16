import React from "react";
import { Button, Modal } from "antd";

interface Props {
  isOpen?: boolean | undefined;
  onCancel?: Function | undefined;
  selectedData?: object | undefined;
}

const ModalDeleteConfirmation = (props: Props) => {
  const { isOpen, onCancel } = props;
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
      Are you sure want to delete this items?
    </Modal>
  );
};

export default ModalDeleteConfirmation;
