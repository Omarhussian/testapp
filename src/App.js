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
    <div className="h-screen flex items-center"> 
      <div className=" flex items-center justify-center w-full ">
        <TodosPage data={Todos} loading={loading} />
      </div>
    </div>
  );
}
export default App;
