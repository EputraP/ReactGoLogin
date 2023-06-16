import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface Props {
  onDoubleClick?: Function | undefined;
  modeSelection?: string;
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  sorter,
  extra
) => {
  console.log("params", pagination, sorter, extra);
};

const TableComponent: React.FC<Props> = (props: Props) => {
  const { onDoubleClick, modeSelection } = props;
  const onDoubleClickHandler = () => {
    if (onDoubleClick) onDoubleClick();
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  console.log(modeSelection);
  return (
    <Table
      rowSelection={modeSelection == "Multi Select" ? rowSelection : undefined}
      pagination={false}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            console.log(record);
          },
          onDoubleClick: (event) => {
            onDoubleClickHandler();
          },
        };
      }}
    />
  );
};

export default TableComponent;
