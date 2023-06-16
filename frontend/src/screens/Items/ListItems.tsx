import React, { useState } from "react";
import {
  TableComponent,
  RadioButton,
  ButtonComponent,
  ModalDeleteConfirmation,
} from "../../components";
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const onClickCreateUpdateHandler = () => {
    if (funcSplitterTrigger) {
      funcSplitterTrigger("triggered");
    }
  };

  return (
    <div>
      <ModalDeleteConfirmation
        isOpen={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        data={selectedData}
      />
      <TitleContainer>{screenName} List</TitleContainer>
      <RadioButton
        data={[
          { label: "Single Select", value: "Single Select" },
          { label: "Multi Select", value: "Multi Select" },
        ]}
        change={(value: any) => {
          setRadioValue(value);
          setSelectedData([]);
        }}
        selectedValue={RadioValue}
        optionType={false}
      />
      <TableComponent
        onDoubleClick={
          RadioValue == "Single Select" ? () => setIsOpen(true) : () => {}
        }
        modeSelection={RadioValue}
        FuncSelectedData={(data: any) => {
          setSelectedData(data);
        }}
      />
      <ButtonComponent
        style={{ margin: "5px" }}
        onClick={onClickCreateUpdateHandler}
      >
        Create/Update
      </ButtonComponent>
      {RadioValue == "Multi Select" && (
        <ButtonComponent
          style={{ backgorundColor: "red", margin: "5px" }}
          onClick={() => setIsOpen(true)}
        >
          Delete
        </ButtonComponent>
      )}
    </div>
  );
};

export default ListItems;
