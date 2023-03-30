import "./App.css";
import Header from "./components/common/Header";
import SearchBar from "./components/SearchBar";
// import Result from "./components/Result/Result";
import styled from "styled-components";
import { useState } from "react";
import { api } from "./lib/api";

function App() {
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

  const getUserInfo = async (user) => {
    setUserInfo({ ...userInfo, status: "pending" });
    try {
      const { data } = await api.get(`/${user}`);
      setUserInfo({ ...userInfo, status: "resolved", data });
    } catch (error) {
      setUserInfo({ ...userInfo, status: "rejected", data: null });
    }
  };
  return (
    <StyledRoot>
      <Header />
      <SearchBar getUserInfo={getUserInfo} />
      {/* <Result userInfo={userInfo} setUserInfo={setUserInfo} /> */}
    </StyledRoot>
  );
}

export default App;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1b1d21;
  color: #e5e6e7;
`;
