import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./components/Home"



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalculateBmi from "./components/CalculateBmi"
import NewExercise from "./components/NewExercise";


import { Routes, Route } from "react-router-dom";

import ExerciseDetail from "./components/ExerciseDetail"
import Loader from "./components/Loader";




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
            <Route path="/bmi" element={<CalculateBmi/>} />
            <Route path="/form" element={<NewExercise/>} />

          </Routes>



          <Footer />
        </Section>
      )}
    </div>
  );
};

const Section = styled.section``;
export default App;
