const URL = 'https://restcountries.eu/rest/v2/name/';

import card from '../templates/country-card.hbs';
import refreshCard from '../components/refreshCard.js';
import refs from '../utils/refs';


refs.menu.addEventListener('click', getOneCountry);

function getOneCountry(event) {
  refs.menu.innerHTML="";
  refs.menu.parentNode.classList.remove('is-open');

  const country = event.target.innerText;
  
  fetch(URL + country).then(response =>
    response
      .json()
      .then(data => {
        return refreshCard(data, refs.card, card);
      })
      .catch(err => console.warn(err))
  );
}

export default getOneCountry;
