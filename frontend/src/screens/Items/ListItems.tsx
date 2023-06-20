import React, { useState, useMemo } from "react";
import {
  TableComponent,
  RadioButton,
  ButtonComponent,
  ModalDeleteConfirmation,
} from "../../components";
import styled from "styled-components";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

const Context = React.createContext({ name: "Default" });

interface Props {
  screenName?: string | undefined;
  funcSplitterTrigger?: Function | undefined;
  data?: object | any;
  columns?: object | any;
}

const TitleContainer = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ListItems = (props: Props) => {
  const { screenName, funcSplitterTrigger, data, columns } = props;
  const [RadioValue, setRadioValue] = useState("Single Select");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  const onClickCreateUpdateHandler = () => {
    if (funcSplitterTrigger) {
      funcSplitterTrigger("triggered");
    }
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
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
          data={data}
          columns={columns}
          style={{ height: "450px", overflowY: "auto" }}
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
            onClick={
              selectedData.length != 0
                ? () => setIsOpen(true)
                : () => openNotification("topLeft")
            }
          >
            Delete
          </ButtonComponent>
        )}
      </div>
    </Context.Provider>
  );
};

export default ListItems;
