import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import hamza from './suja.png'
import './login.css'
import { Button, Checkbox, Form, Input } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='main-conteiner p-4'>

      <p className="logo"><img className="lg-logo" src={hamza} /></p>
      <Form
        name="basic"

        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"

        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          className='text-center'
        >
          <Button type="primary" htmlType="submit" className='btn-md w-100 p-3 d-flex align-items-center justify-content-center'>
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Login