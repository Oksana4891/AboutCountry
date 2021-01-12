function refreshMenu (data, refs, hbs)  {
     
    refs.parentNode.classList.add('is-open');
    const listCountry = data.map(e => hbs(e)).join('\n');
    refs.insertAdjacentHTML('afterbegin', listCountry);
  }

  
  export default refreshMenu;