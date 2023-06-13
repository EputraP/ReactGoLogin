import React, { useState } from "react";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";

export interface Data {
  label: string;
  value: string;
}

interface Props {
  data: Array<Data>;
  change: Function;
  selectedValue: string;
  optionType: boolean;
}

const RadioButton = (props: Props) => {
  const { data, change, selectedValue, optionType } = props;
  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    change(value);
  };

  return (
    <Radio.Group
      options={data}
      onChange={onChange4}
      value={selectedValue}
      optionType={optionType ? "button" : "default"}
      buttonStyle="solid"
    />
  );
};

export default RadioButton;
