import './style.css';
import mainPage from './modules/MainModule/main';
import menu from './modules/MenuModule/menu'
import about from './modules/AboutModule/about'

console.log('Hello world');

const contentEl = document.querySelector('.content');
mainPage(contentEl)

const header = document.querySelector('header');
const restaurantName = document.createElement('h2');
header.prepend(restaurantName);
restaurantName.innerHTML = "TOP Restaurant";

const btns = document.querySelectorAll('header > nav > button')

btns.forEach(item =>{
  item.addEventListener('click', ()=>{
    contentEl.innerHTML = '';
    
    if(item.id === "home"){
      return mainPage(contentEl);
    }else if(item.id === "menu"){
      return menu(contentEl);
    }else if(item.id === "about"){
      return about(contentEl);
    }
  })
})


// mainPage(contentEl)