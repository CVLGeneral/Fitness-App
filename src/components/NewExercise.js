import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Gif URL:
        <input type="text" value={gifUrl} onChange={(event) => setGifURL(event.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <label>
        TYpe:
        <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
      </label>
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default NewExercise;