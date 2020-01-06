"use strict";
(function () {
  const optionsData = {
    nav: [
      { key: 1, display: 'Home' },
      { key: 2, display: 'Dashboard' },
      { key: 3, display: 'Monitoring' }
    ],
    orderItem: [
      { key: 'iphone8', display: 'IPhone 8GB' },
      { key: 'iphone16', display: 'IPhone 16GB' }
    ]
  };
  const elDataAttr = `*[data-component = 'dropdown']`;
  const elDataOptionsKey = 'optionsId';

  class DropDown {
    constructor(nodeEl) {
      this.dropdownNodeEl = nodeEl;
      this.addEventListeners();
      this.active = false;
    }
    addEventListeners = () => {
      this.dropdownNodeEl.addEventListener('click', (e) => {
        console.log('button clicked');
        e.stopPropagation();
        e.preventDefault();
        this.resetOptions();
        this.toggleOptions(e.currentTarget);
      });
    }
    resetOptions = () => {
      document.querySelectorAll('.dropdown-data').forEach(el => {
        el.parentNode.removeChild(el);
      });
    }
    toggleOptions = (targetEl) => {
      if (this.active) {
        this.active = false;
        this.resetOptions();
      } else {
        this.active = true;
        const optionsDataKey = targetEl.dataset[elDataOptionsKey];
        const data = optionsData[optionsDataKey]
        if (data && data.length) {
          let tpl = `<div class='dropdown-data active'> <ul class='dropdown-list'>`;
          for (let i = 0; i < data.length; i++) {
            tpl = `${tpl} <li class='dropdown-item' data-key='${data[i].key}'>
            <a href="#">${data[i].display}</a></li>`
          }
          tpl = `${tpl}</ul></div>`;
          targetEl.insertAdjacentHTML('afterend', tpl);
        }
      }
    }
  }
  document.querySelectorAll(elDataAttr).forEach(function (dropdownNodeEl) {
    const dropdownObj = new DropDown(dropdownNodeEl);
  });
})();