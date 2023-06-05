import {} from "react";
import { Login, LandingPage } from "./screens/index";
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
      <LandingPage />
    </ScreenContainer>
  );
}

export default App;
