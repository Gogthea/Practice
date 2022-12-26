import React from 'react';
import {Form, Row,Input,Button, Col, Space, Select} from 'antd'; 
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons' 

export default function ActiveUser() {
    const onFinish=(value)=>{
        console.log(value)
    }

    const initialValues = {
        teacher:'Suman',
        students:[{

        },
        {
            first: 'Sandesh'

        }
    ]
    }
  return (
    <div style={{width:'1000px', display:'flex',justifyContent:'center', marginTop:'100px'}}>
        {<Row style={{border:'1px solid black', width:'500px', height:'300px'}} >
            <Col span={24}>
            <Form 
            style={{padding:'15px'}} 
            initialValues={initialValues}
            onFinish={onFinish}>
                <Form.Item name={'teacher'} label='TeacherName:' rules={[{
                    required:true,
                    message:'Enter a teacher name'
                }]}>
                    <Input placeholder='Teacher name'/>
                </Form.Item>
                <Form.Item name={'class'} label='ClassName:' rules={[{
                    required:true,
                    message:'Enter class name'
                }]}>
                    <Input placeholder='Class name'/>
                </Form.Item>
                <Form.List name={"students"}>
                    {(fields, {add, remove})=>(
                        <>
                        {fields.map((field, index)=>{
                            return(
                                <Space key={field.key} direction="horizontal"  size={6}>
                                    <Form.Item name={[field.name, "first"]} label={`${index+1}-Student`} rules={[{
                                        required:true,
                                        message:"Enter required field"
                                    }]}>
                                        <Input placeholder='FirstName'/>
                                    
                                    </Form.Item> 
                                    <Form.Item name={[field.name, "last"]} rules={[{
                                        required:true,
                                        message:"Enter the required Field"
                                    }]}>
                                        <Input placeholder='LastName'/>
                                    
                                    </Form.Item>
                                    <Form.Item name={[field.name, "gender"]}>
                                        <Select placeholder='Gender'>
                                            {["Male","Female"].map(gender=>{
                                                return <Select.Option value={gender} key={gender}>{gender}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                    <MinusCircleOutlined style={{height:40, color:'red'}} onClick={()=>{
                                        remove(field.name)
                                    }}/>
                                </Space>
                                );
                            
                        
                        
                        
                        })}
                        <Form.Item>
                            <Button icon={<PlusOutlined/>} block onClick={()=>{
                                add()

                            }}>Add Student</Button>
                        </Form.Item>
                        </>
                    )}

                </Form.List>
                <Button htmlType='submit' type='primary' block>Submit</Button>
            </Form>

            </Col>


        </Row>}      
    </div>
    
  )
}
