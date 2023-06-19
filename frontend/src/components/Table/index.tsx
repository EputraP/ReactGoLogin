import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface Props {
  onDoubleClick?: Function | undefined;
  FuncSelectedData?: Function | undefined;
  modeSelection?: string;
  data?: object | any;
  columns?: object[] | any;
  style?: object | any;
}

const TableComponent: React.FC<Props> = (props: Props) => {
  const {
    onDoubleClick,
    modeSelection,
    FuncSelectedData,
    data,
    columns,
    style,
  } = props;
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedRowKeys(selectedRowKeys);
      onDataSelectedHandler(selectedRows);
    },
  };

  return (
    <Table
      style={style}
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
