import React from "react";
import Content from "./content";

const HomePage = ({ data }) => {
  return (
    <div>
      HomePage
      {data.name}
      {data.age}
      <Content/>
    </div>
  );
};

export default HomePage;
