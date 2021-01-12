import getImg from '../services/pixabayApi.js';
import getNameCountry from './getNameCountry.js';

function refreshCard (data, refs, hbs)  {
    console.log(data);
    let country= getNameCountry(data[0].name);
    getImg(country);
    const cardCountry= data.map(e => hbs(e)).join('\n');
    refs.insertAdjacentHTML('afterbegin', cardCountry);
  }
  
  export default refreshCard;
  