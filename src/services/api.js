const URL = 'https://restcountries.eu/rest/v2/name/';

import card from '../templates/country-card.hbs';
import menuItems from '../templates/menu-items.hbs';
import refreshCard from '../components/refreshCard.js';
import refreshMenu from '../components/refreshMenu.js';
import refs from '../utils/refs';
import { error, info } from '../utils/pnotify.js';


function getCountries(country) {
  fetch(URL + country).then(response =>
    response.json().then(data => {
      if (data.length === 1) {
        return refreshCard(data, refs.card, card);
      }
      if (data.length >= 2 && data.length <= 10) {
      
        return refreshMenu(data, refs.menu, menuItems);
      }
      if (data.length > 10) {
        info();
      }
      else {
        error();
      }
    }).catch(err => console.warn(err))
  );
}



export default getCountries;
