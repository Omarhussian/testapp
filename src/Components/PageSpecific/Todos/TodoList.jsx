import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';

const TodoList = ({ data, loading, setIsDetialsOpen , setSelectedTask }) => {
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('end');

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 7,
        total: data.length,
    });

    const handleChangePagination = (page, pageSize) => {
        setPagination({
            ...pagination,
            current: page,
        });
    };

    const displayData = data.slice((pagination.current - 1) * pagination.pageSize, pagination.current * pagination.pageSize);
    const handleDetailsClick = (task) => {
        setSelectedTask(task);
        setIsDetialsOpen(true);
      };
    return (
        <List
            className="demo-loadmore-list"
            loading={loading}
            pagination={{
                position,
                align,
                // pageSize: pagination.pageSize,
                current: pagination.current,
                total: pagination.total,
                onChange: handleChangePagination,
            }}
            style={{ width: '70vw', height: "80vh" }}
            itemLayout="horizontal"
            dataSource={displayData}
            renderItem={(item) => (
                <List.Item
                    actions={[<a key="list-loadmore-edit" onClick={() => handleDetailsClick(item)}>
                        Details
                    </a>,]}
                >
                    <Skeleton avatar title={false} loading={loading} active>
                        <List.Item.Meta
                            avatar={<Avatar />} // if the data from the backend have avatar or any task img related
                            title={item.title}
                            description={`ID: ${item.id}, Completed: ${item.completed ? 'Yes' : 'No'}`}
                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};

export default TodoList;
