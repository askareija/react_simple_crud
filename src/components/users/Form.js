import React from 'react'
import { Modal, Form, Input } from 'antd';

function UserForm({ visible, onSubmit, onCancel, title, initialValues }) {
  const [form] = Form.useForm();

  return (
    <Modal
      getContainer={false}
      visible={visible}
      title={title}
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      forceRender
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(initialValues.key, values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="user_form_modal"
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of user!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input type="text" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UserForm
