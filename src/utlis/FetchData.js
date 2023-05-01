export const ExerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
        'content-type': 'application/octet-stream',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '9d5ccac717msh82468a215729f4ap1e5560jsn1b90fc6d7dfd',
        },
  };
  
  export const youtubeSearchOptions = {
    method: "GET",
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '9d5ccac717msh82468a215729f4ap1e5560jsn1b90fc6d7dfd',
    },
  };

  export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
      const data = await response.json();
      return data;
  };
  