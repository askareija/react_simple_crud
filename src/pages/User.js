import React, { useState } from 'react';
import { Row, Col, Space } from 'antd';
import UserList from '../components/users/List';
import AddUser from '../components/users/Add';
import DataSource from '../DataSource'

function User() {
  const [users, setUsers] = useState(DataSource);

  const editUser = (id, updatedUser) => {
    updatedUser.key = id
    setUsers(users.map((user) => (user.key === id ? updatedUser : user)))
  }

  const addUser = (user) => {
    user.key = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.key !== id))
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row">
          <Space>
            <AddUser addUser={addUser} />
          </Space>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row">
          <UserList dataSource={users} addUser={addUser} editUser={editUser} deleteUser={deleteUser} />
        </Col>
      </Row>
    </>
  )
}

export default User
