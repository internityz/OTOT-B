import List from "./components/List";
import axios from "axios";
import { useState } from "react";

function App() {
  const onRemove = async (student) => {
    const r = students.filter((x) => x.id !== student.id);
    setStudents(r);
    const res = await axios.delete(`/${student.id}`).catch((err) => {
      console.log(err);
    });
    console.log(res);
  };

  const onRetrieve = async () => {
    const res = await axios.get("/all").catch((err) => {
      console.log(err);
    });

    console.log(res.data.students);
    setStudents(res.data.students);
  };

  const onAdd = async (student) => {
    const res = await axios.post(`/${student}`).catch((err) => {
      console.log(err);
    });

    console.log(res);
    setStudents(res.data.students);
  };

  const onUpdate = async (student) => {
    const res = await axios.put(`/${student}`).catch((err) => {
      console.log(err);
    });

    console.log(res);
    setStudents(res.data.students);
  };

  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <List students={students} onRemove={onRemove} onRetrieve={onRetrieve} onAdd={onAdd} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
