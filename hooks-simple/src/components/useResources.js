import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  //whenever the value inside of [] changes, this causes the
  //arrow function passed to useEffect to be automatically called which makes
  //it behave like componentDidUpdate. If no array is provided, the arrow function
  //will get called in an infinite loop.
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
