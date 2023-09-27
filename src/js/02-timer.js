import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button[data-start]');
const dayEl = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minEl = document.querySelector('span[data-minutes]');
const secEl = document.querySelector('span[data-seconds]');
const divEl = document.querySelector('.timer')

btnEl.addEventListener('click', onBtnClick);

btnEl.setAttribute('disabled', true)

let timerId = null;

divEl.style.display = 'flex';
divEl.style.gap = '15px'

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            window.alert('Please choose a date in the future');
            btnEl.setAttribute('disabled', true)
        } else {
            btnEl.removeAttribute('disabled')
        }
    }  
};

flatpickr(dateEl, options);


function onBtnClick() {
  btnEl.setAttribute('disabled', true)
  dateEl.setAttribute('disabled', true)
  timerId = setInterval(() => {
    const userDate = new Date(dateEl.value);
    const timeToFinish = userDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    dayEl.textContent = addZero(days);
    hourEl.textContent = addZero(hours);
    minEl.textContent = addZero(minutes);
    secEl.textContent = addZero(seconds);

      if (timeToFinish < 1000) {
        window.alert('Your time is out')
        clearInterval(timerId);
        dateEl.removeAttribute('disabled');
    }
  }, 1000);
}

function addZero(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

