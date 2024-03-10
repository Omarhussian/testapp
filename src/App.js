import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
export default App;
