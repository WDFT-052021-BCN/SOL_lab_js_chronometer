class Chronometer {
  constructor() {
    this.currentTime = 0, 
    this.intervalId = null;
  }

  start(callback) {
    //!! Remember to save the interval execution in the intervalId property
    this.intervalId = setInterval(() => {
      
      //!!If there is a callback, execute it, it it isn't the code will ignore the execution
      if(callback) callback()
      this.currentTime += 1;
      //this.currentTime++

      //this.currentTime++
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    
    // if (value < 10) {

    //   return '0' + String(value);
    
    // } else {
    //   return value.toString();
    // }

    //One line option
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    //Remember you can use a function within a function and pass the return as an argument for another function
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;

    /*return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    */
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
