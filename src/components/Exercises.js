import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { FetchData, ExerciseOptions } from "../utlis/FetchData";
import styled from "styled-components";
import ExerciseCard from "../components/Exercisecard";
const Exercises = ({ exercises, bodyPart, setExercises }) => {
   console.log(exercises);
// Set initial state for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Set number of exercises per page
  const ExercisePerPage = 10;
  // Calculate the index of the last exercise on the current page
  const indexOfLastExercise = currentPage * ExercisePerPage;
  // Calculate the index of the first exercise on the current page
  const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;
  // Slice the exercises array to only include exercises for the current page
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

// Fetch exercise data from API when the body part changes
  useEffect(() => {
    const fetchExerciseData = async () => {
      let ExerciseData = [];
      if (bodyPart === "all") {
        ExerciseData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          ExerciseOptions
        );
      } else {
        ExerciseData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExerciseOptions
        );
      }
      setExercises(ExerciseData);
    };
    fetchExerciseData();
  }, [bodyPart,setExercises]);
// Function to handle pagination and scrolling to top of page
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  return (
    <ExerciseContainer id="exercise">
      <h2>Showing Exercises Results</h2>
      <div className="card">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} flg={false} />
        ))}
      </div>

      <PaginationDiv>
        {exercises.length > ExercisePerPage && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / ExercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
            color="primary"
          />
        )}
      </PaginationDiv>
    </ExerciseContainer>
  );
};

const ExerciseContainer = styled.div`
  margin: 7rem 3rem;
  h2 {
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }
  .card {
    margin: auto auto;
    /* border: 1px solid red; */
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    gap: 3rem;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin: 2rem 1rem;
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 3rem;
      text-transform: capitalize;
    }
    .card {
      margin: auto auto;
      /* border: 1px solid red; */
      display: flex;
      width: 95%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    margin: 2rem 0;
    h2 {
      margin-top: 1rem;
      font-size: 1.3rem;
      text-align: center;
    }
    .card {
      display: flex;
      width: 85vw;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  font-size: 1.3rem;
  @media screen and (min-width: 320px) and (max-width: 520px) {
    font-size: 0.2rem;
    margin: auto auto;
    margin-top: 3rem;
  }
`;

export default Exercises;