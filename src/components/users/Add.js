import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons'
import UserForm from './Form';

const AddUser = ({ addUser }) => {
  const [visible, setVisible] = useState(false);

  const onSubmit = (id, values) => {
    setVisible(false);
    addUser(values);
  };

  const AddUserInitialValues = {
    name: '',
    age: 0,
    address: ''
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        icon={<PlusCircleOutlined />}
      >
        New User
      </Button>
      <UserForm
        visible={visible}
        onSubmit={onSubmit}
        initialValues={AddUserInitialValues}
        title="Create a new User"
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default AddUser
