import refs from '../utils/refs';

function refreshBg(date) {
    console.log(date);
  if (date.length == 0) {
    return;
  }
  let index = 0;

  let timerId = setInterval(function () {
    
    if (refs.input.value=="" || index >= date.length) {   
        clearInterval(timerId); 
         return;
    }
    
    else {
      changeStyleBg(date[index]);
      return (index += 1);
    }
  }, 3000);

  function changeStyleBg(date) {
    const img = date.largeImageURL;
    refs.wrapper.style.background = `URL(${img})`;
    refs.wrapper.style.backgroundRepeat = 'no-repeat';
    refs.wrapper.style.backgroundSize = 'cover';
  }
}

export default refreshBg;
