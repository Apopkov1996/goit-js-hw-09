const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onBtnStartClik);
btnStopEl.addEventListener('click', oBtnStopClick);

let intervalId = null;

btnStopEl.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onBtnStartClik() {
    btnStartEl.setAttribute('disabled', true)
    btnStopEl.removeAttribute('disabled')
    intervalId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor(); }, 1000);
};


function oBtnStopClick() {
    btnStopEl.setAttribute('disabled', true)
    btnStartEl.removeAttribute('disabled')
    clearInterval(intervalId)

};

