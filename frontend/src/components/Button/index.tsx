import React, { Children } from "react";
import { Button } from "antd";

interface Props {
  onClick?: Function | undefined;
  children?: string | null;
}

const ButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick, children } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick("test");
    }
  };

  return (
    <Button type="primary" onClick={onClickHandler}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
