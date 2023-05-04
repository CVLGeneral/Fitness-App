import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./components/Home"



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalculateBmi from "./components/CalculateBmi"
import ExerciseNewRender from "./components/ExerciseNewRender"


import { Routes, Route } from "react-router-dom";

import ExerciseDetail from "./components/ExerciseDetail"
import Loader from "./components/Loader";
import NewExercise from "./components/NewExercise";



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


      {loaded ? (
        <Loader />
      ) : (
        <Section>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/exercise/:id`} element={<ExerciseDetail />} />
            <Route path="bmi" element={<CalculateBmi/>} />
          </Routes>
          <ExerciseNewRender />

          <CalculateBmi/>

          <NewExercise/>

          <Footer />
        </Section>
      )}
    </div>
  );
};

const Section = styled.section``;
export default App;
