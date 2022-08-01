import React from "react";

import { DownOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import "antd/dist/antd.css";

const columns = [
    {
      title: 'description',
    },
    {
      title: 'data',
    },
    
    
  ];
  const data = [
    {description: "Lfyyss",
data: 123113132132131}
  ];
  
  /* const tableColumns = columns.map((item) => ({ ...item, ellipsis })); */

  const defaultTitle = () => 'Реквизиты ООО "Миг"';
  
  const defaultFooter = () => 'Скачать реквизиты';

const Requisites = () => {
  return (
    <>
      <Table
        bordered="true"
        showHeader={false}
        title={defaultTitle}
        footer={defaultFooter}
        columns={columns}
        dataSource={data}
        pagination={{
            position: ["none"],
          }}
      />
    </>
  );
  
}
export default Requisites;