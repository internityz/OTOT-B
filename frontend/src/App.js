import StudentList from "./components/StudentList";
import WeatherList from "./components/WeatherList";

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

  const getWeather = async () => {
    const res = await axios.get(`https://ee1xq794id.execute-api.ap-southeast-1.amazonaws.com/beta`).catch((err) => {
      console.log(err);
    });
    console.log(res.data.body);
    setWeather(res.data.body);
  };

  const [students, setStudents] = useState([]);
  const [weatherList, setWeather] = useState([]);

  return (
    <div className="App">
      <StudentList students={students} onRemove={onRemove} onRetrieve={onRetrieve} onAdd={onAdd} onUpdate={onUpdate} />

      <WeatherList getWeather={getWeather} weatherList={weatherList} />
    </div>
  );
}

export default App;
