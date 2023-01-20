import React, { useState } from "react";

const Parent = () => {
  const [user, setUser] = useState("Mohamed");
  const updateUser = (name) => {
    setUser(name);
  };
  return <Child user={user} updateUser={updateUser} />;
};

const Child = (props) => {
  const updateUser = () => {
    props.updateUser("Mohamed Ikram");
  };
  return <button onClick={() => updateUser()}>update</button>;
};
