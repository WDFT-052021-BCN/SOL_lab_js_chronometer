const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    console.log('tick');
    secUniElement.innerHTML = printSeconds()[1];
    secDecElement.innerHTML = printSeconds()[0];
    minUniElement.innerHTML = printMinutes()[1];
    minDecElement.innerHTML = printMinutes()[0];
  }, 1000);
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {}

function printSplit() {
  const timeMark = chronometer.split();
  const newLi = document.createElement('li');
  newLi.textContent = timeMark;
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    chronometer.stop();
    chronometer.reset();
    secUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    minDecElement.innerHTML = '0';
    clearSplits();
  } else {
    printSplit();
  }
});
