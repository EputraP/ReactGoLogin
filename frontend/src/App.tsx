import {} from "react";
import { Login, LandingPage } from "./screens/index";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";

const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ScreenContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </ScreenContainer>
  );
}

export default App;
