import React from 'react'
import TodoList from '../../Components/PageSpecific/Todos/TodoList'
const TodosPage = ({data , loading}) => {
  return (
    <div >
      
      <TodoList data={data} loading={loading} />
    </div>
  )
}

export default TodosPage