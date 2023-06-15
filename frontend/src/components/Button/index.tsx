import React, { Children } from "react";
import { Button } from "antd";

interface Props {
  onClick?: Function | undefined;
  children?: string | null;
  style?: { backgorundColor?: any; margin?: any } | null;
}

const ButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick, children, style } = props;

  const onClickHandler = () => {
    if (onClick) {
      onClick("triggered");
    }
  };

  return (
    <Button
      type="primary"
      onClick={onClickHandler}
      style={{ backgroundColor: style?.backgorundColor, margin: style?.margin }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
