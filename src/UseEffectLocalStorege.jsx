import React, { useEffect, useState } from "react";

function UseEffectLocalStorege() {
  const [firstName, setFirstName] = useState(
    () => window.localStorage.getItem("HookFirstName")
  );
  const [lastName, setLastName] = useState(
    () => window.localStorage.getItem("HooksLastName")
  );

  const handlefirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handlelastNameChange = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("HooksFirstName", firstName);
    window.localStorage.setItem("HooksLastName", lastName);
  }, []);

  return (
    <div>
      <input type="text" value={firstName} onChange={handlefirstNameChange} />
      <br />
      <input type="text" value={lastName} onChange={handlelastNameChange} />
      <br />
      Hello,
      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
}

export default UseEffectLocalStorege;
