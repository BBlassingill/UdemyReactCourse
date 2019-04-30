import React from "react";
import useResources from "./useResources";

//useEffect allows you to take advantage of lifecycle methods
//that are reserved for class based components
const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
