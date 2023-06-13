import React, { useState } from "react";
import { TableComponent, RadioButton, ButtonComponent } from "../../components";

const ListItems = () => {
  const [RadioValue, setRadioValue] = useState("Single Select");

  const radioButtonOnChange = (value: any) => {
    setRadioValue(value);
  };
  console.log(RadioValue);
  return (
    <div>
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
      {RadioValue == "Multi Select" && <ButtonComponent>test</ButtonComponent>}
    </div>
  );
};

export default ListItems;
