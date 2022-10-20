import "./styles.css";

import React from "react";
import { useState } from "react";
import Button from "./components/button";

function App() {
  const initial = { name: "", schoolname: "", Collegename: "", course: "" };
  const [info, changevalue] = useState(initial);

  return (
    <div>
      <form className="form">
        <h1>STUDENT SURVEY</h1>

        <label>
          <p className="inputname">Fullname</p>
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="FullName"
          value={info.name}
        />
        <label>
          <p className="inputname">Schoolname</p>
        </label>
        <input
          type="text"
          id="schoolname"
          placeholder="School name"
          value={info.schoolname}
        />
        <label>
          <p className="inputname">Collegename</p>
        </label>
        <input
          type="text"
          id="Collegename"
          placeholder="College name"
          value={info.Collegename}
        />
        <label>
          <p className="inputname">course</p>
        </label>
        <input
          type="text"
          id="course"
          placeholder="Course name"
          value={info.course}
        />
        <Button className="button" />
      </form>
    </div>
  );
}

export default App;
