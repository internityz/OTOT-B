import React from "react";
import Student from "./Student";

export default function List(props) {
  const { students, onRemove, onRetrieve, onAdd, onUpdate } = props;

  const handleAddStudent = (event) => {
    event.preventDefault();
    onAdd(event.target.name.value + "-" + event.target.age.value);
    console.log(event.target.name.value);
  };

  const handleUpdateStudent = (event) => {
    event.preventDefault();
    onUpdate(event.target.id.value + "-" + event.target.name.value);
  };
  return (
    <div>
      <div className="list">
        <h2> student list</h2>
        {students.map((student) => (
          <div className="row">
            <Student key={student.id} student={student} />
            <button onClick={() => onRemove(student)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="forms">
        <button onClick={() => onRetrieve()}>Retrieve list</button>
        <form onSubmit={handleAddStudent}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Age:
            <input type="text" name="age" />
          </label>
          <input type="submit" value="Add Student!" />
        </form>

        <form onSubmit={handleUpdateStudent}>
          <label>
            Student Id:
            <input type="text" name="id" />
          </label>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Update Student Name!" />
        </form>
      </div>
    </div>
  );
}
