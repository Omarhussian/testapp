import React, { useState } from 'react'
import TodoList from '../../Components/PageSpecific/Todos/TodoList'
import SearchInput from '../../Components/base/SearchInput';
import DetailsModal from '../../Components/Modals/DetailsModal';
const TodosPage = ({ data, loading }) => {
  const [isDetialsOpen, setIsDetialsOpen] = useState(false)
  const [filteredData, setFilteredData] = useState(data);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div className='flex flex-col gap-y-4  '>
      <SearchInput onSearch={handleSearch} />
      <TodoList data={filteredData} loading={loading} setIsDetialsOpen={setIsDetialsOpen} setSelectedTask={setSelectedTask} />
      <DetailsModal isDetialsOpen={isDetialsOpen} setIsDetialsOpen={setIsDetialsOpen} selectedTask={selectedTask} />
    </div> 
  )
}

export default TodosPage