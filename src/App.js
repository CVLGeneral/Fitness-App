import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../src/components/Loader";
import { Routes, Route } from 'react-router-dom';



//make sure you add your imports



function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
     {loaded ? (
       <Loader />
      ) : (
        <Section>
          {/* <Navbar /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path={`/exercise/:id`} element={<ExerciseDetail />} />  */}
          </Routes>
          {/* <Footer /> */}
        </Section>
      )}

    
    
    
    </>

  );
}
const Section = styled.section``;
export default App;
