import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface Props {
  onDoubleClick?: Function | undefined;
  FuncSelectedData?: Function | undefined;
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

const TableComponent: React.FC<Props> = (props: Props) => {
  const { onDoubleClick, modeSelection, FuncSelectedData } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    setSelectedRowKeys([]);
  }, [modeSelection]);

  const onDoubleClickHandler = () => {
    if (onDoubleClick) onDoubleClick();
  };
  const onDataSelectedHandler = (data: any) => {
    if (FuncSelectedData) FuncSelectedData(data);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRowKeys(selectedRowKeys);
      onDataSelectedHandler(selectedRows);
    },
  };

  return (
    <Table
      rowSelection={modeSelection == "Multi Select" ? rowSelection : undefined}
      pagination={false}
      columns={columns}
      dataSource={data}
      onRow={(record, rowIndex) => {
        return {
          onDoubleClick: (event) => {
            onDataSelectedHandler([record]);
            onDoubleClickHandler();
          },
        };
      }}
    />
  );
};

export default TableComponent;
