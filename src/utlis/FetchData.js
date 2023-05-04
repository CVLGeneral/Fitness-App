export const ExerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        'content-type': 'application/octet-stream',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '87229d1093mshf923f7bdafc3495p15da68jsn4fea4bfb504c',
        },
  };
  


  export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
      const data = await response.json();
      return data;
  };
  