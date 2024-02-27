
export const exerciseOptions = { 
    
  method: 'GET',

  // params: {limit: '2000'},
  headers: {
    'X-RapidAPI-Key': 'f2f44d9e18mshd9cdbc4c2594146p1a7353jsnd041a1a869b5',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  }

export const youtubeOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': 'f2f44d9e18mshd9cdbc4c2594146p1a7353jsnd041a1a869b5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData =  async (url, options) => {
    const response = await fetch (url, options)
    const data = await response.json()
    return data
} 