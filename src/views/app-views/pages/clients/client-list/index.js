
import React, { useEffect, useState } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const ClientsList = () => {
	let [clients, setClients] = useState([])
    let [loading, setLoadign] = useState(true)
    let history = useHistory();

	useEffect(() => {
        const timer = setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json => setClients(json))
                .catch((err) => {
                    setClients(null);
                })
            setLoadign(false)
        }, 1000);
        return () => clearTimeout(timer);
	}, []);

    const clientDetail = (user) => {
        history.push(`/app/main/clients/client-detail/${user.id}`)
    }

	let deleteUser = userId => {
		setClients(
			clients.filter(item => item.id !== userId),
		)
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <a href={() => false} onClick={r => clientDetail(record)}><AvatarStatus src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"} name={record.name} subTitle={record.username}/></a>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                      b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Email address',
            dataIndex: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            render: (_, record) => (
                <div>
                    {record.company.name}
                </div>
            ),
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined />} onClick={() => {deleteUser(elm.id)}} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];

	return (
		<div>
			<Card bodyStyle={{'padding': '0px'}}>
				<Table
                    loading={loading}
                    columns={tableColumns} dataSource={clients} rowKey='id' 
                />
			</Card>
		</div>
	)
}

export default ClientsList
