import React from "react";
import Splitter from "m-react-splitters";
import { Tree, TreeNode } from "react-organizational-chart";
import "m-react-splitters/lib/splitters.css";
import styled from "styled-components";
import ChartSample from "../../components/OrgChart/chart.tsx";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
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
      <div>
        {/* <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Root</StyledNode>}
        >
          <TreeNode label={<StyledNode>Child 1</StyledNode>}>
            <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
          </TreeNode>
          <TreeNode label={<StyledNode>Child 2</StyledNode>}>
            <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
              <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
              <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<StyledNode>Child 3</StyledNode>}>
            <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
            <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
          </TreeNode>
        </Tree> */}
        <ChartSample
          data={[{ id: 1 }]}
          setClick={() => {}}
          onNodeClick={() => {}}
        />
      </div>
      <div>dua</div>
    </Splitter>
  );
};

export default UserTree;
