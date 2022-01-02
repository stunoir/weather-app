const CITY_FORM = document.querySelector('form')
const EL_CARD = document.querySelector('.card-weather')
const EL_DETAILS = document.querySelector('.details')
const EL_TIME = document.querySelector('img.time')
const EL_ICON = document.querySelector('.icon img')

const updateUI = (data) => {
  const { cityData, weatherData } = data

  EL_CARD.classList.remove('is-loaded')

  EL_DETAILS.innerHTML = `
    <h2 class="name">${cityData.EnglishName}</h2>
    <div class="condition">${weatherData.WeatherText}</div>
    <div>
      <span class="condition">${weatherData.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`

  const iconSrc = `assets/imgs/icons/${weatherData.WeatherIcon}.svg`
  EL_ICON.setAttribute('src', iconSrc)

  let timeSrc = weatherData.IsDayTime ? 'assets/imgs/day.png' : 'assets/imgs/night.png'
  EL_TIME.setAttribute('src', timeSrc)

  EL_CARD.classList.add('is-loaded')
}

const updateCity = async (city) => {
  const cityData = await getCity(city)
  const weatherData = await getWeather(cityData.Key)

  return {
    cityData,
    weatherData,
  }
}

CITY_FORM.addEventListener('submit', (e) => {
  e.preventDefault()

  const city = CITY_FORM.city.value.trim()
  CITY_FORM.reset()

  updateCity(city)
    .then((data) => {
      updateUI(data)
    })
    .catch((err) => {
      console.error(err)
    })
})
