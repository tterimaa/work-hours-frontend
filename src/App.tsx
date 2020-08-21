import React, { useState } from "react";
import { Register } from "./components/Register";

type Role = "employee" | "employer";

const App = () => {
  const [role, setRole] = useState<Role>("employee");

  const changeRole = () => {
    if(role === "employee") setRole("employer");
    else setRole("employee");
  }

  return (
    <div className="App">
      <button
        name="role"
        type="button"
        onClick={changeRole}
      >{role}</button>
      <Register></Register>
    </div>
  );
};

export default App;
