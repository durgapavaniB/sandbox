(function () {
  let tpl = `
    <button class="carousel-button carousel-left-button" data-tabindex="1" aria-label="Carousel left button">
        <img src="img/left.svg"/>
      </button>
      <div class="carousel-content">
          <ul class="carousel-content-list">
              <li data-id="1" class="carousel-img curr-selected"> 
                <img src="img/cat1.jpg" aria-label="cat image 1" data-tabindex="1"/> 
              </li>
              <li data-id="2" class="carousel-img"> 
                <img src="img/cat2.jpg" aria-label="cat image 2" data-tabindex="2"/>
               </li>
              <li data-id="3" class="carousel-img"> 
                <img src="img/cat3.jpg" aria-label="cat image 3" data-tabindex="3"/> 
              </li>
            </ul>
      </div>
      <button class="carousel-button carousel-right-button" aria-label="Carousel right button" data-tabindex="3">
        <img src="img/right.svg"/>
      </button>
      <div class="carousel-nav-container">
          <ul class="carousel-nav-list">
              <li data-id="1" class="carousel-nav curr-selected">  </li>
              <li data-id="2" class="carousel-nav">  </li>
              <li data-id="3" class="carousel-nav">  </li>
          </ul>
      </div>
  `;

  class Carousel {
    constructor(images = [], domData = {}, options = {}) {
      this.images = images;
      this.maxImages = this.images.length ? this.images.length : 3;
      this.domData = domData;
      this.options = options;
      if (this.options.imageWidth)
        this.imageWidth = this.options.imageWidth;

      //Add component template
      const rootEl = document.querySelector(`div[${this.domData.rootDataAttr}]`);
      rootEl.innerHTML = tpl;

      //setup Event handlers
      this.leftButton = document.querySelector(`.${this.domData.buttons.leftBClass}`);
      this.rightButton = document.querySelector(`.${this.domData.buttons.rightBClass}`);
      this.navButton = document.querySelector(`.${this.domData.navParent}`);
      this.leftButton.onclick = this.slideLeft;
      this.rightButton.onclick = this.slideRight;
      this.navButton.onclick = this.navItemClickHandler;

      //Initial state
      this.disableLeftButton();

      //Set Initial poistions for list items.
      const listItems = document.querySelectorAll(`.${this.domData.imageParent} li`);
      listItems.forEach((listItem) => {
        const elIndex = listItem.dataset['id'];
        const leftPosition = this.getcarouselItemWidth() * (elIndex - 1);
        listItem.style.left = `${leftPosition}px`;
      });
    }
    setImages = (images) => {
      this.images = images;
    }
    setLoadingData = () => {
      this.loading = true;
    }
    hideLoadingData = () => {
      this.loading = false;
    }
    getSelectedImageNode = () => {
      return document.querySelector(`.${this.domData.images.imageClass}.${this.domData.images.imgSelectedClass}`);
    }
    getSelectedNav = () => {
      return document.querySelector(`.${this.domData.nav.NavItemClass}.${this.domData.nav.NavItemSelectedClass}`);
    }
    getcarouselItemWidth = () => {
      //get image width including padding and border. getBoundingRectangle.width?
      if (!this.imageWidth)
        this.imageWidth = document.querySelector(`.${this.domData.images.imageClass}`).getBoundingClientRect().width;
      return this.imageWidth;
    }
    resetSelectedImg = (currEl) => {
      const imgNode = currEl ? currEl : this.getSelectedImageNode();
      imgNode.classList.remove(`${this.domData.images.imgSelectedClass}`);
    }
    setSelectedImg = (currEl) => {
      const imgNode = currEl ? currEl : this.getSelectedImageNode();
      imgNode.classList.add(`${this.domData.nav.NavItemSelectedClass}`);
    }
    resetSelectedNavItem = (currEl) => {
      const navNode = currEl ? currEl : this.getSelectedNav();
      navNode.classList.remove(`${this.domData.nav.NavItemSelectedClass}`);
    }
    setSelectedNavItem = (currEl) => {
      const navNode = currEl ? currEl : this.getSelectedNav();
      navNode.classList.add(`${this.domData.nav.NavItemSelectedClass}`);
    }
    disableLeftButton = () => {
      this.leftButton.classList.add('disable');
    }
    disableRightButton = () => {
      this.rightButton.classList.add('disable');
    }
    enableButtons = () => {
      this.leftButton.classList.remove('disable');
      this.rightButton.classList.remove('disable');
    }
    slideLeft = () => {
      const currEl = this.getSelectedImageNode(), targetEl = currEl.previousElementSibling;
      const currNavEl = this.getSelectedNav(), targetNavEl = currNavEl.previousElementSibling;
      if (!targetEl) return;
      this.updateImages(currEl, targetEl);
      this.updateNav(currNavEl, targetNavEl);
    }
    slideRight = () => {
      const currEl = this.getSelectedImageNode(), targetEl = currEl.nextElementSibling;
      const currNavEl = this.getSelectedNav(), targetNavEl = currNavEl.nextElementSibling;
      if (!targetEl) return;
      this.updateImages(currEl, targetEl);
      this.updateNav(currNavEl, targetNavEl);
    }
    getImageElementById = (id) => {
      return document.querySelector(`.${this.domData.imageParent} li[data-id="${id}"]`);
    }
    navItemClickHandler = (e) => {
      let targetNavEl = e.target;
      const currNavEl = this.getSelectedNav();
      this.updateNav(currNavEl, targetNavEl);

      const currEl = this.getSelectedImageNode(),
        targetEl = this.getImageElementById(targetNavEl.dataset['id']);
      this.updateImages(currEl, targetEl);
    }
    updateImages = (currEl, targetEl) => {
      this.enableButtons();
      //reset selected class for currEl
      this.resetSelectedImg(currEl);
      //add selected class to target El
      this.setSelectedImg(targetEl);
      //Slide Carousel by an image width;
      const targetElIndex = targetEl.dataset['id'];
      const translateBy = this.getcarouselItemWidth() * (targetElIndex - 1);
      document.querySelector(`.${this.domData.imageParent}`).style.transform = `translateX(-${translateBy}px)`;

      //Add 'disable' class for prev and next buttons based on currentImage
      if (targetEl.dataset['id'] === "1")
        this.disableLeftButton();
      if (targetEl.dataset['id'] === this.maxImages + "")
        this.disableRightButton();
    }
    updateNav = (currNavEl, targetNavEl) => {
      //reset selected class for currEl
      this.resetSelectedNavItem(currNavEl);
      //add selected class to target El
      this.setSelectedNavItem(targetNavEl);
    }
  }

  let images = [];
  let domData = {
    rootDataAttr: 'data-Carousel-wrap',
    buttons: {
      leftBClass: 'carousel-left-button',
      rightBClass: 'carousel-right-button'
    },
    imageParent: 'carousel-content-list',
    images: {
      imageClass: 'carousel-img',
      imgSelectedClass: 'curr-selected'
    },
    nav: {
      NavItemClass: 'carousel-nav',
      NavItemSelectedClass: 'curr-selected'
    },
    navParent: 'carousel-nav-list'
  }
  const corousalObj = new Carousel(images, domData);
  //rest API integration
  /*window.setTimeout(() => {
    
  }, 1000);*/
})();
