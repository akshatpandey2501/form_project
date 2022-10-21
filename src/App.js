import "./styles.css";

import React from "react";
import { useState } from "react";
import Button from "./components/button";
var valuee="";
function App() {
  // const initial = { name: "", schoolname: "", Collegename: "", course: "" };
  const [info, changevalue] = useState("");
  const[error,setError]=useState(null);
  const [info1, changevalue1] = useState("");
  const[error1,setError1]=useState(null);
  const [info2, changevalue2] = useState("");
  const[error2,setError2]=useState(null);
  const [info3, changevalue3] = useState("");
  const[error3,setError3]=useState(null);
  function handleSubmit(event){
    event.preventDefault();
    setError(null);
    changevalue("");
    changevalue1("");
    changevalue2("");
    changevalue3("");
    if(valuee.includes("")) setError("please fill this block");
   else setError(null);
  //  changevalue(value);
  }
 function handleChange(event){
    
   const value=event.target.value;
   if(value.includes("   ")) setError("invalid input");
   else setError(null);
   changevalue(value);
   valuee="hgfgh";
   
}
function handleChange1(event){
    
  const value1=event.target.value;
  if(value1.includes("   ")) setError1("invalid input");
  else setError1(null);
  changevalue1(value1);
}
function handleChange2(event){
    
  const value2=event.target.value;
  if(value2.includes("   ")) setError2("invalid input");
  else setError2(null);
  changevalue2(value2);
}
function handleChange3(event){
    
  const value3=event.target.value;
  if(value3.includes("   ")) setError3("invalid input");
  else setError3(null);
  changevalue3(value3);
}

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>STUDENT SURVEY</h1>

        <label>
          <p className="inputname">Fullname{error1}</p>
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="FullName"
          value={info1}
          onChange={handleChange1}
        />
        <label>
          <p className="inputname">Schoolname{error2}</p>
        </label>
        <input
          type="text"
          id="schoolname"
          placeholder="School name"
          value={info2}
          onChange={handleChange2}
        />
        <label>
          <p className="inputname">Collegename{error3}</p>
        </label>
        <input
          type="text"
          id="Collegename"
          placeholder="College name"
          value={info3}
          onChange={handleChange3}
        />
        <label>
          <p className="inputname">course {error}</p>
        </label>
        <input
          type="text"
          id="course"
          placeholder="Course name"
          value={info}
          onChange={handleChange}
        />
        <Button className="button" />
      </form>
    </div>
  );
}

export default App;
