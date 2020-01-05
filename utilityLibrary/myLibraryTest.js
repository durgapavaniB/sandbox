function myLibraryTest() {
  class myLibraryTest {
    scrollCount = 0;
    thottleScrollCount = 0;
    keypressCount = 0;
    debounceKeypressCount = 0;
    constructor() { }
    testScroll = () => {
      this.scrollCount++;
      document.querySelector('#scrollCount').textContent = this.scrollCount;
    }
    testScrollThrottle = () => { //Expensive function. Wrap in throttler to execute at smaller rate.
      this.thottleScrollCount++;
      document.querySelector('#scrollCountThrottled').textContent = this.thottleScrollCount;
    }

    keypress = () => {
      this.keypressCount++;
      document.querySelector('#keypressCount').textContent = this.keypressCount;
    }
    keypressDebounce = () => { //Expensive function. Wrap in debounce to execute only after certain delay
      this.debounceKeypressCount++;
      document.querySelector('#keypressCountDebounced').textContent = this.debounceKeypressCount;
    }
  }

  var testObj = new myLibraryTest(10, 20);

  /*START:  Test debounce and throttle */
  window.addEventListener('scroll', testObj.testScroll);
  const throttledFn = $.throttle(testObj.testScrollThrottle, 1000);
  window.addEventListener('scroll', throttledFn);
  const searchInputEl = document.querySelector('#searchInput');
  searchInputEl.addEventListener('keypress', testObj.keypress);
  const debouncedFn = $.debounce(testObj.keypressDebounce, 500);
  searchInputEl.addEventListener('keypress', debouncedFn);
  /*END:  Test debounce and throttle */

  /*START: Flatten */
  const sampleInput = [['1', '2'], '3', ['4', ['5', ['6']]]];
  const buttonEl = document.querySelector('#flattenArray');
  buttonEl.addEventListener('click', () => {
    let output = $.flatten(sampleInput, 1);
    document.querySelector('#flattenedOutput').textContent = JSON.stringify(output);
  });
  /*END: Flatten  */

  /*START: Serialize*/
  const sampleJSONInput = { 'var1': 1, 'var2': 2, 'var3': { 'a': 10, 'b': ['1', '2'] }, 'var4': 4 };
  const buttonElStringify = document.querySelector('#StringifyData');
  buttonElStringify.addEventListener('click', () => {
    let output = $.stringify(sampleJSONInput);
    document.querySelector('#StringifiedData').textContent = output;
  });
  /*END: Serialize*/



}

