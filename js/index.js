
const giveLight = document.querySelector('.give-light');
const selectLanguage = document.querySelector('.lang-options');
const banner = document.querySelector('.home');


banner.addEventListener('mousemove',e =>{
    console.log('entered X =',e.pageX,e.pageY);
    giveLight.style.top = e.pageY + 'px';
    giveLight.style.left = e.pageX + 'px';
});


const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menu.addEventListener('click',e =>{
    clickedMenu();
});

const clickedMenu = () => {
    menu.classList.toggle('active');
    menuItems.classList.toggle('open');
}

// selectLanguage.addEventListener('onchange', (e) => {
//     console.log('changing language : '+ e.target.value);
//     location.pathname = e.target.value;
// });

const selectedLanguage = () => {
    console.log('changing language : '+ selectLanguage.value);
    location.pathname = selectLanguage.value;
};




