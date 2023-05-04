import styled from "styled-components";
import React, { useEffect, useState } from "react";

function ExerciseNewRender() {
  const [exe, setExe] = useState([]);
  //fetching data from db.json 
  useEffect(() => {
    fetch("http://localhost:3005/exercises")
      .then((response) => response.json())
      .then((data) => {
        setExe(data);
      });
  }, []);

  return (
    <ExerciseGrid>
        
      {exe.map((exer) => {
        return (
          <ExerciseContainer key={exer.id} id="exercise">
            <div className="card">
              <div className="image">
                <img src={exer.gifUrl} alt={exer.name} loading="lazy" />
              </div>
              <div className="content">
                <span className="btn">{exer.category}</span>
                <span className="btn btn2">{exer.type}</span>
              </div>
              <h3>{exer.name}</h3>
            </div>
          </ExerciseContainer>
        );
      })}
    </ExerciseGrid>
  );
}

const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 19rem;

  /* Display cards horizontally on larger screens */
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(392px, 1fr));
  }
`;

const ExerciseContainer = styled.div`
  padding: 2rem 1rem;
  width: 392px;
  height: 536.09px;
  display: flex;
  flex-direction: column;

  justify-content: space-between; // add this property
  margin-left: 80px;
  gap: 2rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 128) 0px 3px 6px, rgba(0, 0, 0, 128) 0px 3px 6px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
      rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 80%;
    margin: auto auto;
    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1rem;
    .btn {
      padding: 1rem 2rem;
      border: none;
      margin-top: 32px;
      background-color: #1460e5;
      text-transform: capitalize;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      color: #fff;
      font-size: 100%;
      font-weight: 500;
      &:hover {
        color: #1460e5;
        background-color: #fafafa;
      }
    }
    .btn2 {
      color: #1460e5;
      background-color: #fafafa;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      &:hover {
        background-color: #1460e5;
        color: #fff;
      }
    }
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
    margin-top: 52px;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 128) 0px 3px 6px, rgba(0, 0, 0, 128) 0px 3px 6px;
    box-sizing: border-box;
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
        rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
    }
    .image {
      width: 90%;
      margin: auto auto;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.7rem 1rem;
        border-radius: 9px;
      }
    }

    h3 {
      word-break: word-break;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    width: 100%;
    height: max-content;
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
        border-radius: 9px;
      }
    }
  }
`;


export default ExerciseNewRender