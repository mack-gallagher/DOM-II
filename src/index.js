import './less/index.less'

function createRandomColor() {
  const randomNumOne = Math.floor(Math.random()*256);
  const randomNumTwo = Math.floor(Math.random()*256);
  const randomNumThree = Math.floor(Math.random()*256);
  return `rgb(${randomNumOne},${randomNumTwo},${randomNumThree})`;
}

const siteTitle = document.querySelector('h1.logo-heading'); // "Fun Bus"

const funBusHeader = document.querySelector('.home h2'); // "Welcome To Fun Bus!"

/* ***************************************** */
/* ** EVENTS: FADE IMGS ON MOUSEOVER, UNFADE IMGS ON MOUSEOUT ******** */
/* ***************************************** */

const imgs = document.querySelectorAll('img');

imgs.forEach(x => {x.addEventListener('mouseover', (event) => {
    console.log(x);
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
/* *** EVENT: CLICK => CONGRATULATIONS ****** */
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



/* *********************************************************************** */
/* *** EVENT: ON DOCUMENT LOAD INFORM USER OF MAKING BUTTONS CHANGE COLOR **/
/* *********************************************************************** */


const infoParent = document.querySelector('.content-destination');

window.addEventListener('load', (event) => {
  const testElem = document.createElement('div');
  testElem.textContent = "Press the '1', '2', or '3' keys to highlight destination picks below!";
  testElem.setAttribute('style','text-align: center; font-size: 3rem; color: red; margin-top: 5%');
  infoParent.appendChild(testElem);
  });

/* *********************************************************** */
/* * EVENT 2: KEYDOWON => MAKE DESTINATION BUTTONS FLASH ***** */
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
