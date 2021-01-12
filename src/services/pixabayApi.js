import refreshBg from '../components/refreshBg.js'


const URL = 'https://pixabay.com/api/';
const key = '14644846-07a6d79481414866d9d75e37a';

function getImg(date) {

    const request =
        URL + `?image_type=photo&orientation=horizontal&q=${date}&category=places&key=${key}`;

        console.log(request);
    return fetch(request)
        .then(response => response.json())
        .then(date => refreshBg(date.hits));
}

export default getImg;