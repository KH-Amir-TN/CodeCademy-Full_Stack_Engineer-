// Foursquare API Info
const clientId = 'IKV4ST1YTHF2KOLFUWYBRAHJZALADHCYYYKVU0SSQBYF3EZR';
const clientSecret = '0E3YS5P4L2UDXZNVK5ZIWPBB01DQR5UCLULQ4Z1JIH4TWH5I';
const url = 'https://api.foursquare.com/v2/venues/explore?';

const parameter = 'near=';

// OpenWeather Info
const openWeatherKey = '4dd4323357790b3d70db440bf6878115';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const limit = 10;

  const urlToFetch = `${url}${parameter}${city}&limit=${limit}&client_id=${clientId}&client_secret=${clientSecret}&v=20202612` ;

  try
    {
      const response = await fetch(urlToFetch);

      if(response.ok)
        {
          const jsonResponse = await response.json();
          const venues = jsonResponse.response.groups[0].items.map( item => item.venue);
          return venues;
          
        }
      else
        {
          throw new Error('Request failed!');
        }
    }
  catch(error)
    {
      console.log(error);
    }

}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;

  try
    {
      const response = await fetch(urlToFetch);
      if(response.ok)
        {
          const jsonResponse = await response.json();
          return jsonResponse;
        }
      throw new Error('Request failed!')
    }
  catch(error)
    {
      console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
  const venue = venues[index];
  const venueIcon = venue.categories[0].icon;
  const bg = 'bg_64';
  const venueImgSrc = `${venueIcon.prefix}${bg}${venueIcon.suffix}`;
  const name = venue.name;
  const location = venue.location;
  let venueContent = createVenueHTML(name, location ,venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}



const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => {renderVenues(venues)});
  getForecast().then(day => { renderForecast(day) });
  return false;
}

$submit.click(executeSearch)