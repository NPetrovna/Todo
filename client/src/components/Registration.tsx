import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import type { CounterState } from '../types/User.types';
import { changeRegistration } from '../redux/reg.slice';


export default function FormDisabledDemo() {
  const reg = useSelector((state: CounterState) => state);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(changeRegistration({[event.target.name]: event.target.value}))
  }

  const onSubmit = async (values) => {
    console.log(values)
    console.log('reg==>', reg)
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className='w-3xl'
      onFinish={onSubmit}
    >
      <Form.Item label="Name" name='name'>
        <Input onChange={changeHandler} name='name'/>
      </Form.Item>
      <Form.Item label="Mail" name='mail'>
        <Input onChange={changeHandler} name='mail'/>
      </Form.Item>
      <Form.Item label="Password" name='pass'>
        <Input onChange={changeHandler} name='pass'/>
      </Form.Item>
      <Form.Item style={{paddingLeft: '128px'}}>
        <Button htmlType="submit" className='w-md bg-blue-600!'>Зарегистрироваться</Button>
      </Form.Item>
    </Form>
  );
};
