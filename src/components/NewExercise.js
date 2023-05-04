import React, { useState } from 'react';
import styled from 'styled-components';


//This function is responsible for updating the server when new transaction is added
function NewExercise() {
  const [name, setName] = useState('');
  const [gifUrl, setGifURL] = useState('');
  const [category,setCategory]=useState('')
  const [type, setType] = useState('');



  //To handle information fed into the form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newExercise = {
      name: name,
      gifUrl: gifUrl,
      category: category,
      type: type
    };

    //To persist the changes on the server
    fetch('http://localhost:3005/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExercise)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    setName('');
    setGifURL('');
    setCategory('')
    setType('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Gif URL:
        <input type="text" value={gifUrl} onChange={(event) => setGifURL(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Type:
        <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
      </InputContainer>
      <SubmitButton type="submit">Add Exercise</SubmitButton>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1460e5;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default NewExercise;