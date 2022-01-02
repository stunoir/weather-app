const API_KEY = 'q59ie0iGmcbLc9qJT7Sh2SLV7H1nKu0w'

const getCity = async (city) => {
  const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${API_KEY}&q=${city}`

  const response = await fetch(base_url + query)
  const data = await response.json()
  return data[0]
}

const getWeather = async (id) => {
  const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${API_KEY}`

  const response = await fetch(base_url + query)
  const data = await response.json()
  return data[0]
}
