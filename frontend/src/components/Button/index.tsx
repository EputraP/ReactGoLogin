import React, { Children } from "react";
import { Button } from "antd";

type Props = {
  title: string;
  children?: string | null;
};
// interface IButtonComponent {
//   onClick?: function | ()=>;
// }

const ButtonComponent: React.FC<Props> = ({ title, children }) => (
  <Button type="primary">{children}</Button>
);

export default ButtonComponent;
