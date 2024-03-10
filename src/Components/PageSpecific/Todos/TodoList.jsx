import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;
const TodoList = ({data , loading}) => {
    console.log('data' , data)
    
  return (
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">Details</a>]}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={<Avatar />}
              title={item.title}
              description={`ID: ${item.id}, User ID: ${item.userId}, Completed: ${item.completed ? 'Yes' : 'No'}`}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default TodoList;