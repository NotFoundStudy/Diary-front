import React, {useState} from 'react';
import styled from "styled-components";
import { Tabs,Table, Tag, Space,Collapse  } from 'antd';

const { TabPane } = Tabs;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const columns = [
    {
        title: '2018 YEARS',
        dataIndex: 'year',
        key: 'year',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

// 추후 탭과, 타임라인(표) 분리
// 추후 탭과, 타임라인(표) 분리
// 추후 탭과, 타임라인(표) 분리

// table 항목 1 (년도), 2018 YEARS .. 테이블 맵 => 테이블 컬럼

const data = [
    {
        key: '1',
        year: '2018 YEARS',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Tab = (props) => {
    const [size, setSize] = useState('small');

    function onChange(e) {
        setSize(e.target.value);
    }

    return (
        <Wrapper>
            <Tabs defaultActiveKey="1" type="card" size={size}>
                <TabPane tab="Card Tab 1" key="1">
                    Content of card tab 1
                </TabPane>
                <TabPane tab="Card Tab 2" key="2">
                    Content of card tab 2
                </TabPane>
                <TabPane tab="Card Tab 3" key="3">
                    Content of card tab 3
                </TabPane>
            </Tabs>
            <Table columns={columns} dataSource={data} />

            {/* Table data 요소로 - 공동저자정보 */}

        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Tab;