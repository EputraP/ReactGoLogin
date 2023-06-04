import {} from "react";
import { Login, Dashboard } from "./screen/index";
import styled from "styled-components";

const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ScreenContainer>
      {/* <Login></Login> */}
      <Dashboard />
    </ScreenContainer>
  );
}

export default App;
