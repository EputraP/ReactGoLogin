import React from "react";
import Splitter from "m-react-splitters";
import { Tree, TreeNode } from "react-organizational-chart";
import "m-react-splitters/lib/splitters.css";
import styled from "styled-components";
import ChartSample from "../../components/OrgChart/chart.tsx";

const SplitterContainer = styled.div`
  margin: 10px;
`;

const UserTree = () => {
  return (
    <Splitter
      position="vertical"
      primaryPaneMaxWidth="80%"
      primaryPaneMinWidth={420}
      primaryPaneWidth="60%"
      postPoned={false}
    >
      <SplitterContainer>
        <ChartSample
          data={[{ id: 1 }]}
          setClick={() => {}}
          onNodeClick={() => {}}
        />
      </SplitterContainer>
      <SplitterContainer>dua</SplitterContainer>
    </Splitter>
  );
};

export default UserTree;
