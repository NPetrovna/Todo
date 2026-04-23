import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { changeRegistration, clearRegistration } from '../redux/reg.slice';

export default function Autorization() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(changeRegistration({[event.target.name]: event.target.value}));
  }

    const onSubmit = async (values) => {
        try {
            const response = await fetch(import.meta.env.VITE_URL + '/user/auth', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify(values),
            })
            const result = await response.json();
            console.log('result', result);
            dispatch(clearRegistration())
            form.resetFields()
        } catch (err) {
            console.error('ЭТО КЕТЧ', err)
        }
    }

  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className='w-3xl'
      onFinish={onSubmit}
    >
      <Form.Item label="Name" name='name'>
        <Input onChange={changeHandler} name='name'/>
      </Form.Item>
      <Form.Item label="Password" name='pass'>
        <Input onChange={changeHandler} name='pass'/>
      </Form.Item>
      <Form.Item style={{paddingLeft: '128px'}}>
        <Button htmlType="submit" className='w-md bg-blue-600!'>Авторизоваться</Button>
      </Form.Item>
    </Form>
  )
}
