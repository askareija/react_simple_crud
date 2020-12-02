import React, { useState, Suspense, lazy } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons'

const UserForm = React.lazy(() => import('./Form'))

const EditUser = ({ editUser, UserInitialValue }) => {
  const [visible, setVisible] = useState(false);

  const onSubmit = (id, values) => {
    setVisible(false);
    editUser(id, values);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        icon={<EditOutlined />}
      >
        Edit
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        <UserForm
          visible={visible}
          onSubmit={onSubmit}
          initialValues={UserInitialValue}
          title="Edit"
          onCancel={() => {
            setVisible(false);
          }}
        />
      </Suspense>
    </div>
  );
};

export default EditUser
