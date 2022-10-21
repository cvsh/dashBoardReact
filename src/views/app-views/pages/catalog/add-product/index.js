
import React, { useState } from 'react'
import { Upload, InputNumber, message, Select, Input, Row, Col, Card, Form, Button } from 'antd';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import { useHistory } from "react-router-dom";
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Option } = Select;

const rules = {
	name: [
		{
			required: true,
			message: 'Please enter product name',
		}
	],
	description: [
		{
			required: true,
			message: 'Please enter product description',
		}
	],
	price: [
		{
			required: true,
			message: 'Please enter product price',
		}
	],
	comparePrice: [		
	],
	taxRate: [		
		{
			required: true,
			message: 'Please enter tax rate',
		}
	],
	cost: [		
		{
			required: true,
			message: 'Please enter item cost',
		}
	]
}

const imageUploadProps = {
    name: 'file',
      multiple: true,
      listType: "picture-card",
      showUploadList: false,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
  }
  
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

const categories = ['Cloths', 'Bags', 'Shoes', 'Watches', 'Devices']
const tags = ['Cotton', 'Nike', 'Sales', 'Sports', 'Outdoor', 'Toys', 'Hobbies' ]

const AddProduct = props => {
    const [form] = Form.useForm();
    const [submitLoading, setSubmitLoading] = useState(false)
    let history = useHistory();

    const discardAdd = () => {
        history.push(`/app/main/catalog/items`)
    }

    const onFinish = () => {
        setSubmitLoading(true)
        form.validateFields().then(values => {
          setTimeout(() => {
            setSubmitLoading(false)
              message.success(`Created ${values.name} to product list`);
              discardAdd()
          }, 1500);
        }).catch(info => {
          setSubmitLoading(false)
          message.error('Please enter all required field ');
        });
    };

	return (
		<div>
            <Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={{
					heightUnit: 'cm',
					widthUnit: 'cm',
					weightUnit: 'kg'
				}}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Добавить товар</h2>
							<div className="mb-3">
								<Button onClick={discardAdd} className="mr-2">
                                    Отменить
                                </Button>
								<Button type="primary" htmlType="submit" onClick={() => onFinish()} loading={submitLoading} >
                                    Добавить
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container" style={{ marginTop: 113 }}>
                            <Row gutter={16}>
                                <Col xs={24} sm={24} md={17}>
                                    <Card title="Basic Info">
                                        <Form.Item name="name" label="Product name" rules={rules.name}>
                                            <Input placeholder="Product Name" />
                                        </Form.Item>
                                        <Form.Item name="description" label="Description" rules={rules.description}>
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Card>
                                    <Card title="Pricing">
                                        <Row gutter={16}>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item name="price" label="Price" rules={rules.price}>
                                                <InputNumber
                                                    className="w-100"
                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item name="comparePrice" label="Compare price" rules={rules.comparePrice}>
                                                    <InputNumber
                                                        className="w-100"
                                                        value={0}
                                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item name="cost" label="Cost per item" rules={rules.cost}>
                                                    <InputNumber
                                                        className="w-100"
                                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item name="taxRate" label="Tax rate" rules={rules.taxRate}>
                                                    <InputNumber
                                                        className="w-100"
                                                        min={0}
                                                        max={100}
                                                        formatter={value => `${value}%`}
                                                        parser={value => value.replace('%', '')}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={24} md={7}>
                                    <Card title="Media">
                                        <Dragger {...imageUploadProps} beforeUpload={beforeUpload} onChange={e=> props.handleUploadChange(e)}>
                                            {
                                                props.uploadedImg ? 
                                                <img src={props.uploadedImg} alt="avatar" className="img-fluid" /> 
                                                : 
                                                <div>
                                                    {
                                                        props.uploadLoading ? 
                                                        <div>
                                                            <LoadingOutlined className="font-size-xxl text-primary"/>
                                                            <div className="mt-3">Uploading</div>
                                                        </div> 
                                                        : 
                                                        <div>
                                                            <CustomIcon className="display-3" svg={ImageSvg}/>
                                                            <p>Click or drag file to upload</p>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </Dragger>
                                    </Card>
                                    <Card title="Organization">
                                        <Form.Item name="category" label="Category" >
                                            <Select className="w-100" placeholder="Category">
                                                {
                                                    categories.map(elm => (
                                                        <Option key={elm} value={elm}>{elm}</Option>
                                                    ))
                                                }
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name="tags" label="Tags" >
                                        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags">
                                            {tags.map(elm => <Option key={elm}>{elm}</Option>)}
                                        </Select>
                                        </Form.Item>
                                    </Card>
                                </Col>
                            </Row>
				</div>
			</Form>
		</div>
	)
}

export default AddProduct