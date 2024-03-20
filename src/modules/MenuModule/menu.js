const menu = (contentEl)=>{
  
    const mainEl = document.createElement('main');
    contentEl.appendChild(mainEl);
  
    const sectionEl = document.createElement('section');
    mainEl.appendChild(sectionEl);
    sectionEl.classList.add('welcome');
  
    const h2El = document.createElement('h2');
    h2El.innerText = "The greatest varieties";
    sectionEl.appendChild(h2El);
  
    const h1El = document.createElement('h1');
    h1El.innerText = 'Menu: choose whatever you want!';
    sectionEl.appendChild(h1El);
  
    const pOne = document.createElement('p');
    pOne.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum doloremque officia adipisci architecto omnis. Culpa repudiandae quas ipsum cumque. Dolor corrupti modi facilis similique architecto harum. Voluptate, totam corrupti.'
    sectionEl.appendChild(pOne);
}

export default menu;