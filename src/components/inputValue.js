import refs from '../utils/refs.js'
import  debounce  from 'lodash.debounce';
import getCountries from "../services/api.js";
import getDefaultSetting from "../components/getDefaultSetting.js";


refs.input.addEventListener('input', debounce( getInputValue, 1000));

function getInputValue (event) {
    getDefaultSetting();
    event.preventDefault();
    const { target } = event;
    const input = target.value;
   getCountries(input);
}

export default getInputValue