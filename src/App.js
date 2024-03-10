import "./App.css";
import { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { GetTodos } from "./Redux/Slices/todos/getList";
import TodosPage from "./Pages/Home/TodosPage";
function App() {
  const dispatch = useDispatch();
  const { Todos, loading } = useSelector((state) => state.GetTodosSlice);

  useEffect(() => {
    dispatch(GetTodos());
  }, [0]);
  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="h-[70vh] w-[70%]">
        <TodosPage data={Todos} loading={loading} />
      </div>
    </div>
  );
}
export default App;
