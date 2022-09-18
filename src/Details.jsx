import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is the details of id: {id}</h1>
    </div>
  );
};

export default Details;
