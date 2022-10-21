
import CatalogList from './data'
import { Card, Table, Select, Input, Button, Badge, Menu } from 'antd';
import { DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import NumberFormat from 'react-number-format';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import utils from 'utils';

const { Option } = Select

const categories = ['Cloths', 'Bags', 'Shoes', 'Watches', 'Devices']

const getStockStatus = stockCount => {
	if(stockCount >= 10) {
		return <><Badge status="success" /><span>In Stock</span></>
	}
	if(stockCount < 10 && stockCount > 0) {
		return <><Badge status="warning" /><span>Limited Stock</span></>
	}
	if(stockCount === 0) {
		return <><Badge status="error" /><span>Out of Stock</span></>
	}
	return null
}

const Goods = () => {
    let history = useHistory();
    const [list, setList] = useState(CatalogList)
    const [selectedRows, setSelectedRows] = useState([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const dropdownMenu = row => (
      <Menu>
        <Menu.Item onClick={() => deleteRow(row)}>
          <Flex alignItems="center">
            <DeleteOutlined />
            <span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
          </Flex>
        </Menu.Item>
      </Menu>
    );
    
    const addProduct = () => {
      history.push(`/app/main/catalog/add-product`)
    }
    
    const deleteRow = row => {
      const objKey = 'id'
      let data = list
      if(selectedRows.length > 1) {
        selectedRows.forEach(elm => {
          data = utils.deleteArrayRow(data, objKey, elm.id)
          setList(data)
          setSelectedRows([])
        })
      } else {
        data = utils.deleteArrayRow(data, objKey, row.id)
        setList(data)
      }
    }
  
    const tableColumns = [
      {
        title: 'ID',
        dataIndex: 'id'
      },
      {
        title: 'Product',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus size={60} type="square" src={record.image} name={record.name}/>
          </div>
        ),
        sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
      },
      {
        title: 'Category',
        dataIndex: 'category',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'category')
      },
      {
        title: 'Price',
        dataIndex: 'price',
        render: price => (
          <div>
            <NumberFormat
              displayType={'text'} 
              value={(Math.round(price * 100) / 100).toFixed(2)} 
              prefix={'$'} 
              thousandSeparator={true} 
            />
          </div>
        ),
        sorter: (a, b) => utils.antdTableSorter(a, b, 'price')
      },
      {
        title: 'Stock',
        dataIndex: 'stock',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'stock')
      },
      {
        title: 'Status',
        dataIndex: 'stock',
        render: stock => (
          <Flex alignItems="center">{getStockStatus(stock)}</Flex>
        ),
        sorter: (a, b) => utils.antdTableSorter(a, b, 'stock')
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <EllipsisDropdown menu={dropdownMenu(elm)}/>
          </div>
        )
      }
    ];
    
    const rowSelection = {
      onChange: (key, rows) => {
        setSelectedRows(rows)
        setSelectedRowKeys(key)
      }
    };

    const handleShowCategory = value => {
      if(value !== 'All') {
        const key = 'category'
        const data = utils.filterArray(CatalogList, key, value)
        setList(data)
      } else {
        setList(CatalogList)
      }
    }

    const onSearch = e => {
      const value = e.currentTarget.value
      const searchArray = e.currentTarget.value? list : CatalogList
      const data = utils.wildCardSearch(searchArray, value)
      setList(data)
      setSelectedRowKeys([])
    }

	return (
		<div>
		<Card>
			<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
					<div className="mb-3">
						<Select 
							defaultValue="All" 
							className="w-100" 
							style={{ minWidth: 180 }} 
							onChange={handleShowCategory} 
							placeholder="Category"
						>
							<Option value="All">All</Option>
							{
								categories.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</div>
				</Flex>
				<div>
					<Button onClick={addProduct} type="primary" icon={<PlusCircleOutlined />} block>Добавить товар</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
		</div>
	)
}

export default Goods