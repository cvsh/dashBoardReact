
import React, { useEffect, useState } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { useHistory } from "react-router-dom";


const ClientDetail = props => {
    let history = useHistory();
    const [form] = Form.useForm()
    let [data, setData] = useState({
        name: "",
        email: "",
        username: "",
        company: "",
        phone: "",
        website: "",
        address: "",
        city: "",
        postcode: "",
    })
    let { id } = props.match.params
    let clId = parseInt(id)

    function getAddress(a){
        let add = a.suite + " " + a.street
        return (add);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await data.json();
            form.setFieldsValue({
                name: json.filter(u => u.id === clId)[0].name,
                email: json.filter(u => u.id === clId)[0].email,
                username: json.filter(u => u.id === clId)[0].username,
                phone: json.filter(u => u.id === clId)[0].phone,
                website: json.filter(u => u.id === clId)[0].website,
                address: getAddress(json.filter(u => u.id === clId)[0].address),
                city: json.filter(u => u.id === clId)[0].address.city,
                postcode: json.filter(u => u.id === clId)[0].address.zipcode,
                company: json.filter(u => u.id === clId)[0].company.name
            })
            return json
        }
        fetchData()
    },[form, clId])

    const onFinish = values => {
        const key = 'updatable';
        message.loading({ content: 'Updating...', key });
        setTimeout(() => {
            setData({
                name: values.name,
                email: values.email,
                username: values.username,
                company: values.company,
                phone: values.phone,
                website: values.website,
                address: values.address,
                city: values.city,
                postcode: values.postcode,
            })
            message.success({ content: 'Done!', key, duration: 2 });
        }, 1000);
        history.push(`/app/main/clients/client-list/`)
    };

	return (
        <div>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={90} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} icon={<UserOutlined />}/>
			</Flex>
			<div className="mt-4">
				<Form
                    onFinish={onFinish}
                    form={form}
					name="basicInformation"
					layout="vertical"
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company"
											name="company"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phone"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
                </div>
            </div>
    )
}

export default ClientDetail
