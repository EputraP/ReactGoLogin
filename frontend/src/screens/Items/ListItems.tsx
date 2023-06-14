import React, { useState } from "react";
import { TableComponent, RadioButton, ButtonComponent } from "../../components";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ListItems = () => {
  const [RadioValue, setRadioValue] = useState("Single Select");
  const [DeleteButtonFlag, setDeleteButtonFlag] = useState(false);

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  console.log(RadioValue);
  return (
    <div>
      <TitleContainer>Brand List</TitleContainer>
      <RadioButton
        data={[
          { label: "Single Select", value: "Single Select" },
          { label: "Multi Select", value: "Multi Select" },
        ]}
        change={radioButtonOnChange}
        selectedValue={RadioValue}
        optionType={false}
      />
      <TableComponent />
      {RadioValue == "Multi Select" && (
        <ButtonComponent onClick={() => setDeleteButtonFlag(!DeleteButtonFlag)}>
          Delete
        </ButtonComponent>
      )}
    </div>
  );
};

export default ListItems;
