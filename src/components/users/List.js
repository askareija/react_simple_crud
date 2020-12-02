import React from 'react'
import { Table, Button, Space } from 'antd'
import EditUser from './Edit';

function UserList({dataSource, editUser, deleteUser}) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (text, record) => <Space><EditUser editUser={editUser} UserInitialValue={record} /><Button danger onClick={() => deleteUser(record.key)}>Delete</Button></Space>,
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} id={columns.id} />
  )
}

export default UserList
