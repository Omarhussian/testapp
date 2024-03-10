import React, { useState } from 'react'
import TodoList from '../../Components/PageSpecific/Todos/TodoList'
import SearchInput from '../../Components/base/SearchInput';
const TodosPage = ({data , loading}) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div className='flex flex-col gap-y-4'> 
      <SearchInput onSearch={handleSearch} />
      <TodoList data={filteredData} loading={loading} />
    </div>
  )
}

export default TodosPage