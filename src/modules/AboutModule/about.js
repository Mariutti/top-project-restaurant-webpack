import './about.css'

const about = (contentEl)=>{
  
  const mainEl = document.createElement('main');
  contentEl.appendChild(mainEl);

  const sectionEl = document.createElement('section');
  mainEl.appendChild(sectionEl);
  sectionEl.classList.add('welcome');

  const h2El = document.createElement('h2');
  h2El.innerText = "Who we are.";
  sectionEl.appendChild(h2El);

  const h1El = document.createElement('h1');
  h1El.innerText = 'About us: you\'ll be enchanted!';
  h1El.classList.add('aboutH1')
  sectionEl.appendChild(h1El);

  const pOne = document.createElement('p');
  pOne.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum doloremque officia adipisci architecto omnis. Culpa repudiandae quas ipsum cumque. Dolor corrupti modi facilis similique architecto harum. Voluptate, totam corrupti.'
  sectionEl.appendChild(pOne);
}

export default about;