import React from "react";
import Splitter from "m-react-splitters";

const Brand = () => {
  return (
    <Splitter
      position="vertical"
      primaryPaneMaxWidth="80%"
      primaryPaneMinWidth={420}
      primaryPaneWidth="60%"
      postPoned={false}
    >
      <div></div>
      <div></div>
    </Splitter>
  );
};

export default Brand;
