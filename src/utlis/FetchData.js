export const ExerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '9108bbbd40msh4b0ff3512c2253ep13028djsn72e4274fa98a',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
           },
  };
  


  export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
      const data = await response.json();
      return data;
  };
  