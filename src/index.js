import './less/index.less'

function createRandomColor() {
  const randomNumOne = Math.floor(Math.random()*256);
  const randomNumTwo = Math.floor(Math.random()*256);
  const randomNumThree = Math.floor(Math.random()*256);
  return `rgb(${randomNumOne},${randomNumTwo},${randomNumThree})`;
}


/* *********************************************** */
/* ** EVENT 1: DBLCLICK => CHANGE TITLE COLOR ****** */
/* *********************************************** */

const siteTitle = document.querySelector('h1.logo-heading'); // "Fun Bus"

siteTitle.addEventListener('dblclick',(event) => {
  siteTitle.setAttribute('style',`color: ${createRandomColor()}`);
});

/* *********************************************** */
/* *********************************************** */
/* *********************************************** */

const funBusHeader = document.querySelector('.home h2'); // "Welcome To Fun Bus!"

/* ************************************************************************* */
/* ** EVENTS 2 & 3: MOUSEOVER => FADE IMGS, MOUSEOUT => UNFADE IMGS ******** */
/* ************************************************************************* */

const imgs = document.querySelectorAll('img');

imgs.forEach(x => {x.addEventListener('mouseover', (event) => {
    x.setAttribute('style','filter: grayscale(50%)');
  });
});

imgs.forEach(x => {x.addEventListener('mouseout', (event) => {
    x.setAttribute('style','filter: grayscale(0%)');
  });
});

/* ****************************************** */
/* ****************************************** */
/* ****************************************** */

/* ****************************************** */
/* *** EVENT 4: CLICK => CONGRATULATIONS ****** */
/* ****************************************** */

const destButtons = document.querySelectorAll('.destination .btn');

destButtons.forEach(x => {
  x.addEventListener('click', (event) => {
    const prevDest = document.querySelector('.dest-choice');
    if (prevDest !== null) {
      document.body.removeChild(prevDest);
    }

    const ourRandomColor = createRandomColor();
    const newTextChild = document.createElement('div');
    newTextChild.setAttribute("style",`width: 100%; font-size: 10rem; color: ${ourRandomColor}; text-align: center;`);
    newTextChild.setAttribute("class","dest-choice");
    newTextChild.textContent = "congrats on picking a destination!";

    document.body.appendChild(newTextChild);
  });
});

/* *********************************** */
/* *********************************** */
/* *********************************** */


/* ********************************************************************************************* */
/* *** EVENT 5: CHANGE | + | MAKING BUTTONS LINK TO BOTTOM OF PAGE TO DEMONSTRATE PREVENTDEFAULT */
/* ********************************************************************************************* */

const lowElement = document.querySelector('footer p');
window.addEventListener('load', (event) => {
  lowElement.id = 'page-bottom';
});

const navButtons = document.querySelectorAll('.nav-link');

window.addEventListener('load', (event) => {
  navButtons.forEach(x => {x.href = "#page-bottom"});
});

const explainerParent = document.querySelector('.nav-container');
const explainer = document.createElement('div');
const explainerText = document.createElement('p');
explainerText.textContent = 'Check the box to toggle default behavior for the nav links!';

const explainerInput = document.createElement('input');
explainerInput.setAttribute('type','checkbox');

function handleClick(event) {
    this.setAttribute('style',`color: ${createRandomColor()};`);
    event.preventDefault();
    this.classList.add('default-off');
}

explainerInput.addEventListener('change',(event) => {
  for (let i = 0; i < navButtons.length; i++) {
    if (navButtons[i].classList.contains('default-off')) {
      navButtons[i].removeEventListener('click',handleClick);
      navButtons[i].classList.remove('default-off');
    } else {
      navButtons[i].addEventListener('click', handleClick);
    }
  }
});

explainer.appendChild(explainerText);
explainer.appendChild(explainerInput);

explainerParent.appendChild(explainer);


/* ****************************************** */
/* ****************************************** */
/* ****************************************** */

/* **************************************************************** */
/* *** EVENT 6: LOAD => INFORM USER OF MAKING BUTTONS CHANGE COLOR **/
/* **************************************************************** */


const infoParent = document.querySelector('.content-destination');

window.addEventListener('load', (event) => {
  const testElem = document.createElement('div');
  testElem.textContent = "Press the '1', '2', or '3' keys to highlight destination picks below!";
  testElem.setAttribute('style','text-align: center; font-size: 3rem; color: red; margin-top: 5%');
  infoParent.appendChild(testElem);
  });

/* *********************************** */
/* *********************************** */
/* *********************************** */

/* *********************************************************** */
/* * EVENT 7: KEYDOWN => MAKE DESTINATION BUTTONS FLASH ***** */
/* *********************************************************** */

destButtons[0].setAttribute('data-key','49');
destButtons[1].setAttribute('data-key','50');
destButtons[2].setAttribute('data-key','51');

window.addEventListener('keydown', (event) => {
  if (event.keyCode >= 49 && event.keyCode <= 51) {
    const ourButton = document.querySelector(`div[data-key="${event.keyCode}"]`);
    ourButton.setAttribute('style',`background-color: ${createRandomColor()}`);
  }
});

/* *********************************** */
/* *********************************** */
/* *********************************** */

/* *********************************** */
/* ** EVENT 8: REPORT WINDOW SIZE ****** */
/* *********************************** */

const windowSizeReporter = document.createElement('p');

window.addEventListener('resize', (event) => {
  windowSizeReporter.textContent = `Current window height: ${window.innerHeight} | Current window width: ${window.innerWidth}`;
  document.body.appendChild(windowSizeReporter);
});

/* *********************************** */
/* *********************************** */
/* *********************************** */
