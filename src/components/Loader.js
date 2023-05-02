import React from "react";
import { SpinningOrbitLoader } from "react-loaders-kit";
import styled from "styled-components";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ["#1460e5", "#1460e5", "#1460e5","#1460e5"],
  };

  return (
    <LoaderDiv className="loader">
      <SpinningOrbitLoader {...loaderProps} />
      <h2>Fitness App</h2>
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  h2 {
    color: #1460e5;
    font-size: 1.5rem;
  }
`;

export default Loader;