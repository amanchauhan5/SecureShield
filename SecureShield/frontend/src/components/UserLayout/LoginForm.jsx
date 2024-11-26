import React, { useState } from 'react';
import { Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        notification.success({ message: 'Login Successful' });
        onLogin(result.user);
        navigate('/home');
      } else {
        throw new Error(result.error || 'Login failed');
      }
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <div className='page-container' style={{ marginTop: '142px', marginBottom: '142px' }}>
      <div className="login-form-container">
        <h2 className="text-center mb-4">Login</h2>
        <Form name="login_form" className="login-form" onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
              <button htmlType="submit" loading={loading} style={{
                 width: '100%',padding:'6px 6px',backgroundColor:'#1E88E5',border:'none',color:'white',fontWeight:'bold',borderRadius:'5px'}} >
                Log in
              </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
