import React, { useState } from "react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  //useState allows us to utilize a class based state
  //how you destructure an array object. it will return the variables
  //you set based on the index positions of the elements in the array
  //ie, resource = state[0] (represents the current state value), setResource = state[1] (represents the setState function)
  //"posts" is the initial value we're setting for the state
  //const [currentValue, setCurrentValue] = useState(initialValue)
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Post</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
