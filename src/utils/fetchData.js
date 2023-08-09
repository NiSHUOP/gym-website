export const exerciseOptions = {
    method: 'GET',
    headers: {
          'X-RapidAPI-Key': 'e4bc59f626msh46a20f36f18a859p1937ddjsn3dba09c80486',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e4bc59f626msh46a20f36f18a859p1937ddjsn3dba09c80486',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};