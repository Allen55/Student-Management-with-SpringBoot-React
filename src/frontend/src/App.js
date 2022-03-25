import './App.css';
import { Button } from 'antd';
import { getAllStudents } from "./client";

function App() {

    getAllStudents()
        .then(data => console.log())

  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
