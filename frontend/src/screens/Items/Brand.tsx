import React, { useState } from "react";
import Splitter from "m-react-splitters";
import styled from "styled-components";
import { Radio } from "antd";
import { RadioButton } from "../../components";

const SplitterContainer = styled.div`
  margin: 10px;
`;
const RadioButtonContainer = styled.div`
  width: 100%;
  height: 30px;
`;

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
      </SplitterContainer>
      <SplitterContainer></SplitterContainer>
    </Splitter>
  );
};

export default Brand;
