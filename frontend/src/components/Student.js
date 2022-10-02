import React from "react";

export default function Student(props) {
  const { student } = props;
  return (
    <div>
      <h3>
        {student.id} {student.name} {student.age}
      </h3>
    </div>
  );
}
