import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import BodyFeature from "./components/BodyFeature";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import ExerciseDetail from "./components/Detail";
import Loader from "../src/components/Loader";
const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <BodyFeature />

      {loaded ? (
        <Loader />
      ) : (
        <Section>
          {/* <Navbar /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path={`/exercise/:id`} element={<ExerciseDetail />} />
          </Routes>
          {/* <Footer /> */}
        </Section>
      )}
    </div>
  );
};

const Section = styled.section``;
export default App;