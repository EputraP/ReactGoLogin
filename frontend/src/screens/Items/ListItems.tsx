import React, { useState } from "react";
import { TableComponent, RadioButton, ButtonComponent } from "../../components";
import styled from "styled-components";

interface Props {
  screenName?: string | undefined;
  funcSplitterTrigger?: Function | undefined;
}

const TitleContainer = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ListItems = (props: Props) => {
  const { screenName, funcSplitterTrigger } = props;
  const [RadioValue, setRadioValue] = useState("Single Select");
  const [DeleteButtonFlag, setDeleteButtonFlag] = useState(false);

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  const onClickCreateUpdateHandler = () => {
    if (funcSplitterTrigger) {
      funcSplitterTrigger("triggered");
    }
  };

  return (
    <div>
      <TitleContainer>{screenName} List</TitleContainer>
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
      <ButtonComponent
        style={{ margin: "5px" }}
        onClick={onClickCreateUpdateHandler}
      >
        Create/Update
      </ButtonComponent>
      {RadioValue == "Multi Select" && (
        <ButtonComponent
          style={{ backgorundColor: "red", margin: "5px" }}
          onClick={() => setDeleteButtonFlag(!DeleteButtonFlag)}
        >
          Delete
        </ButtonComponent>
      )}
    </div>
  );
};

export default ListItems;
