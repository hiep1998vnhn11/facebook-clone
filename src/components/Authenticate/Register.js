import React, {useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import {withRouter } from 'react-router-dom';
import FirebaseController from '../../firebase';

const layout ={
    labelCol: {span: 8},
    wrapperCol: {span: 8}
};
const tailLayout ={
    wrapperCol: {
        offset: 8,
        span: 8
    }
};

const Register = (props) => {
    if (localStorage.getItem("isLoggedIn") === "true") props.history.push("/");
  
    const onFinish = async (values) => {
      try {
        await FirebaseController.register(
          values.email,
          values.password,
          values.nickname,
          values.birthday
        );
        alert("Success");
        props.history.push("/login");
      } catch (error) {
        alert(error.message);
      }
    };
  

    const onFinishFailed =(errorInfo) => {
        alert('Register Failed! Try again please!');
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString)
    };

    return (
        <div>
            <br />
            <br />
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nickname"
                    name="nickName"
                    rules={[{required: true, message: 'Please input your nickname!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name="birthday"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <DatePicker onChange={onChange}/>
                </Form.Item> 
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <br />
                    <Button type="link" href="/login">
                        Go to Login
                    </Button>
                </Form.Item>
                               
            </Form>
        </div>
    );
}

export default withRouter(Register);