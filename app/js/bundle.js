/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/modules/burger.js":
/*!**********************************!*\
  !*** ./app/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const burgerBtn = document.querySelector('#js-hamburger');
  const nav = document.querySelector('.header__nav');
  const navLink = document.querySelectorAll('.header__nav-link');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('activate');

    if (burgerBtn.classList.contains('activate')) {
      nav.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  navLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      nav.classList.remove('active');
      burgerBtn.classList.remove('activate');
      document.body.style.overflow = '';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./app/js/modules/filterMenu.js":
/*!**************************************!*\
  !*** ./app/js/modules/filterMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filterMenu = () => {
  const cardsCenter = document.querySelector('.menu__inner');
  let cardsAmount = document.querySelector('.amount');
  let cardsTotal = document.querySelector('.total');
  const cartContent = document.querySelector('.header__cart-wrapper');
  const cartOverlay = document.querySelector('.header__cart-overlay');
  const footerReset = document.querySelector('.footer__reset');
  const closeCardBtn = document.querySelector('.header__cart-close');
  const cartBtn = document.querySelector('.header__cart');
  let cart = [];
  let buttonsDOM = [];

  class Products {
    async getProducts() {
      try {
        let result = await fetch('../products.json');
        let data = await result.json();
        let products = data.items;
        products = products.map(item => {
          const {
            title,
            price
          } = item.fields;
          const {
            id,
            category
          } = item.sys;
          const image = item.fields.image.fields.file.url;
          return {
            title,
            price,
            id,
            category,
            image
          };
        });
        return products;
      } catch (error) {
        console.log(error);
      }
    }

  }

  class UI {
    displayProducts(products) {
      let result = '';
      products.forEach(product => {
        result += `
            <div class="menu__item">
            <img src=${product.image} alt="menu" class="menu__img">
        <div class="menu__content">
                <div class="menu__subtitle">${product.title}</div>
                <div class="menu__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro architecto reprehenderit</div>
            <div class="menu__info">
            <div class="menu__amount">Price</div>
                <div class="menu__price">${product.price}$</div>
            </div>
                <button type="button" class="menu__addtocart" data-id=${product.id}>Add to cart</button>
            </div>
         </div>
            `;
      });
      cardsCenter.innerHTML = result;
    } // filterProducts(products) {
    //     const filterBtns = [...document.querySelectorAll('.menu__btn')]
    //     filterBtns.forEach(btn => {
    //         btn.addEventListener('click', (e) => {
    //             const categories = e.currentTarget.dataset.id
    //             console.log(products.category);
    //         })
    //     })
    // }


    getBagButtons() {
      const cartBtns = [...document.querySelectorAll('.menu__addtocart')];
      buttonsDOM = cartBtns;
      cartBtns.forEach(button => {
        let id = button.dataset.id;
        let inCart = cart.find(item => item.id === id);

        if (inCart) {
          button.innerText = 'add more';
        }

        button.addEventListener('click', e => {
          e.target.innerText = 'Add More'; //получить продукты

          let cartItem = { ...Storage.getProduct(id),
            amount: 1
          }; //добавить в корзину

          cart = [...cart, cartItem];
          console.log(cart); //добавить в локальное хранилище

          Storage.saveCart(cart); //установить значение карточек

          this.setCartValues(cart); //отобразить карточку

          this.addCartItem(cartItem); //показать карточку

          this.showCart();
        });
      });
    }

    setCartValues(cart) {
      let tempTotal = 0;
      let itemsTotal = 0;
      cart.map(item => {
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount;
      });
      cardsTotal.innerText = parseFloat(tempTotal.toFixed(2));
      cardsAmount.innerText = itemsTotal;
    }

    addCartItem(item) {
      const div = document.createElement('div');
      div.classList.add('header__cart-content');
      div.innerHTML = `
    <img src=${item.image} alt="product" class="header__cart-image">
    <div class="header__cart-info">
        <div class="header__cart-flex">
        <div class="header__cart-title">${item.title}</div>
        <div class="header__cart-price">${item.price} $</div>
    </div>
    </div>
    <img src="images/cart/close.svg" alt="close" class="header__cart-close">
    <img src="images/cart/delete.svg" alt="bucket" class="header__cart-remove">
    `;
      cartContent.appendChild(div);
    }

    showCart() {
      cartOverlay.classList.add('showCart');
    }

    setupAPP() {
      cart = Storage.getCart();
      this.setCartValues();
      this.populateCart(cart);
      cartBtn.addEventListener('click', this.showCart);
      closeCardBtn.addEventListener('click', this.hideCart);
    }

    populateCart(cart) {
      cart.forEach(item => this.addCartItem(item));
    }

    hideCart() {
      cartOverlay.classList.remove('showCart');
    }

  }

  class Storage {
    static saveProducts(products) {
      localStorage.setItem("products", JSON.stringify(products));
    }

    static getProduct(id) {
      let products = JSON.parse(localStorage.getItem('products'));
      return products.find(product => product.id === id);
    }

    static saveCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart() {
      return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }

  }

  const ui = new UI();
  const products = new Products(); // настройка приложения
  // ui.setupAPP()

  products.getProducts().then(products => {
    ui.displayProducts(products);
    Storage.saveProducts(products);
  }).then(() => {
    ui.getBagButtons();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filterMenu);

/***/ }),

/***/ "./app/js/modules/mail.js":
/*!********************************!*\
  !*** ./app/js/modules/mail.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mail = () => {
  const phoneMask = document.querySelector('.order__phone');
  const im = new Inputmask("+7 (999) 999 99 99", {
    showMaskOnHover: false
  });
  im.mask(phoneMask);

  let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        };

        xhr.open("POST", "mail.php", true);
        xhr.send(formData);
        form.reset();
      }
    });
  };

  validateForms('.order__form', {
    email: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      tel: true
    }
  }, '.thanks-popup', '.send goal');
};

/* harmony default export */ __webpack_exports__["default"] = (mail);

/***/ }),

/***/ "./app/js/modules/map.js":
/*!*******************************!*\
  !*** ./app/js/modules/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const map = () => {
  function loadScript() {
    const elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDGgGu0VTYTQAtYvAdDC0Sj1N9OYnlsHgw&callback=initMap';
    document.querySelectorAll('body')[0].append(elem);
  }

  function initMap() {
    const myLatLng = {
      lat: 25.77821719595723,
      lng: -80.20044979735152
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "d8a11ce4e6e4563e",
      zoom: 14,
      center: myLatLng,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true
    });
    const marker = new google.maps.Marker({
      position: {
        lat: 25.778617,
        lng: -80.199857
      },
      map,
      title: "Hello World!",
      optimized: false,
      icon: {
        url: '../../images/location.svg',
        scaledSize: new google.maps.Size(70, 70)
      }
    });
    const infowindow = new google.maps.InfoWindow({
      content: "thanks for click!"
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false
      });
    });
  }

  setTimeout(loadScript, 1000);
  setTimeout(initMap, 2000);
};

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./app/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./app/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scroll = () => {
  window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.header');
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 550) {
      navBar.classList.add('fixed');
    } else {
      navBar.classList.remove('fixed');
    }
  });
  const menuLinks = document.querySelectorAll('[data-scroll]');

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', menuLinkClick);
    });
  }

  const headerLogo = document.querySelectorAll('.header__logo');
  headerLogo.forEach(logo => {
    logo.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({
        top: (0, 0),
        behavior: 'smooth'
      });
    });
  });

  function menuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
      const goToBlock = document.querySelector(menuLink.dataset.scroll);
      const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
      window.scrollTo({
        top: goToBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./app/js/modules/slider.js":
/*!**********************************!*\
  !*** ./app/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


const slider = () => {
  const swiperMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.features__swiper', {
    loop: false,
    grabCursor: true,
    slidesPerView: 3,
    speed: 1000,
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      250: {
        slidesPerView: 1
      },
      909: {
        slidesPerView: 2
      },
      1391: {
        slidesPerView: 3
      }
    }
  });
  const tipsContainer = document.querySelector('.features__swiper');
  tipsContainer.addEventListener('mouseenter', () => {
    swiperMain.autoplay.stop();
  });
  tipsContainer.addEventListener('mouseleave', () => {
    swiperMain.autoplay.start();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./app/js/script.js":
/*!**************************!*\
  !*** ./app/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var just_validate_dist_js_just_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! just-validate/dist/js/just-validate */ "./node_modules/just-validate/dist/js/just-validate.js");
/* harmony import */ var just_validate_dist_js_just_validate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(just_validate_dist_js_just_validate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./app/js/modules/slider.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/map */ "./app/js/modules/map.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/burger */ "./app/js/modules/burger.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll */ "./app/js/modules/scroll.js");
/* harmony import */ var _modules_mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/mail */ "./app/js/modules/mail.js");
/* harmony import */ var _modules_filterMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/filterMenu */ "./app/js/modules/filterMenu.js");
__webpack_require__(/*! es6-promise-polyfill */ "./node_modules/es6-promise-polyfill/promise.js");



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]]);








window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_map__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_mail__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_filterMenu__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const date = document.querySelector('.footer__text span');
  date.textContent = new Date().getFullYear();
});

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/*! exports provided: default, $, add, addClass, animate, animationEnd, append, appendTo, attr, blur, change, children, click, closest, css, data, dataset, detach, each, empty, eq, filter, find, focus, focusin, focusout, hasClass, height, hide, html, index, insertAfter, insertBefore, is, keydown, keypress, keyup, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup, next, nextAll, off, offset, on, once, outerHeight, outerWidth, parent, parents, prepend, prependTo, prev, prevAll, prop, remove, removeAttr, removeClass, removeData, resize, scroll, scrollLeft, scrollTo, scrollTop, show, siblings, stop, styles, submit, text, toggleClass, touchend, touchmove, touchstart, transform, transition, transitionEnd, trigger, val, value, width */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ __webpack_exports__["default"] = ($);



/***/ }),

/***/ "./node_modules/es6-promise-polyfill/promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise-polyfill/promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(global){

//
// Check for native Promise and it has correct interface
//

var NativePromise = global['Promise'];
var nativePromiseSupported =
  NativePromise &&
  // Some of these methods are missing from
  // Firefox/Chrome experimental implementations
  'resolve' in NativePromise &&
  'reject' in NativePromise &&
  'all' in NativePromise &&
  'race' in NativePromise &&
  // Older version of the spec had a resolver object
  // as the arg rather than a function
  (function(){
    var resolve;
    new NativePromise(function(r){ resolve = r; });
    return typeof resolve === 'function';
  })();


//
// export if necessary
//

if ( true && exports)
{
  // node.js
  exports.Promise = nativePromiseSupported ? NativePromise : Promise;
  exports.Polyfill = Promise;
}
else
{
  // AMD
  if (true)
  {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return nativePromiseSupported ? NativePromise : Promise;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else
  {}
}


//
// Polyfill
//

var PENDING = 'pending';
var SEALED = 'sealed';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var NOOP = function(){};

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

// async calls
var asyncSetTimer = typeof setImmediate !== 'undefined' ? setImmediate : setTimeout;
var asyncQueue = [];
var asyncTimer;

function asyncFlush(){
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++)
    asyncQueue[i][0](asyncQueue[i][1]);

  // reset async asyncQueue
  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg){
  asyncQueue.push([callback, arg]);

  if (!asyncTimer)
  {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}


function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber){
  var owner = subscriber.owner;
  var settled = owner.state_;
  var value = owner.data_;  
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function')
  {
    settled = FULFILLED;
    try {
      value = callback(value);
    } catch(e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value))
  {
    if (settled === FULFILLED)
      resolve(promise, value);

    if (settled === REJECTED)
      reject(promise, value);
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value)
      throw new TypeError('A promises callback cannot return that same promise.');

    if (value && (typeof value === 'function' || typeof value === 'object'))
    {
      var then = value.then;  // then should be retrived only once

      if (typeof then === 'function')
      {
        then.call(value, function(val){
          if (!resolved)
          {
            resolved = true;

            if (value !== val)
              resolve(promise, val);
            else
              fulfill(promise, val);
          }
        }, function(reason){
          if (!resolved)
          {
            resolved = true;

            reject(promise, reason);
          }
        });

        return true;
      }
    }
  } catch (e) {
    if (!resolved)
      reject(promise, e);

    return true;
  }

  return false;
}

function resolve(promise, value){
  if (promise === value || !handleThenable(promise, value))
    fulfill(promise, value);
}

function fulfill(promise, value){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = value;

    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason){
  if (promise.state_ === PENDING)
  {
    promise.state_ = SEALED;
    promise.data_ = reason;

    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  var callbacks = promise.then_;
  promise.then_ = undefined;

  for (var i = 0; i < callbacks.length; i++) {
    invokeCallback(callbacks[i]);
  }
}

function publishFulfillment(promise){
  promise.state_ = FULFILLED;
  publish(promise);
}

function publishRejection(promise){
  promise.state_ = REJECTED;
  publish(promise);
}

/**
* @class
*/
function Promise(resolver){
  if (typeof resolver !== 'function')
    throw new TypeError('Promise constructor takes a function argument');

  if (this instanceof Promise === false)
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');

  this.then_ = [];

  invokeResolver(resolver, this);
}

Promise.prototype = {
  constructor: Promise,

  state_: PENDING,
  then_: null,
  data_: undefined,

  then: function(onFulfillment, onRejection){
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if (this.state_ === FULFILLED || this.state_ === REJECTED)
    {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    }
    else
    {
      // subscribe
      this.then_.push(subscriber);
    }

    return subscriber.then;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.all().');

  return new Class(function(resolve, reject){
    var results = [];
    var remaining = 0;

    function resolver(index){
      remaining++;
      return function(value){
        results[index] = value;
        if (!--remaining)
          resolve(results);
      };
    }

    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolver(i), reject);
      else
        results[i] = promise;
    }

    if (!remaining)
      resolve(results);
  });
};

Promise.race = function(promises){
  var Class = this;

  if (!isArray(promises))
    throw new TypeError('You must pass an array to Promise.race().');

  return new Class(function(resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++)
    {
      promise = promises[i];

      if (promise && typeof promise.then === 'function')
        promise.then(resolve, reject);
      else
        resolve(promise);
    }
  });
};

Promise.resolve = function(value){
  var Class = this;

  if (value && typeof value === 'object' && value.constructor === Class)
    return value;

  return new Class(function(resolve){
    resolve(value);
  });
};

Promise.reject = function(reason){
  var Class = this;

  return new Class(function(resolve, reject){
    reject(reason);
  });
};

})(typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.6
 */
!function(e, t) {
    if (true) module.exports = t(); else { var i, a; }
}(this, (function() {
    return function() {
        "use strict";
        var e = {
            4528: function(e) {
                e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
            },
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = a;
            },
            3976: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i, n = (i = a(4528)) && i.__esModule ? i : {
                    default: i
                };
                var r = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3
                };
                t.default = r;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, a) {
                    if (void 0 === a) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = a;
                };
            },
            3776: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.on = function(e, t) {
                    function a(e, a) {
                        n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                        i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                    }
                    if (u(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                        var s = r[o].split("."), l = s[0], c = s[1] || "global";
                        a(l, c);
                    }
                    return this;
                }, t.off = function(e, t) {
                    var a, i;
                    function n(e, t, n) {
                        if (e in a == !0) if (i.removeEventListener ? i.removeEventListener(e, n, !1) : i.detachEvent && i.detachEvent("on" + e, n), 
                        "global" === t) for (var r in a[e]) a[e][r].splice(a[e][r].indexOf(n), 1); else a[e][t].splice(a[e][t].indexOf(n), 1);
                    }
                    function r(e, i) {
                        var n, r, o = [];
                        if (e.length > 0) if (void 0 === t) for (n = 0, r = a[e][i].length; n < r; n++) o.push({
                            ev: e,
                            namespace: i && i.length > 0 ? i : "global",
                            handler: a[e][i][n]
                        }); else o.push({
                            ev: e,
                            namespace: i && i.length > 0 ? i : "global",
                            handler: t
                        }); else if (i.length > 0) for (var s in a) for (var l in a[s]) if (l === i) if (void 0 === t) for (n = 0, 
                        r = a[s][l].length; n < r; n++) o.push({
                            ev: s,
                            namespace: l,
                            handler: a[s][l][n]
                        }); else o.push({
                            ev: s,
                            namespace: l,
                            handler: t
                        });
                        return o;
                    }
                    if (u(this[0]) && e) {
                        a = this[0].eventRegistry, i = this[0];
                        for (var o = e.split(" "), s = 0; s < o.length; s++) for (var l = o[s].split("."), c = r(l[0], l[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                    }
                    return this;
                }, t.trigger = function(e) {
                    if (u(this[0])) for (var t = this[0].eventRegistry, a = this[0], i = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < i.length; r++) {
                        var s = i[r].split("."), l = s[0], c = s[1] || "global";
                        if (void 0 !== document && "global" === c) {
                            var f, d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    switch (l) {
                                      case "input":
                                        p.inputType = "insertText", f = new InputEvent(l, p);
                                        break;

                                      default:
                                        f = new CustomEvent(l, p);
                                    }
                                } catch (e) {
                                    (f = document.createEvent("CustomEvent")).initCustomEvent(l, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, n.default)(f, e), a.dispatchEvent(f);
                            } else (f = document.createEventObject()).eventType = l, f.detail = arguments[1], 
                            e.type && (0, n.default)(f, e), a.fireEvent("on" + f.eventType, f);
                        } else if (void 0 !== t[l]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                        arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[l]) for (d = 0; d < t[l][h].length; d++) t[l][h][d].apply(a, arguments); else for (d = 0; d < t[l][c].length; d++) t[l][c][d].apply(a, arguments);
                    }
                    return this;
                }, t.Event = void 0;
                var i, n = l(a(600)), r = l(a(9380)), o = l(a(4963)), s = l(a(8741));
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function u(e) {
                    return e instanceof Element;
                }
                t.Event = i, "function" == typeof r.default.CustomEvent ? t.Event = i = r.default.CustomEvent : s.default && (t.Event = i = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var a = document.createEvent("CustomEvent");
                    return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a;
                }, i.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, i, n, r, o, s, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[u] || {}, u++);
                    "object" !== a(l) && "function" != typeof l && (l = {});
                    for (;u < c; u++) if (null != (t = arguments[u])) for (i in t) n = l[i], r = t[i], 
                    l !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    s = n && Array.isArray(n) ? n : []) : s = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                    l[i] = e(f, s, r)) : void 0 !== r && (l[i] = r));
                    return l;
                };
            },
            4963: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = s(a(600)), n = s(a(9380)), r = s(a(253)), o = a(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.document;
                function u(e) {
                    return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                }
                u.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, u.extend = i.default, u.data = r.default, u.Event = o.Event;
                var c = u;
                t.default = c;
            },
            9845: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.iphone = t.iemobile = t.mobile = t.ie = t.ua = void 0;
                var i, n = (i = a(9380)) && i.__esModule ? i : {
                    default: i
                };
                var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = "ontouchstart" in n.default, l = /iemobile/i.test(r), u = /iphone/i.test(r) && !l;
                t.iphone = u, t.iemobile = l, t.mobile = s, t.ie = o, t.ua = r;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(a, "\\$1");
                };
                var a = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var i, n = a(8711), r = (i = a(4528)) && i.__esModule ? i : {
                    default: i
                }, o = a(9845), s = a(7215), l = a(7760), u = a(4713);
                var c = {
                    keydownEvent: function(e) {
                        var t = this.inputmask, a = t.opts, i = t.dependencyLib, c = t.maskset, f = this, d = i(f), p = e.keyCode, h = n.caret.call(t, f), v = a.onKeyDown.call(this, e, n.getBuffer.call(t), h, a);
                        if (void 0 !== v) return v;
                        if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                        s.handleRemove.call(t, f, p, h), (0, l.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                            e.preventDefault();
                            var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                            n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                        } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                        n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : a.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                        l.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : !0 === a.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                        !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                        h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                        h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                        n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || a.insertModeVisual && !1 === a.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                            var e = n.caret.call(t, f);
                            n.caret.call(t, f, e.begin);
                        }), 0) : p === r.default.LEFT && setTimeout((function() {
                            var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                            n.translatePosition.call(t, f.inputmask.caretPos.end);
                            t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                        }), 0));
                        t.ignorable = a.ignorables.includes(p);
                    },
                    keypressEvent: function(e, t, a, i, o) {
                        var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0)), u.skipInputEvent = !0, !0;
                        if (v) {
                            44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                            var m, g = t ? {
                                begin: o,
                                end: o
                            } : n.caret.call(u, p), k = String.fromCharCode(v);
                            d.writeOutBuffer = !0;
                            var y = s.isValid.call(u, g, k, i, void 0, void 0, void 0, t);
                            if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                            d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                            !1 !== a && (setTimeout((function() {
                                c.onKeyValidation.call(p, v, y);
                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                var b = n.getBuffer.call(u);
                                (0, l.writeBuffer)(p, b, m, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                        }
                    },
                    keyupEvent: function(e) {
                        var t = this.inputmask;
                        !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                    },
                    pasteEvent: function(e) {
                        var t, a = this.inputmask, i = a.opts, r = a._valueGet(!0), o = n.caret.call(a, this);
                        a.isRTL && (t = o.end, o.end = o.begin, o.begin = t);
                        var s = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (s == (a.isRTL ? n.getBufferTemplate.call(a).slice().reverse() : n.getBufferTemplate.call(a)).slice(0, o.begin).join("") && (s = ""), 
                        u == (a.isRTL ? n.getBufferTemplate.call(a).slice().reverse() : n.getBufferTemplate.call(a)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = s + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = s + e.clipboardData.getData("text/plain") + u;
                        }
                        var c = r;
                        if ("function" == typeof i.onBeforePaste) {
                            if (!1 === (c = i.onBeforePaste.call(a, r, i))) return e.preventDefault();
                            c || (c = r);
                        }
                        return (0, l.checkVal)(this, !0, !1, c.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, a = t.opts, i = t.dependencyLib;
                        var s = this, f = s.inputmask._valueGet(!0), d = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, s, void 0, void 0, !0);
                        if (d !== f) {
                            var h = function(e, i, r) {
                                for (var o, s, l, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = i.substr(0, r.begin).split(""), p = i.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                for (;d.length < h; ) d.push(k);
                                for (;f.length < v; ) f.unshift(k);
                                for (;p.length < v; ) p.unshift(k);
                                var y = c.concat(f), b = d.concat(p);
                                for (s = 0, o = y.length; s < o; s++) switch (l = u.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                m) {
                                  case "insertText":
                                    b[s - 1] === y[s] && r.begin == y.length - 1 && g.push(y[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    y[s] === k ? r.end++ : s = o;
                                    break;

                                  default:
                                    y[s] !== b[s] && (y[s + 1] !== k && y[s + 1] !== l && void 0 !== y[s + 1] || (b[s] !== l || b[s + 1] !== k) && b[s] !== k ? b[s + 1] === k && b[s] === y[s + 1] ? (m = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--) : y[s] !== l && y[s] !== k && (y[s + 1] === k || b[s] !== y[s] && b[s + 1] === y[s + 1]) ? (m = "insertReplacementText", 
                                    g.push(y[s]), r.begin--) : y[s] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === a.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(f = function(e, a, i) {
                                if (o.iemobile) {
                                    var r = a.replace(n.getBuffer.call(t).join(""), "");
                                    if (1 === r.length) {
                                        var s = a.split("");
                                        s.splice(i.begin, 0, r), a = s.join("");
                                    }
                                }
                                return a;
                            }(0, f, p), d, p);
                            switch ((s.inputmask.shadowRoot || s.ownerDocument).activeElement !== s && s.focus(), 
                            (0, l.writeBuffer)(s, n.getBuffer.call(t)), n.caret.call(t, s, p.begin, p.end, !0), 
                            h.action) {
                              case "insertText":
                              case "insertReplacementText":
                                h.data.forEach((function(e, a) {
                                    var n = new i.Event("keypress");
                                    n.which = e.charCodeAt(0), t.ignorable = !1, c.keypressEvent.call(s, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new i.Event("keydown");
                                v.keyCode = r.default.BACKSPACE, c.keydownEvent.call(s, v);
                                break;

                              default:
                                (0, l.applyInputValue)(s, f);
                            }
                            e.preventDefault();
                        }
                    },
                    compositionendEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing = !1, t.$el.trigger("input");
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, a = this, i = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === i && (i = a.inputmask._valueGet(!0)), (0, l.applyInputValue)(a, i), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, a, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, a = t.opts, i = this, r = i.inputmask._valueGet();
                        a.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, l.writeBuffer)(i, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== a.positionCaretOnTab || !1 !== t.mouseEnter || s.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || c.clickEvent.apply(i, [ e, !0 ]), 
                        t.undoValue = t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, a = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (a.inputmask.shadowRoot || a.ownerDocument).activeElement !== a && (0, 
                        l.HandleNativePlaceholder)(a, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var a = this.inputmask, i = this;
                        if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                            var r = n.determineNewCaretPosition.call(a, n.caret.call(a, i), t);
                            void 0 !== r && n.caret.call(a, i, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, a = t.maskset, i = this, o = n.caret.call(t, i), u = window.clipboardData || e.clipboardData, c = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end);
                        u.setData("text", t.isRTL ? c.reverse().join("") : c.join("")), document.execCommand && document.execCommand("copy"), 
                        s.handleRemove.call(t, i, r.default.DELETE, o), (0, l.writeBuffer)(i, n.getBuffer.call(t), a.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, a = t.opts, i = (0, t.dependencyLib)(this), r = this;
                        if (r.inputmask) {
                            (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== o && (a.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : l.clearOptionalTail.call(t, u)), 
                            !1 === s.isComplete.call(t, u) && (setTimeout((function() {
                                i.trigger("incomplete");
                            }), 0), a.clearIncomplete && (n.resetMaskSet.call(t), u = a.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, l.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            i.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts, a = this;
                        if (e.mouseEnter = !0, (a.inputmask.shadowRoot || a.ownerDocument).activeElement !== a) {
                            var i = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            e.placeholder !== i && a.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = a.placeholder), 
                            t.showMaskOnHover && (0, l.HandleNativePlaceholder)(a, i);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), t.clearMaskOnLostFocus && -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === s.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, l.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, l.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = c;
            },
            9716: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var i = s(a(2394)), n = s(a(4528)), r = a(8711), o = a(7760);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = {
                    on: function(e, t, a) {
                        var s = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                            if (void 0 === c && "FORM" !== this.nodeName) {
                                var d = s.data(u, "_inputmask_opts");
                                s(u).off(), d && new i.default(d).mask(u);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                        t.preventDefault();
                                        break;

                                      case "keydown":
                                        c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                        break;

                                      case "keyup":
                                      case "compositionend":
                                        c.isComposing && (c.skipInputEvent = !1);
                                        break;

                                      case "keypress":
                                        if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                        c.skipKeyPressEvent = !0;
                                        break;

                                      case "click":
                                      case "focus":
                                        return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (l = arguments, setTimeout((function() {
                                            e.inputmask && a.apply(u, l);
                                        }), 0), !1);
                                    }
                                    var p = a.apply(u, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && s(e.form).on(t, l)) : s(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var a = e.inputmask.dependencyLib, i = e.inputmask.events;
                            for (var n in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                                for (var r = i[n]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(n) ? null !== e.form && a(e.form).off(n, o) : a(e).off(n, o);
                                }
                                delete e.inputmask.events[n];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, a) {
                var i = l(a(2394)), n = l(a(4528)), r = l(a(7184)), o = a(8711);
                function s(e) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var u = i.default.dependencyLib, c = (new Date).getFullYear(), f = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return y(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                        return y(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return y(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return y(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return y(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return y(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return y(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return y(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return y(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return y(Date.prototype.getMilliseconds.call(this), 3);
                    } ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return y(Date.prototype.getMilliseconds.call(this), 2);
                    } ],
                    t: [ "[ap]", p, "ampm", h, 1 ],
                    tt: [ "[ap]m", p, "ampm", h, 2 ],
                    T: [ "[AP]", p, "ampm", h, 1 ],
                    TT: [ "[AP]M", p, "ampm", h, 2 ],
                    Z: [ "" ],
                    o: [ "" ],
                    S: [ "" ]
                }, d = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function p(e) {
                    e.toLowerCase().includes("p") && this.setHours(this.getHours() + 12);
                }
                function h() {}
                function v(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var a = f[e[0][0] + "x"].slice("");
                        return a[0] = a[0](t[0]), a[3] = a[3](t[0]), a;
                    }
                    if (f[e[0]]) return f[e[0]];
                }
                function m(e) {
                    if (!e.tokenizer) {
                        var t = [], a = [];
                        for (var i in f) if (/\.*x$/.test(i)) {
                            var n = i[0] + "\\d+";
                            -1 === a.indexOf(n) && a.push(n);
                        } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                        e.tokenizer = "(" + (a.length > 0 ? a.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function g(e, t, a) {
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && !Number.isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var i = P(t.pos, a);
                        if ("yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function k(e, t, a, i) {
                    var n, o, s = "";
                    for (m(a).lastIndex = 0; n = m(a).exec(e); ) {
                        if (void 0 === t) if (o = v(n)) s += "(" + o[0] + ")"; else switch (n[0]) {
                          case "[":
                            s += "(";
                            break;

                          case "]":
                            s += ")?";
                            break;

                          default:
                            s += (0, r.default)(n[0]);
                        } else if (o = v(n)) if (!0 !== i && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += n[0]; else s += n[0];
                    }
                    return s;
                }
                function y(e, t, a) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = a ? e + "0" : "0" + e;
                    return e;
                }
                function b(e, t, a) {
                    var i, n, r, o = {
                        date: new Date(1, 0, 1)
                    }, l = e;
                    function u(e, t, a) {
                        if (e[i] = "ampm" === i ? t : t.replace(/[^0-9]/g, "0"), e["raw" + i] = t, void 0 !== r) {
                            var n = e[i];
                            ("day" === i && 29 === parseInt(n) || "month" === i && 2 === parseInt(n)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e.date.setFullYear(2012, 1, 29)), 
                            "day" === i && 0 === parseInt(n) && (n = 1), "month" === i && (n = parseInt(n)) > 0 && (n -= 1), 
                            "year" === i && n.length < 4 && (n = y(n, 4, !0)), "" === n || isNaN(n) || r.call(e.date, n), 
                            "ampm" === i && r.call(e.date, n);
                        }
                    }
                    if ("string" == typeof l) {
                        for (m(a).lastIndex = 0; n = m(a).exec(t); ) {
                            var c = new RegExp("\\d+$").exec(n[0]), d = c ? n[0][0] + "x" : n[0], p = void 0;
                            if (c) {
                                var h = m(a).lastIndex, v = P(n.index, a);
                                m(a).lastIndex = h, p = l.slice(0, l.indexOf(v.nextMatch[0]));
                            } else p = l.slice(0, d.length);
                            Object.prototype.hasOwnProperty.call(f, d) && (i = f[d][2], r = f[d][1], u(o, p)), 
                            l = l.slice(p.length);
                        }
                        return o;
                    }
                    if (l && "object" === s(l) && Object.prototype.hasOwnProperty.call(l, "date")) return l;
                }
                function x(e, t) {
                    return k(t.inputFormat, {
                        date: e
                    }, t);
                }
                function P(e, t) {
                    var a, i, n = 0, r = 0;
                    for (m(t).lastIndex = 0; i = m(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(i[0]);
                        if ((n += r = o ? parseInt(o[0]) : i[0].length) >= e) {
                            a = i, i = m(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: n - r,
                        nextMatch: i,
                        targetMatch: a
                    };
                }
                i.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, f.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = d[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = d[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = d[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = k(e.inputFormat, void 0, e), e.min = b(e.min, e.inputFormat, e), e.max = b(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: void 0,
                        outputFormat: void 0,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, a, i, n, r, o, s) {
                            if (s) return !0;
                            if (isNaN(a) && e[t] !== a) {
                                var l = P(t, n);
                                if (l.nextMatch && l.nextMatch[0] === a && l.targetMatch[0].length > 1) {
                                    var u = f[l.targetMatch[0]][0];
                                    if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, a, i, n, r, o, s) {
                            var l, u;
                            if (o) return !0;
                            if (!1 === i && (((l = P(t + 1, n)).targetMatch && l.targetMatchIndex === t && l.targetMatch[0].length > 1 && void 0 !== f[l.targetMatch[0]] || (l = P(t + 2, n)).targetMatch && l.targetMatchIndex === t + 1 && l.targetMatch[0].length > 1 && void 0 !== f[l.targetMatch[0]]) && (u = f[l.targetMatch[0]][0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(a + "0") ? (e[t] = a, 
                            e[t + 1] = "0", i = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + a) && (e[t] = "0", e[t + 1] = a, i = {
                                pos: t + 2
                            })), !1 === i)) return i;
                            if (i.fuzzy && (e = i.buffer, t = i.pos), (l = P(t, n)).targetMatch && l.targetMatch[0] && void 0 !== f[l.targetMatch[0]]) {
                                u = f[l.targetMatch[0]][0];
                                var d = e.slice(l.targetMatchIndex, l.targetMatchIndex + l.targetMatch[0].length);
                                !1 === new RegExp(u).test(d.join("")) && 2 === l.targetMatch[0].length && r.validPositions[l.targetMatchIndex] && r.validPositions[l.targetMatchIndex + 1] && (r.validPositions[l.targetMatchIndex + 1].input = "0");
                            }
                            var p = i, h = b(e.join(""), n.inputFormat, n);
                            return p && h.date.getTime() == h.date.getTime() && (n.prefillYear && (p = function(e, t, a) {
                                if (e.year !== e.rawyear) {
                                    var i = c.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, n.length), o = i.slice(n.length);
                                    if (2 === n.length && n === r) {
                                        var s = new Date(c, e.month - 1, e.day);
                                        e.day == s.getDate() && (!a.max || a.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(c), 
                                        e.year = i, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(h, p, n)), p = function(e, t, a, i, n) {
                                if (!t) return t;
                                if (a.min) {
                                    if (e.rawyear) {
                                        var r, o = e.rawyear.replace(/[^0-9]/g, ""), s = a.min.year.substr(0, o.length);
                                        if (o < s) {
                                            var l = P(t.pos, a);
                                            if (o = e.rawyear.substr(0, t.pos - l.targetMatchIndex + 1).replace(/[^0-9]/g, "0"), 
                                            (s = a.min.year.substr(0, o.length)) <= o) return t.remove = l.targetMatchIndex + o.length, 
                                            t;
                                            if (o = "yyyy" === l.targetMatch[0] ? e.rawyear.substr(1, 1) : e.rawyear.substr(0, 1), 
                                            s = a.min.year.substr(2, 1), r = a.max ? a.max.year.substr(2, 1) : o, 1 === o.length && s <= o && o <= r && !0 !== n) return "yyyy" === l.targetMatch[0] ? (t.insert = [ {
                                                pos: t.pos + 1,
                                                c: o,
                                                strict: !0
                                            } ], t.caret = t.pos + 2, i.validPositions[t.pos].input = a.min.year[1]) : (t.insert = [ {
                                                pos: t.pos + 1,
                                                c: a.min.year[1],
                                                strict: !0
                                            }, {
                                                pos: t.pos + 2,
                                                c: o,
                                                strict: !0
                                            } ], t.caret = t.pos + 3, i.validPositions[t.pos].input = a.min.year[0]), t;
                                            t = !1;
                                        }
                                    }
                                    for (var u in e) -1 === u.indexOf("raw") && e["raw".concat(u)] && (e[u], e["raw".concat(u)]);
                                    t && e.year && e.year === e.rawyear && a.min.date.getTime() == a.min.date.getTime() && (t = a.min.date.getTime() <= e.date.getTime());
                                }
                                return t && a.max && a.max.date.getTime() == a.max.date.getTime() && (t = a.max.date.getTime() >= e.date.getTime()), 
                                t;
                            }(h, p = g.call(this, h, p, n), n, r, s)), void 0 !== t && p && i.pos !== t ? {
                                buffer: k(n.inputFormat, h, n).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: i.pos
                                },
                                pos: i.caret || i.pos
                            } : p;
                        },
                        onKeyDown: function(e, t, a, i) {
                            e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(x(new Date, i)), 
                            u(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, a) {
                            return t ? k(a.outputFormat, b(e, a.inputFormat, a), a, !0) : t;
                        },
                        casing: function(e, t, a, i) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = x(e, t)), e;
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, a) {
                var i, n = (i = a(2394)) && i.__esModule ? i : {
                    default: i
                }, r = a(8711), o = a(4713);
                n.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, a, i, n) {
                    return a - 1 > -1 && "." !== t.buffer[a - 1] ? (e = t.buffer[a - 1] + e, e = a - 2 > -1 && "." !== t.buffer[a - 2] ? t.buffer[a - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                n.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, a) {
                            return e;
                        },
                        inputmode: "numeric"
                    },
                    email: {
                        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                        greedy: !1,
                        casing: "lower",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, a) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, a, i, n, s, l) {
                            var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                        }
                    }
                });
            },
            207: function(e, t, a) {
                var i = s(a(2394)), n = s(a(4528)), r = s(a(7184)), o = a(8711);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = i.default.dependencyLib;
                function u(e, t) {
                    for (var a = "", n = 0; n < e.length; n++) i.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? a += "\\" + e.charAt(n) : a += e.charAt(n);
                    return a;
                }
                function c(e, t, a, i) {
                    if (e.length > 0 && t > 0 && (!a.digitsOptional || i)) {
                        var n = e.indexOf(a.radixPoint), r = !1;
                        a.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(a.radixPoint), 
                        n = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                    }
                    return r && e.push(a.negationSymbol.back), e;
                }
                function f(e, t) {
                    var a = 0;
                    if ("+" === e) {
                        for (a in t.validPositions) ;
                        a = o.seekNext.call(this, parseInt(a));
                    }
                    for (var i in t.tests) if ((i = parseInt(i)) >= a) for (var n = 0, r = t.tests[i].length; n < r; n++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][n].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                    return a;
                }
                function d(e, t) {
                    var a = -1;
                    for (var i in t.validPositions) {
                        var n = t.validPositions[i];
                        if (n && n.match.def === e) {
                            a = parseInt(i);
                            break;
                        }
                    }
                    return a;
                }
                function p(e, t, a, i, n) {
                    var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || i && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                    return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === a ? r + 1 : r,
                            c: n.radixPoint
                        },
                        pos: a
                    } : o;
                }
                i.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", a = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, a = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[a] && (e.definitions[a] = {}, e.definitions[a].validator = "[" + e.radixPoint + "]", 
                            e.definitions[a].placeholder = e.radixPoint, e.definitions[a].static = !0, e.definitions[a].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var i, n = "[+]";
                            if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += a + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (i = n + a + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : n += a + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return n += u(e.suffix, e), n += "[-]", i && (n = [ i + u(e.suffix, e) + "[-]", n ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), n;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "000",
                            m: "000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, a, i, n) {
                                    return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, a, i, n) {
                                    return n.allowMinus && e === n.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, a, i, n, r, o, s) {
                            var l;
                            if (!1 !== n.__financeInput && a === n.radixPoint) return !1;
                            if (l = n.shortcuts && n.shortcuts[a]) {
                                if (l.length > 1) for (var u = [], c = 0; c < l.length; c++) u.push({
                                    pos: t + c,
                                    c: l[c],
                                    strict: !1
                                });
                                return {
                                    insert: u
                                };
                            }
                            var p = e.indexOf(n.radixPoint), h = t;
                            if (t = function(e, t, a, i, n) {
                                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= a && (a > 0 || t == n.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, a, p, r, n), "-" === a || a === n.negationSymbol.front) {
                                if (!0 !== n.allowMinus) return !1;
                                var v = !1, m = d("+", r), g = d("-", r);
                                return -1 !== m && (v = [ m, g ]), !1 !== v ? {
                                    remove: v,
                                    caret: h - n.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: n.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: n.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: h + n.negationSymbol.back.length
                                };
                            }
                            if (a === n.groupSeparator) return {
                                caret: h
                            };
                            if (s) return !0;
                            if (-1 !== p && !0 === n._radixDance && !1 === i && a === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && p !== t) return {
                                caret: n._radixDance && t === p - 1 ? p + 1 : p
                            };
                            if (!1 === n.__financeInput) if (i) {
                                if (n.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!n.digitsOptional) {
                                    if (o.begin > p && o.end <= p) return a === n.radixPoint ? {
                                        insert: {
                                            pos: p + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: p
                                    } : {
                                        rewritePosition: p + 1
                                    };
                                    if (o.begin < p) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: p
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, a, i, n, r, o) {
                            if (!1 === i) return i;
                            if (o) return !0;
                            if (null !== n.min || null !== n.max) {
                                var s = n.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && s < n.min && (s.toString().length > n.min.toString().length || s < 0)) return !1;
                                if (null !== n.max && s > n.max) return !!n.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                };
                            }
                            return i;
                        },
                        onUnMask: function(e, t, a) {
                            if ("" === t && !0 === a.nullable) return t;
                            var i = e.replace(a.prefix, "");
                            return i = (i = i.replace(a.suffix, "")).replace(new RegExp((0, r.default)(a.groupSeparator), "g"), ""), 
                            "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), 
                            a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(r.default.call(this, a.radixPoint), ".")), 
                            i = (i = i.replace(new RegExp("^" + (0, r.default)(a.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(a.negationSymbol.back) + "$"), ""), Number(i)) : i;
                        },
                        isComplete: function(e, t) {
                            var a = (t.numericInput ? e.slice().reverse() : e).join("");
                            return a = (a = (a = (a = (a = a.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (a = a.replace((0, 
                            r.default)(t.radixPoint), ".")), isFinite(a);
                        },
                        onBeforeMask: function(e, t) {
                            var a = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                            var i = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(a), o = n[0].replace(/[^\-0-9]/g, ""), s = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", l = n.length > 1;
                            e = o + ("" !== s ? a + s : s);
                            var u = 0;
                            if ("" !== a && (u = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, u || 1);
                                e = e.replace((0, r.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                e = e.toString().replace(".", a);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(a, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                            }
                            return i && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, a, i) {
                            function n(e, t) {
                                if (!1 !== i.__financeInput || t) {
                                    var a = e.indexOf(i.radixPoint);
                                    -1 !== a && e.splice(a, 1);
                                }
                                if ("" !== i.groupSeparator) for (;-1 !== (a = e.indexOf(i.groupSeparator)); ) e.splice(a, 1);
                                return e;
                            }
                            var o, s = function(e, t) {
                                var a = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), i = a ? a[2] : "", n = !1;
                                return i && (i = i.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(i)), 
                                !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < i.length)) && n;
                            }(t, i);
                            if (s) for (var u = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                            delete t[u + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== i.min) {
                                    var p = i.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, i, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== i.min && p < i.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: c(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                                    };
                                }
                                if (t[t.length - 1] === i.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != i.negationSymbol.front ? (0, r.default)(i.negationSymbol.front) + "?" : "") + (0, 
                                    r.default)(i.prefix) + ")(.*)(" + (0, r.default)(i.suffix) + ("" != i.negationSymbol.back ? (0, 
                                    r.default)(i.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else "" !== i.radixPoint && t[0] === i.radixPoint && (o && o.buffer ? o.buffer.shift() : (t.shift(), 
                                o = {
                                    refreshFromBuffer: !0,
                                    buffer: n(t)
                                }));
                                if (i.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = c(v, i.digits, i, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, a, i) {
                            var r, o = l(this);
                            if (e.ctrlKey) switch (e.keyCode) {
                              case n.default.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), 
                                o.trigger("setvalue"), !1;

                              case n.default.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), 
                                o.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && a.begin !== t.length) {
                                if (t[e.keyCode === n.default.DELETE ? a.begin - 1 : a.end] === i.negationSymbol.front) return r = t.slice().reverse(), 
                                "" !== i.negationSymbol.front && r.shift(), "" !== i.negationSymbol.back && r.pop(), 
                                o.trigger("setvalue", [ r.join(""), a.begin ]), !1;
                                if (!0 === i._radixDance) {
                                    var s = t.indexOf(i.radixPoint);
                                    if (i.digitsOptional) {
                                        if (0 === s) return (r = t.slice().reverse()).pop(), o.trigger("setvalue", [ r.join(""), a.begin >= r.length ? r.length : a.begin ]), 
                                        !1;
                                    } else if (-1 !== s && (a.begin < s || a.end < s || e.keyCode === n.default.DELETE && a.begin === s)) return a.begin !== a.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || a.begin++, 
                                    (r = t.slice().reverse()).splice(r.length - a.begin, a.begin - a.end + 1), r = c(r, i.digits, i).join(""), 
                                    o.trigger("setvalue", [ r, a.begin >= r.length ? s + 1 : a.begin ]), !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, a) {
                var i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = ((i = a(8741)) && i.__esModule ? i : {
                    default: i
                }).default ? window : {};
                t.default = n;
            },
            7760: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.applyInputValue = c, t.clearOptionalTail = f, t.checkVal = d, t.HandleNativePlaceholder = function(e, t) {
                    var a = e ? e.inputmask : this;
                    if (l.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var i = o.getBuffer.call(a).slice(), n = e.inputmask._valueGet();
                            if (n !== t) {
                                var r = o.getLastValidPosition.call(a);
                                -1 === r && n === o.getBufferTemplate.call(a).join("") ? i = [] : -1 !== r && f.call(a, i), 
                                p(e, i);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, a = t.opts, i = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    var n = [], r = i.validPositions;
                    for (var s in r) r[s] && r[s].match && (1 != r[s].match.static || Array.isArray(i.metadata) && !0 !== r[s].generatedInput) && n.push(r[s].input);
                    var l = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                    if ("function" == typeof a.onUnMask) {
                        var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        l = a.onUnMask.call(t, u, l, a);
                    }
                    return l;
                }, t.writeBuffer = p;
                var i, n = (i = a(4528)) && i.__esModule ? i : {
                    default: i
                }, r = a(4713), o = a(8711), s = a(7215), l = a(9845), u = a(6030);
                function c(e, t) {
                    var a = e ? e.inputmask : this, i = a.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof i.onBeforeMask && (t = i.onBeforeMask.call(a, t, i) || t), 
                    d(e, !0, !1, t = t.toString().split("")), a.undoValue = a._valueGet(!0), (i.clearMaskOnLostFocus || i.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(a).join("") && -1 === o.getLastValidPosition.call(a) && e.inputmask._valueSet("");
                }
                function f(e) {
                    e.length = 0;
                    for (var t, a = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = a.shift()); ) e.push(t);
                    return e;
                }
                function d(e, t, a, i, n) {
                    var l = e ? e.inputmask : this, c = l.maskset, f = l.opts, d = l.dependencyLib, h = i.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", o.resetMaskSet.call(l), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(l, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, l.caretPos = {
                        begin: m
                    };
                    var y = [], b = l.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var i = new d.Event("_checkval");
                            i.which = e.toString().charCodeAt(0), v += e;
                            var n = o.getLastValidPosition.call(l, void 0, !0);
                            !function(e, t) {
                                for (var a = r.getMaskTemplate.call(l, !0, 0).slice(e, o.seekNext.call(l, e, !1, !1)).join("").replace(/'/g, ""), i = a.indexOf(t); i > 0 && " " === a[i - 1]; ) i--;
                                var n = 0 === i && !o.isMask.call(l, e) && (r.getTest.call(l, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(l, e).match.static && r.getTest.call(l, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(l, e).match.nativeDef && (r.getTest.call(l, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(l, e + 1).match.static && r.getTest.call(l, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!n && i > 0 && !o.isMask.call(l, e, !1, !0)) {
                                    var s = o.seekNext.call(l, e);
                                    l.caretPos.begin < s && (l.caretPos = {
                                        begin: s
                                    });
                                }
                                return n;
                            }(m, v) ? (g = u.EventHandlers.keypressEvent.call(l, i, !0, !1, a, l.caretPos.begin)) && (m = l.caretPos.begin + 1, 
                            v = "") : g = u.EventHandlers.keypressEvent.call(l, i, !0, !1, a, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                            l.isRTL || (g.forwardPosition = g.pos + 1)), p.call(l, void 0, o.getBuffer.call(l), g.forwardPosition, i, !1), 
                            l.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = l.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(l, t) && o.isMask.call(l, t, !0) ? l.caretPos.begin++ : l.caretPos = b;
                        }
                    })), y.length > 0) {
                        var x, P, E = o.seekNext.call(l, -1, void 0, !1);
                        if (!s.isComplete.call(l, o.getBuffer.call(l)) && y.length <= E || s.isComplete.call(l, o.getBuffer.call(l)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                            var _ = new d.Event("_checkval");
                            if ((P = c.validPositions[x]).generatedInput = !0, _.which = P.input.charCodeAt(0), 
                            (g = u.EventHandlers.keypressEvent.call(l, _, !0, !1, a, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && p.call(l, e, o.getBuffer.call(l), g ? g.forwardPosition : l.caretPos.begin, n || new d.Event("checkval"), n && "input" === n.type && l.undoValue !== l._valueGet(!0)), 
                    f.skipOptionalPartCharacter = k;
                }
                function p(e, t, a, i, r) {
                    var l = e ? e.inputmask : this, u = l.opts, c = l.dependencyLib;
                    if (i && "function" == typeof u.onBeforeWrite) {
                        var f = u.onBeforeWrite.call(l, i, t, a, u);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                s.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(l, !0);
                            }
                            void 0 !== a && (a = void 0 !== f.caret ? f.caret : a);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === a || void 0 !== i && "blur" === i.type || o.caret.call(l, e, a, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.keyCode === n.default.DELETE || i.keyCode === n.default.BACKSPACE)), 
                    !0 === r)) {
                        var p = c(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === o.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === s.isComplete.call(l, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, a(7149), a(3194);
                var i = a(157), n = m(a(4963)), r = m(a(9380)), o = a(2391), s = a(4713), l = a(8711), u = a(7215), c = a(7760), f = a(9716), d = m(a(7392)), p = m(a(3976)), h = m(a(8741));
                function v(e) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, k = "_inputmask_opts";
                function y(e, t, a) {
                    if (h.default) {
                        if (!(this instanceof y)) return new y(e, t, a);
                        this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== a && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                        this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                        this.originalPlaceholder = void 0, this.isComposing = !1;
                    }
                }
                function b(e, t, a) {
                    var i = y.prototype.aliases[e];
                    return i ? (i.alias && b(i.alias, void 0, a), n.default.extend(!0, a, i), n.default.extend(!0, a, t), 
                    !0) : (null === a.mask && (a.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, a) {
                            var s = n.default.extend(!0, {}, t.opts);
                            if (function(e, t, a, i) {
                                function o(t, n) {
                                    var o = "" === i ? t : i + "-" + t;
                                    null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                    a[t] = n);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, u, c, f = e.getAttribute(i);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (c in u = void 0, l) if ("alias" === c.toLowerCase()) {
                                        u = l[c];
                                        break;
                                    }
                                    for (s in o("alias", u), a.alias && b(a.alias, a, t), t) {
                                        if (l) for (c in u = void 0, l) if (c.toLowerCase() === s.toLowerCase()) {
                                            u = l[c];
                                            break;
                                        }
                                        o(s, u);
                                    }
                                }
                                n.default.extend(!0, t, a), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(a).length;
                            }(e, s, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = l, n.default.data(e, k, t.userOptions), 
                                i.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return c.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            n.default.data(this.el, k, null);
                            var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        l.getBufferTemplate.call(this).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        u.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var a = l.getBuffer.call(this), i = l.determineLastRequiredPosition.call(this), n = a.length - 1; n > i && !l.isMask.call(this, n); n--) ;
                        return a.splice(i, n + 1 - i), u.isComplete.call(this, a) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var a = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        c.checkVal.call(this, void 0, !0, !1, a);
                        var i = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: i,
                            metadata: this.getmetadata()
                        } : i;
                    },
                    setValue: function(e) {
                        this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, y.extendDefaults = function(e) {
                    n.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    n.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    n.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, a) {
                    return y(t).format(e, a);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, y.dependencyLib = n.default, r.default.Inputmask = y;
                var x = y;
                t.default = x;
            },
            5296: function(e, t, a) {
                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                var n = p(a(9380)), r = p(a(2394)), o = p(a(8741));
                function s(e, t) {
                    return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e) : t;
                }
                function l(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return (l = function(e) {
                        if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
                        var a;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, i);
                        }
                        function i() {
                            return u(e, arguments, d(this).constructor);
                        }
                        return i.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: i,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(i, e);
                    })(e);
                }
                function u(e, t, a) {
                    return (u = c() ? Reflect.construct : function(e, t, a) {
                        var i = [ null ];
                        i.push.apply(i, t);
                        var n = new (Function.bind.apply(e, i));
                        return a && f(n, a.prototype), n;
                    }).apply(null, arguments);
                }
                function c() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function f(e, t) {
                    return (f = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e;
                    })(e, t);
                }
                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
                }
                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var h = n.default.document;
                if (o.default && h && h.head && h.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                    var v = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && f(e, t);
                        }(n, e);
                        var t, a, i = (t = n, a = c(), function() {
                            var e, i = d(t);
                            if (a) {
                                var n = d(this).constructor;
                                e = Reflect.construct(i, arguments, n);
                            } else e = i.apply(this, arguments);
                            return s(this, e);
                        });
                        function n() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, n);
                            var t = (e = i.call(this)).getAttributeNames(), a = e.attachShadow({
                                mode: "closed"
                            }), o = h.createElement("input");
                            for (var s in o.type = "text", a.appendChild(o), t) Object.prototype.hasOwnProperty.call(t, s) && o.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(o), o.inputmask.shadowRoot = a, e;
                        }
                        return n;
                    }(l(HTMLElement));
                    n.default.customElements.define("input-mask", v);
                }
            },
            2391: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateMaskSet = function(e, t) {
                    var a;
                    function n(e, a, n) {
                        var r, o, s = !1;
                        if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                        e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                        n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                            var l = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                            e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + l + "," + n.repeat + n.quantifiermarker[1];
                        }
                        return o = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                        !1 !== n.keepStatic && (o = "ks_" + o), void 0 === Inputmask.prototype.masksCache[o] || !0 === t ? (r = {
                            mask: e,
                            maskToken: Inputmask.prototype.analyseMask(e, s, n),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: a,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (Inputmask.prototype.masksCache[o] = r, r = i.default.extend(!0, {}, Inputmask.prototype.masksCache[o]))) : r = i.default.extend(!0, {}, Inputmask.prototype.masksCache[o]), 
                        r;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var r = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                r.length > 1 && (r += e.groupmarker[1] + e.alternatormarker + e.groupmarker[0]), 
                                void 0 !== t.mask && "function" != typeof t.mask ? r += t.mask : r += t;
                            })), n(r += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    null === e.keepStatic && (e.keepStatic = !1);
                    a = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                    return a;
                }, t.analyseMask = function(e, t, a) {
                    var i, r, o, s, l, u, c = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, f = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, d = !1, p = new n.default, h = [], v = [], m = !1;
                    function g(e, i, n) {
                        n = void 0 !== n ? n : e.matches.length;
                        var r = e.matches[n - 1];
                        if (t) 0 === i.indexOf("[") || d && /\\d|\\s|\\w]/i.test(i) || "." === i ? e.matches.splice(n++, 0, {
                            fn: new RegExp(i, a.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === r ? "master" : r.def !== i,
                            casing: null,
                            def: i,
                            placeholder: void 0,
                            nativeDef: i
                        }) : (d && (i = i[i.length - 1]), i.split("").forEach((function(t, i) {
                            r = e.matches[n - 1], e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(a.staticDefinitionSymbol || t) ? new RegExp("[" + (a.staticDefinitionSymbol || t) + "]", a.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === r ? "master" : r.def !== t && !0 !== r.static,
                                casing: null,
                                def: a.staticDefinitionSymbol || t,
                                placeholder: void 0 !== a.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (d ? "'" : "") + t
                            });
                        }))), d = !1; else {
                            var o = a.definitions && a.definitions[i] || a.usePrototypeDefinitions && Inputmask.prototype.definitions[i];
                            o && !d ? e.matches.splice(n++, 0, {
                                fn: o.validator ? "string" == typeof o.validator ? new RegExp(o.validator, a.casing ? "i" : "") : new function() {
                                    this.test = o.validator;
                                } : new RegExp("."),
                                static: o.static || !1,
                                optionality: !1,
                                newBlockMarker: void 0 === r ? "master" : r.def !== (o.definitionSymbol || i),
                                casing: o.casing,
                                def: o.definitionSymbol || i,
                                placeholder: o.placeholder,
                                nativeDef: i,
                                generated: o.generated
                            }) : (e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(a.staticDefinitionSymbol || i) ? new RegExp("[" + (a.staticDefinitionSymbol || i) + "]", a.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === r ? "master" : r.def !== i && !0 !== r.static,
                                casing: null,
                                def: a.staticDefinitionSymbol || i,
                                placeholder: void 0 !== a.staticDefinitionSymbol ? i : void 0,
                                nativeDef: (d ? "'" : "") + i
                            }), d = !1);
                        }
                    }
                    function k() {
                        if (h.length > 0) {
                            if (g(s = h[h.length - 1], r), s.isAlternator) {
                                l = h.pop();
                                for (var e = 0; e < l.matches.length; e++) l.matches[e].isGroup && (l.matches[e].isGroup = !1);
                                h.length > 0 ? (s = h[h.length - 1]).matches.push(l) : p.matches.push(l);
                            }
                        } else g(p, r);
                    }
                    function y(e) {
                        var t = new n.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function b() {
                        if ((o = h.pop()).openGroup = !1, void 0 !== o) if (h.length > 0) {
                            if ((s = h[h.length - 1]).matches.push(o), s.isAlternator) {
                                l = h.pop();
                                for (var e = 0; e < l.matches.length; e++) l.matches[e].isGroup = !1, l.matches[e].alternatorGroup = !1;
                                h.length > 0 ? (s = h[h.length - 1]).matches.push(l) : p.matches.push(l);
                            }
                        } else p.matches.push(o); else k();
                    }
                    function x(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = y([ e.pop(), t ])), t;
                    }
                    t && (a.optionalmarker[0] = void 0, a.optionalmarker[1] = void 0);
                    for (;i = t ? f.exec(e) : c.exec(e); ) {
                        if (r = i[0], t) switch (r.charAt(0)) {
                          case "?":
                            r = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            r = "{" + r + "}";
                            break;

                          case "|":
                            if (0 === h.length) {
                                var P = y(p.matches);
                                P.openGroup = !0, h.push(P), p.matches = [], m = !0;
                            }
                        }
                        if (d) k(); else switch (r.charAt(0)) {
                          case "$":
                          case "^":
                            t || k();
                            break;

                          case "(?=":
                          case "(?!":
                          case "(?<=":
                          case "(?<!":
                            h.push(new n.default(!0));
                            break;

                          case a.escapeChar:
                            d = !0, t && k();
                            break;

                          case a.optionalmarker[1]:
                          case a.groupmarker[1]:
                            b();
                            break;

                          case a.optionalmarker[0]:
                            h.push(new n.default(!1, !0));
                            break;

                          case a.groupmarker[0]:
                            h.push(new n.default(!0));
                            break;

                          case a.quantifiermarker[0]:
                            var E = new n.default(!1, !1, !0), S = (r = r.replace(/[{}]/g, "")).split("|"), _ = S[0].split(","), M = isNaN(_[0]) ? _[0] : parseInt(_[0]), w = 1 === _.length ? M : isNaN(_[1]) ? _[1] : parseInt(_[1]), O = isNaN(S[1]) ? S[1] : parseInt(S[1]);
                            "*" !== M && "+" !== M || (M = "*" === w ? 0 : 1), E.quantifier = {
                                min: M,
                                max: w,
                                jit: O
                            };
                            var T = h.length > 0 ? h[h.length - 1].matches : p.matches;
                            if ((i = T.pop()).isAlternator) {
                                T.push(i), T = i.matches;
                                var C = new n.default(!0), A = T.pop();
                                T.push(C), T = C.matches, i = A;
                            }
                            i.isGroup || (i = y([ i ])), T.push(i), T.push(E);
                            break;

                          case a.alternatormarker:
                            if (h.length > 0) {
                                var D = (s = h[h.length - 1]).matches[s.matches.length - 1];
                                u = s.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? h.pop() : x(s.matches);
                            } else u = x(p.matches);
                            if (u.isAlternator) h.push(u); else if (u.alternatorGroup ? (l = h.pop(), u.alternatorGroup = !1) : l = new n.default(!1, !1, !1, !0), 
                            l.matches.push(u), h.push(l), u.openGroup) {
                                u.openGroup = !1;
                                var B = new n.default(!0);
                                B.alternatorGroup = !0, h.push(B);
                            }
                            break;

                          default:
                            k();
                        }
                    }
                    m && b();
                    for (;h.length > 0; ) o = h.pop(), p.matches.push(o);
                    p.matches.length > 0 && (!function e(i) {
                        i && i.matches && i.matches.forEach((function(n, r) {
                            var o = i.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                            t || (g(n, a.groupmarker[0], 0), !0 !== n.openGroup && g(n, a.groupmarker[1]))), 
                            e(n);
                        }));
                    }(p), v.push(p));
                    (a.numericInput || a.isRTL) && function e(t) {
                        for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                            var n = parseInt(i);
                            if (t.matches[i].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                var r = t.matches[i];
                                t.matches.splice(i, 1), t.matches.splice(n + 1, 0, r);
                            }
                            void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === a.optionalmarker[0] ? o = a.optionalmarker[1] : o === a.optionalmarker[1] ? o = a.optionalmarker[0] : o === a.groupmarker[0] ? o = a.groupmarker[1] : o === a.groupmarker[1] && (o = a.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(v[0]);
                    return v;
                };
                var i = r(a(4963)), n = r(a(9695));
                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, a = this.el, i = this.dependencyLib;
                    s.EventRuler.off(a);
                    var f = function(t, a) {
                        "textarea" !== t.tagName.toLowerCase() && a.ignorables.push(n.default.ENTER);
                        var l = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && a.supportsInputType.includes(l) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!u) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", l), u = "text" === c.type, c = null;
                        } else u = "partial";
                        return !1 !== u ? function(t) {
                            var n, l;
                            function u() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== a.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && a.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                l.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== a.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, l = f.set, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, l = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    l = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = l;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, a) {
                                    l.call(this.el, null == t ? "" : !0 !== a && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, l = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (i.valHooks && (void 0 === i.valHooks[t] || !0 !== i.valHooks[t].inputmaskpatch)) {
                                        var n = i.valHooks[t] && i.valHooks[t].get ? i.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, s = i.valHooks[t] && i.valHooks[t].set ? i.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        i.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var i = n(t);
                                                    return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== a.nullable ? i : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var a = s(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), a;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(t) {
                                    s.EventRuler.on(t, "mouseenter", (function() {
                                        var t = this.inputmask._valueGet(!0);
                                        t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                        o.applyInputValue)(this, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, u;
                    }(a, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = a.placeholder, e.maxLength = void 0 !== a ? a.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in a && null === a.getAttribute("inputmode") && (a.inputMode = t.inputmode, 
                        a.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(a.autocomplete), 
                        l.iphone && (t.insertModeVisual = !1), s.EventRuler.on(a, "submit", c.EventHandlers.submitEvent), 
                        s.EventRuler.on(a, "reset", c.EventHandlers.resetEvent), s.EventRuler.on(a, "blur", c.EventHandlers.blurEvent), 
                        s.EventRuler.on(a, "focus", c.EventHandlers.focusEvent), s.EventRuler.on(a, "invalid", c.EventHandlers.invalidEvent), 
                        s.EventRuler.on(a, "click", c.EventHandlers.clickEvent), s.EventRuler.on(a, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        s.EventRuler.on(a, "mouseenter", c.EventHandlers.mouseenterEvent), s.EventRuler.on(a, "paste", c.EventHandlers.pasteEvent), 
                        s.EventRuler.on(a, "cut", c.EventHandlers.cutEvent), s.EventRuler.on(a, "complete", t.oncomplete), 
                        s.EventRuler.on(a, "incomplete", t.onincomplete), s.EventRuler.on(a, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && (s.EventRuler.on(a, "keydown", c.EventHandlers.keydownEvent), 
                        s.EventRuler.on(a, "keypress", c.EventHandlers.keypressEvent), s.EventRuler.on(a, "keyup", c.EventHandlers.keyupEvent)), 
                        (l.mobile || t.inputEventOnly) && a.removeAttribute("maxLength"), s.EventRuler.on(a, "input", c.EventHandlers.inputFallBackEvent), 
                        s.EventRuler.on(a, "compositionend", c.EventHandlers.compositionendEvent)), s.EventRuler.on(a, "setvalue", c.EventHandlers.setValueEvent), 
                        r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var d = (a.inputmask.shadowRoot || a.ownerDocument).activeElement;
                        if ("" !== a.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === a) {
                            (0, o.applyInputValue)(a, a.inputmask._valueGet(!0), t);
                            var p = r.getBuffer.call(e).slice();
                            !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== a && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === a || "" !== a.inputmask._valueGet(!0)) && (0, 
                            o.writeBuffer)(a, p), d === a && r.caret.call(e, a, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                        }
                    }
                };
                var i, n = (i = a(4528)) && i.__esModule ? i : {
                    default: i
                }, r = a(8711), o = a(7760), s = a(9716), l = a(9845), u = a(7215), c = a(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, a, i) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = a || !1, this.isAlternator = i || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var a = Object(this), i = a.length >>> 0;
                        if (0 === i) return !1;
                        for (var n = 0 | t, r = Math.max(n >= 0 ? n : i - Math.abs(n), 0); r < i; ) {
                            if (a[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            7149: function() {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            8711: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, a, i, n) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    a = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    a = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                    t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), a = t + r.text.length), 
                    {
                        begin: i ? t : u.call(o, t),
                        end: i ? a : u.call(o, a)
                    };
                    if (Array.isArray(t) && (a = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (a = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = i ? t : u.call(o, t), a = "number" == typeof (a = i ? a : u.call(o, a)) ? a : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * a;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: a
                        }, s.insertModeVisual && !1 === s.insertMode && t === a && (n || a++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, a); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var c = document.createTextNode("");
                                e.appendChild(c);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, a < e.inputmask._valueGet().length ? a : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", a), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, a, r = this, s = this.maskset, l = this.dependencyLib, u = i.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < u.length; t++) a = i.getTestTemplate.call(r, t, h, t - 1), h = a.locator.slice(), 
                    d[t] = l.extend(!0, {}, a);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = c - 1; t > f && (((a = d[t]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != a.match.static || !0 === a.match.static && a.locator[p.alternation] && n.checkAlternationMatch.call(r, a.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== i.getTests.call(r, t)[0].def)) && u[t] === i.getPlaceholder.call(r, t, a.match)); t--) c--;
                    return e ? {
                        l: c,
                        def: d[c] ? d[c].match : void 0
                    } : c;
                }, t.determineNewCaretPosition = function(e, t, a) {
                    var n = this, u = this.maskset, c = this.opts;
                    t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (a = a || c.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(n).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(n, o.call(n));
                            break;

                          case "radixFocus":
                            if (function(e) {
                                if ("" !== c.radixPoint && 0 !== c.digits) {
                                    var t = u.validPositions;
                                    if (void 0 === t[e] || t[e].input === i.getPlaceholder.call(n, e)) {
                                        if (e < l.call(n, -1)) return !0;
                                        var a = r.call(n).indexOf(c.radixPoint);
                                        if (-1 !== a) {
                                            for (var o in t) if (t[o] && a < o && t[o].input !== i.getPlaceholder.call(n, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(n).join("").indexOf(c.radixPoint);
                                e.end = e.begin = c.numericInput ? l.call(n, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(n, d, !0), h = l.call(n, -1 !== p || s.call(n, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = s.call(n, d, !1, !0) ? d : l.call(n, d); else {
                                var v = u.validPositions[p], m = i.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = i.getPlaceholder.call(n, h, m.match);
                                if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                    var k = l.call(n, h);
                                    (d >= k || d === h) && (h = k);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = i.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var a = this, n = e - 1;
                    if (e <= 0) return 0;
                    for (;n > 0 && (!0 === t && (!0 !== i.getTest.call(a, n).match.newBlockMarker || !s.call(a, n, void 0, !0)) || !0 !== t && !s.call(a, n, void 0, !0)); ) n--;
                    return n;
                }, t.translatePosition = u;
                var i = a(4713), n = a(7215);
                function r(e) {
                    var t = this.maskset;
                    return void 0 !== t.buffer && !0 !== e || (t.buffer = i.getMaskTemplate.call(this, !0, o.call(this), !0), 
                    void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                }
                function o(e, t, a) {
                    var i = this.maskset, n = -1, r = -1, o = a || i.validPositions;
                    for (var s in void 0 === e && (e = -1), o) {
                        var l = parseInt(s);
                        o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (n = l), l >= e && (r = l));
                    }
                    return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                }
                function s(e, t, a) {
                    var n = this, r = this.maskset, o = i.getTestTemplate.call(n, e).match;
                    if ("" === o.def && (o = i.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                    if (!0 === a && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (a) {
                            var s = i.getTests.call(n, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = i.determineTestTemplate.call(n, e, i.getTests.call(n, e)), u = i.getPlaceholder.call(n, e, l.match);
                        return l.match.def !== u;
                    }
                    return !1;
                }
                function l(e, t, a) {
                    var n = this;
                    void 0 === a && (a = !0);
                    for (var r = e + 1; "" !== i.getTest.call(n, r).match.def && (!0 === t && (!0 !== i.getTest.call(n, r).match.newBlockMarker || !s.call(n, r, void 0, !0)) || !0 !== t && !s.call(n, r, void 0, a)); ) r++;
                    return r;
                }
                function u(e) {
                    var t = this.opts, a = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !a || (e = Math.abs(this._valueGet().length - e)), 
                    e;
                }
            },
            4713: function(e, t) {
                function a(e, t) {
                    var a = (null != e.alternation ? e.mloc[i(e)] : e.locator).join("");
                    if ("" !== a) for (;a.length < t; ) a += "0";
                    return a;
                }
                function i(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function n(e, t, a) {
                    var i = this.opts, n = this.maskset;
                    if (void 0 !== (t = t || s.call(this, e).match).placeholder || !0 === a) return "function" == typeof t.placeholder ? t.placeholder(i) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === n.validPositions[e]) {
                            var r, o = u.call(this, e), l = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var c = 0; c < o.length; c++) if ("" !== o[c].match.def && !0 !== o[c].match.optionality && !0 !== o[c].match.optionalQuantifier && (!0 === o[c].match.static || void 0 === r || !1 !== o[c].match.fn.test(r.match.def, n, e, !0, i)) && (l.push(o[c]), 
                            !0 === o[c].match.static && (r = o[c]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return i.placeholder.charAt(e % i.placeholder.length);
                        }
                        return t.def;
                    }
                    return i.placeholder.charAt(e % i.placeholder.length);
                }
                function r(e, t, a) {
                    return this.maskset.validPositions[e] || o.call(this, e, u.call(this, e, t ? t.slice() : t, a));
                }
                function o(e, t) {
                    var i = this.opts;
                    e = e > 0 ? e - 1 : 0;
                    for (var n, r, o, l = a(s.call(this, e)), u = 0; u < t.length; u++) {
                        var c = t[u];
                        n = a(c, l.length);
                        var f = Math.abs(n - l);
                        (void 0 === r || "" !== n && f < r || o && !i.greedy && o.match.optionality && "master" === o.match.newBlockMarker && (!c.match.optionality || !c.match.newBlockMarker) || o && o.match.optionalQuantifier && !c.match.optionalQuantifier) && (r = f, 
                        o = c);
                    }
                    return o;
                }
                function s(e, t) {
                    var a = this.maskset;
                    return a.validPositions[e] ? a.validPositions[e] : (t || u.call(this, e))[0];
                }
                function l(e, t, a) {
                    function i(e) {
                        for (var t, a = [], i = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++i < t; ) a.push(String.fromCharCode(i)); else i = e.charCodeAt(n), 
                        a.push(e.charAt(n));
                        return a.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(a.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== i(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function u(e, t, a) {
                    var i, n = this, r = this.dependencyLib, s = this.maskset, u = this.opts, c = this.el, f = s.maskToken, d = t ? a : 0, p = t ? t.slice() : [ 0 ], h = [], v = !1, m = t ? t.join("") : "";
                    function g(t, a, n, r) {
                        function o(n, r, f) {
                            function p(e, t) {
                                var a = 0 === t.matches.indexOf(e);
                                return a || t.matches.every((function(i, n) {
                                    return !0 === i.isQuantifier ? a = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (a = p(e, i)), 
                                    !a;
                                })), a;
                            }
                            function k(e, t, a) {
                                var i, n;
                                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return i = e, !1;
                                    var o = void 0 !== a ? a : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === n || s < n) && -1 !== s && (i = e, n = s), !0;
                                })), i) {
                                    var r = i.locator[i.alternation];
                                    return (i.mloc[t] || i.mloc[r] || i.locator).slice((void 0 !== a ? a : i.alternation) + 1);
                                }
                                return void 0 !== a ? k(e, t) : void 0;
                            }
                            function y(e, t) {
                                var a = e.alternation, i = void 0 === t || a === t.alternation && -1 === e.locator[a].toString().indexOf(t.locator[a]);
                                if (!i && a > t.alternation) for (var n = t.alternation; n < a; n++) if (e.locator[n] !== t.locator[n]) {
                                    a = n, i = !0;
                                    break;
                                }
                                if (i) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[a];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[a] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function b(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var a = e.alternation + 1; a < e.locator.length; a++) if (e.locator[a] !== t.locator[a]) return !1;
                                return !0;
                            }
                            if (d > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                            if (d === e && void 0 === n.matches) return h.push({
                                match: n,
                                locator: r.reverse(),
                                cd: m,
                                mloc: {}
                            }), !0;
                            if (void 0 !== n.matches) {
                                if (n.isGroup && f !== n) {
                                    if (n = o(t.matches[t.matches.indexOf(n) + 1], r, f)) return !0;
                                } else if (n.isOptional) {
                                    var x = n, P = h.length;
                                    if (n = g(n, a, r, f)) {
                                        if (h.forEach((function(e, t) {
                                            t >= P && (e.match.optionality = !0);
                                        })), i = h[h.length - 1].match, void 0 !== f || !p(i, x)) return !0;
                                        v = !0, d = e;
                                    }
                                } else if (n.isAlternator) {
                                    var E, S = n, _ = [], M = h.slice(), w = r.length, O = !1, T = a.length > 0 ? a.shift() : -1;
                                    if (-1 === T || "string" == typeof T) {
                                        var C, A = d, D = a.slice(), B = [];
                                        if ("string" == typeof T) B = T.split(","); else for (C = 0; C < S.matches.length; C++) B.push(C.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for (var j = B.slice(), R = 0, L = s.excludes[e].length; R < L; R++) {
                                                var I = s.excludes[e][R].toString().split(":");
                                                r.length == I[1] && B.splice(B.indexOf(I[0]), 1);
                                            }
                                            0 === B.length && (delete s.excludes[e], B = j);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && A >= u.keepStatic) && (B = B.slice(0, 1));
                                        for (var F = 0; F < B.length; F++) {
                                            C = parseInt(B[F]), h = [], a = "string" == typeof T && k(d, C, w) || D.slice();
                                            var N = S.matches[C];
                                            if (N && o(N, [ C ].concat(r), f)) n = !0; else if (0 === F && (O = !0), N && N.matches && N.matches.length > S.matches[0].matches.length) break;
                                            E = h.slice(), d = A, h = [];
                                            for (var V = 0; V < E.length; V++) {
                                                var G = E[V], H = !1;
                                                G.match.jit = G.match.jit || O, G.alternation = G.alternation || w, y(G);
                                                for (var K = 0; K < _.length; K++) {
                                                    var U = _[K];
                                                    if ("string" != typeof T || void 0 !== G.alternation && B.includes(G.locator[G.alternation].toString())) {
                                                        if (G.match.nativeDef === U.match.nativeDef) {
                                                            H = !0, y(U, G);
                                                            break;
                                                        }
                                                        if (l(G, U, u)) {
                                                            y(G, U) && (H = !0, _.splice(_.indexOf(U), 0, G));
                                                            break;
                                                        }
                                                        if (l(U, G, u)) {
                                                            y(U, G);
                                                            break;
                                                        }
                                                        if (Q = U, !0 === (W = G).match.static && !0 !== Q.match.static && Q.match.fn.test(W.match.def, s, e, !1, u, !1)) {
                                                            b(G, U) || void 0 !== c.inputmask.userOptions.keepStatic ? y(G, U) && (H = !0, _.splice(_.indexOf(U), 0, G)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                H || _.push(G);
                                            }
                                        }
                                        h = M.concat(_), d = e, v = h.length > 0, n = _.length > 0, a = D.slice();
                                    } else n = o(S.matches[T] || t.matches[T], [ T ].concat(r), f);
                                    if (n) return !0;
                                } else if (n.isQuantifier && f !== t.matches[t.matches.indexOf(n) - 1]) for (var $ = n, z = a.length > 0 ? a.shift() : 0; z < (isNaN($.quantifier.max) ? z + 1 : $.quantifier.max) && d <= e; z++) {
                                    var q = t.matches[t.matches.indexOf($) - 1];
                                    if (n = o(q, [ z ].concat(r), q)) {
                                        if ((i = h[h.length - 1].match).optionalQuantifier = z >= $.quantifier.min, i.jit = (z + 1) * (q.matches.indexOf(i) + 1) > $.quantifier.jit, 
                                        i.optionalQuantifier && p(i, q)) {
                                            v = !0, d = e;
                                            break;
                                        }
                                        return i.jit && (s.jitOffset[e] = q.matches.length - q.matches.indexOf(i)), !0;
                                    }
                                } else if (n = g(n, a, r, f)) return !0;
                            } else d++;
                            var W, Q;
                        }
                        for (var f = a.length > 0 ? a.shift() : 0; f < t.matches.length; f++) if (!0 !== t.matches[f].isQuantifier) {
                            var p = o(t.matches[f], [ f ].concat(n), r);
                            if (p && d === e) return p;
                            if (d > e) break;
                        }
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var k, y = e - 1; void 0 === (k = s.validPositions[y] || s.tests[y]) && y > -1; ) y--;
                            void 0 !== k && y > -1 && (p = function(e, t) {
                                var a, i = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (i = o.call(n, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === i.length ? (a = e.alternation, i = e.locator.slice()) : e.locator[a] && -1 === i[a].toString().indexOf(e.locator[a]) && (i[a] += "," + e.locator[a]));
                                }))), i;
                            }(y, k), m = p.join(""), d = y);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === m) return s.tests[e];
                        for (var b = p.shift(); b < f.length; b++) {
                            if (g(f[b], p, [ b ]) && d === e || d > e) break;
                        }
                    }
                    return (0 === h.length || v) && h.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: m
                    }), void 0 !== t && s.tests[e] ? r.extend(!0, [], h) : (s.tests[e] = r.extend(!0, [], h), 
                    s.tests[e]);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = o, t.getDecisionTaker = i, t.getMaskTemplate = function(e, t, a, i, s) {
                    var l = this, c = this.opts, f = this.maskset, d = c.greedy;
                    s && (c.greedy = !1);
                    t = t || 0;
                    var p, h, v, m, g = [], k = 0;
                    do {
                        if (!0 === e && f.validPositions[k]) v = s && !0 === f.validPositions[k].match.optionality && void 0 === f.validPositions[k + 1] && (!0 === f.validPositions[k].generatedInput || f.validPositions[k].input == c.skipOptionalPartCharacter && k > 0) ? o.call(l, k, u.call(l, k, p, k - 1)) : f.validPositions[k], 
                        h = v.match, p = v.locator.slice(), g.push(!0 === a ? v.input : !1 === a ? h.nativeDef : n.call(l, k, h)); else {
                            v = r.call(l, k, p, k - 1), h = v.match, p = v.locator.slice();
                            var y = !0 !== i && (!1 !== c.jitMasking ? c.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== c.groupSeparator && null === h.fn || f.validPositions[k - 1] && h.static && h.def !== c.groupSeparator && null === h.fn) && f.tests[k] && 1 === f.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === a ? h.nativeDef : n.call(l, k, h)) : m = !1;
                        }
                        k++;
                    } while (!0 !== h.static || "" !== h.def || t > k);
                    "" === g[g.length - 1] && g.pop();
                    !1 === a && void 0 !== f.maskLength || (f.maskLength = k - 1);
                    return c.greedy = d, g;
                }, t.getPlaceholder = n, t.getTest = s, t.getTests = u, t.getTestTemplate = r, t.isSubsetOf = l;
            },
            7215: function(e, t, a) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = l, t.checkAlternationMatch = function(e, t, a) {
                    for (var i, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== a ? a.split(",") : [], s = 0; s < o.length; s++) -1 !== (i = e.indexOf(o[s])) && e.splice(i, 1);
                    for (var l = 0; l < e.length; l++) if (n.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.isComplete = c, t.isValid = f, t.refreshFromBuffer = p, t.revalidateMask = v, 
                t.handleRemove = function(e, t, a, i, s) {
                    var u = this, c = this.maskset, f = this.opts;
                    if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                    u.isRTL)) {
                        var d = a.end;
                        a.end = a.begin, a.begin = d;
                    }
                    var p, h = o.getLastValidPosition.call(u, void 0, !0);
                    a.end >= o.getBuffer.call(u).length && h >= a.end && (a.end = h + 1);
                    t === r.default.BACKSPACE ? a.end - a.begin < 1 && (a.begin = o.seekPrevious.call(u, a.begin)) : t === r.default.DELETE && a.begin === a.end && (a.end = o.isMask.call(u, a.end, !0, !0) ? a.end + 1 : o.seekNext.call(u, a.end) + 1);
                    if (!1 !== (p = v.call(u, a))) {
                        if (!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, a.begin).match.def.indexOf("|")) {
                            var m = l.call(u, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? o.seekNext.call(u, m.pos.begin ? m.pos.begin : m.pos) : o.getLastValidPosition.call(u, -1, !0);
                                (t !== r.default.DELETE || a.begin > g) && a.begin;
                            }
                        }
                        !0 !== i && (c.p = t === r.default.DELETE ? a.begin + p : a.begin, c.p = o.determineNewCaretPosition.call(u, {
                            begin: c.p,
                            end: c.p
                        }, !1).begin);
                    }
                };
                var i, n = a(4713), r = (i = a(4528)) && i.__esModule ? i : {
                    default: i
                }, o = a(8711), s = a(6030);
                function l(e, t, a, i, r, s) {
                    var u, c, d, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), M = P.extend(!0, {}, S.tests), w = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                    if (s && (y = s.begin, b = s.end, s.begin > s.end && (y = s.end, b = s.begin)), 
                    -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                        if (p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        u = T, c = S.validPositions[u].alternation, p = d;
                    }
                    if (void 0 !== c) {
                        m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var C = [], A = -1;
                        for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                        A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === s || h < y || h >= b) && C.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, o.resetMaskSet.call(x, !0), w = !0, h = 0; h < C.length && (g = w.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                            k = C[h], w = f.call(x, g, k, !1, i, !0)); h++) h === A && (O = w), 1 == e && w && (O = {
                                caretPos: h
                            });
                            if (w) break;
                            if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                            S.tests = P.extend(!0, {}, M), !S.excludes[m]) {
                                O = l.call(x, e, t, a, i, m - 1, s);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                O = l.call(x, e, t, a, i, m - 1, s);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return O && !1 === E.keepStatic || delete S.excludes[m], O;
                }
                function u(e, t, a) {
                    var i = this.opts, n = this.maskset;
                    switch (i.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = n.validPositions[a - 1];
                        e = 0 === a || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof i.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(n.validPositions), e = i.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, a = this.opts, i = this.maskset;
                    if ("function" == typeof a.isComplete) return a.isComplete(e, a);
                    if ("*" !== a.repeat) {
                        var r = !1, s = o.determineLastRequiredPosition.call(t, !0), l = o.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            r = !0;
                            for (var u = 0; u <= l; u++) {
                                var c = n.getTestTemplate.call(t, u).match;
                                if (!0 !== c.static && void 0 === i.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                    r = !1;
                                    break;
                                }
                            }
                        }
                        return r;
                    }
                }
                function f(e, t, a, i, r, s, d) {
                    var m = this, g = this.dependencyLib, k = this.opts, y = m.maskset;
                    function b(e) {
                        return m.isRTL ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                    }
                    a = !0 === a;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(m, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(m, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(m, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function E(t, a, r) {
                        var s = !1;
                        return n.getTests.call(m, t).every((function(l, c) {
                            var f = l.match;
                            if (o.getBuffer.call(m, !0), !1 !== (s = (!f.jit || void 0 !== y.validPositions[o.seekPrevious.call(m, t)]) && (null != f.fn ? f.fn.test(a, y, t, r, k, b(e)) : (a === f.def || a === k.skipOptionalPartCharacter) && "" !== f.def && {
                                c: n.getPlaceholder.call(m, t, f, !0) || f.def,
                                pos: t
                            }))) {
                                var d = void 0 !== s.c ? s.c : a, p = t;
                                return d = d === k.skipOptionalPartCharacter && !0 === f.static ? n.getPlaceholder.call(m, t, f, !0) || f.def : d, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (p = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(m, e, g.extend({}, l, {
                                    input: u.call(m, d, f, p)
                                }), i, p) && (s = !1), !1);
                            }
                            return !0;
                        })), s;
                    }
                    void 0 !== e.begin && (x = m.isRTL ? e.end : e.begin);
                    var S = !0, _ = g.extend(!0, {}, y.validPositions);
                    if (!1 === k.keepStatic && void 0 !== y.excludes[x] && !0 !== r && !0 !== i) for (var M = x; M < (m.isRTL ? e.begin : e.end); M++) void 0 !== y.excludes[M] && (y.excludes[M] = void 0, 
                    delete y.tests[M]);
                    if ("function" == typeof k.preValidation && !0 !== i && !0 !== s && (S = P(S = k.preValidation.call(m, o.getBuffer.call(m), x, t, b(e), k, y, e, a || r))), 
                    !0 === S) {
                        if (S = E(x, t, a), (!a || !0 === i) && !1 === S && !0 !== s) {
                            var w = y.validPositions[x];
                            if (!w || !0 !== w.match.static || w.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === y.validPositions[o.seekNext.call(m, x)] || e.end > x) {
                                    var O = !1;
                                    if (y.jitOffset[x] && void 0 === y.validPositions[o.seekNext.call(m, x)] && !1 !== (S = f.call(m, x + y.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                    O = !0), e.end > x && (y.validPositions[x] = void 0), !O && !o.isMask.call(m, x, k.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(m, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, a))) {
                                        S = h.call(m, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: o.seekNext.call(m, x)
                            };
                        }
                        !1 !== S || !k.keepStatic || !c.call(m, o.getBuffer.call(m)) && 0 !== x || a || !0 === r ? b(e) && y.tests[x] && y.tests[x].length > 1 && k.keepStatic && !a && !0 !== r && (S = l.call(m, !0)) : S = l.call(m, x, t, a, i, void 0, e), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== i && !0 !== s) {
                        var A = k.postValidation.call(m, o.getBuffer.call(m, !0), void 0 !== e.begin ? m.isRTL ? e.end : e.begin : e, t, S, k, y, a, d);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === s ? (o.resetMaskSet.call(m, !0), 
                    y.validPositions = g.extend(!0, {}, _)) : h.call(m, void 0, x, !0);
                    var D = P(S);
                    void 0 !== m.maxLength && (o.getBuffer.call(m).length > m.maxLength && !i && (o.resetMaskSet.call(m, !0), 
                    y.validPositions = g.extend(!0, {}, _), D = !1));
                    return D;
                }
                function d(e, t, a) {
                    for (var i = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[a.shiftPositions ? "def" : "nativeDef"] && (!a.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || a.regex && !o[s].match.static && o[s].match.fn.test(t.input))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== i.jitOffset[e] && (r = d.call(this, e + i.jitOffset[e], t, a)), 
                    r;
                }
                function p(e, t, a) {
                    var i, n, r = this, l = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? a.slice().reverse() : a;
                    if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), l.tests = {}, 
                    e = 0, t = a.length, n = o.determineNewCaretPosition.call(r, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (i = e; i < t; i++) delete l.validPositions[i];
                        n = e;
                    }
                    var p = new c.Event("keypress");
                    for (i = e; i < t; i++) {
                        p.which = d[i].toString().charCodeAt(0), r.ignorable = !1;
                        var h = s.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                        !1 !== h && void 0 !== h && (n = h.forwardPosition);
                    }
                    u.skipOptionalPartCharacter = f;
                }
                function h(e, t, a) {
                    var i = this, r = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) {
                        if (void 0 === r.validPositions[l] && !o.isMask.call(i, l, !1)) if (0 == l ? n.getTest.call(i, l) : r.validPositions[l - 1]) {
                            var u = n.getTests.call(i, l).slice();
                            "" === u[u.length - 1].match.def && u.pop();
                            var c, d = n.determineTestTemplate.call(i, l, u);
                            if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (c = r.validPositions[l + 1]) && !0 === c.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                input: n.getPlaceholder.call(i, l, d.match, !0) || d.match.def
                            })).generatedInput = !0, v.call(i, l, d, !0), !0 !== a)) {
                                var p = r.validPositions[t].input;
                                return r.validPositions[t] = void 0, f.call(i, t, p, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, a, i) {
                    var r = this, s = this.maskset, l = this.opts, u = this.dependencyLib;
                    function c(e, t, a) {
                        var i = t[e];
                        if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var n = a.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = a.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), i = void 0 !== i ? i : h, h !== v || l.insertMode && void 0 !== s.validPositions[i] && void 0 === a || void 0 === t) {
                        var g, k = u.extend(!0, {}, s.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                        for (s.p = h, g = y; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = i, E = P;
                        for (t && (s.validPositions[i] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                            if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(r, E).match.def; ) {
                                    if (!1 !== (x = d.call(r, E, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && o.getBuffer.call(r, !0);
                                        var S = f.call(r, E, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && E > s.maskLength) break;
                                    E++;
                                }
                                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                        !1;
                    } else t && n.getTest.call(r, i).match.cd === t.match.cd && (s.validPositions[i] = u.extend(!0, {}, t));
                    return o.resetMaskSet.call(r, !0), p;
                }
            }
        }, t = {};
        function a(i) {
            var n = t[i];
            if (void 0 !== n) return n.exports;
            var r = t[i] = {
                exports: {}
            };
            return e[i](r, r.exports, a), r.exports;
        }
        var i = {};
        return function() {
            var e, t = i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a(3851), a(219), a(207), a(5296);
            var n = ((e = a(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = n;
        }(), i;
    }();
}));

/***/ }),

/***/ "./node_modules/just-validate/dist/js/just-validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/just-validate/dist/js/just-validate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
    var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
        remove = function remove() {
        // The check here seems pointless, since we're not adding this
        // method to the prototypes of any any elements that CAN be the
        // root of the DOM. However, it's required by spec (see point 1 of
        // https://dom.spec.whatwg.org/#dom-childnode-remove) and would
        // theoretically make a difference if somebody .apply()ed this
        // method to the DOM's root node, so let's roll with it.
        if (this.parentNode != null) {
            this.parentNode.removeChild(this);
        }
    };

    for (var i = 0; i < typesToPatch.length; i++) {
        var type = typesToPatch[i];
        if (window[type] && !window[type].prototype.remove) {
            window[type].prototype.remove = remove;
        }
    }
})();
(function (root) {

    // Store setTimeout reference so promise-polyfill will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var setTimeoutFunc = setTimeout;

    function noop() {}

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
        return function () {
            fn.apply(thisArg, arguments);
        };
    }

    function Promise(fn) {
        if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
        if (typeof fn !== 'function') throw new TypeError('not a function');
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];

        doResolve(fn, this);
    }

    function handle(self, deferred) {
        while (self._state === 3) {
            self = self._value;
        }
        if (self._state === 0) {
            self._deferreds.push(deferred);
            return;
        }
        self._handled = true;
        Promise._immediateFn(function () {
            var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                return;
            }
            var ret;
            try {
                ret = cb(self._value);
            } catch (e) {
                reject(deferred.promise, e);
                return;
            }
            resolve(deferred.promise, ret);
        });
    }

    function resolve(self, newValue) {
        try {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
            if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
                var then = newValue.then;
                if (newValue instanceof Promise) {
                    self._state = 3;
                    self._value = newValue;
                    finale(self);
                    return;
                } else if (typeof then === 'function') {
                    doResolve(bind(then, newValue), self);
                    return;
                }
            }
            self._state = 1;
            self._value = newValue;
            finale(self);
        } catch (e) {
            reject(self, e);
        }
    }

    function reject(self, newValue) {
        self._state = 2;
        self._value = newValue;
        finale(self);
    }

    function finale(self) {
        if (self._state === 2 && self._deferreds.length === 0) {
            Promise._immediateFn(function () {
                if (!self._handled) {
                    Promise._unhandledRejectionFn(self._value);
                }
            });
        }

        for (var i = 0, len = self._deferreds.length; i < len; i++) {
            handle(self, self._deferreds[i]);
        }
        self._deferreds = null;
    }

    function Handler(onFulfilled, onRejected, promise) {
        this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
        this.onRejected = typeof onRejected === 'function' ? onRejected : null;
        this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
        var done = false;
        try {
            fn(function (value) {
                if (done) return;
                done = true;
                resolve(self, value);
            }, function (reason) {
                if (done) return;
                done = true;
                reject(self, reason);
            });
        } catch (ex) {
            if (done) return;
            done = true;
            reject(self, ex);
        }
    }

    Promise.prototype['catch'] = function (onRejected) {
        return this.then(null, onRejected);
    };

    Promise.prototype.then = function (onFulfilled, onRejected) {
        var prom = new this.constructor(noop);

        handle(this, new Handler(onFulfilled, onRejected, prom));
        return prom;
    };

    Promise.all = function (arr) {
        var args = Array.prototype.slice.call(arr);

        return new Promise(function (resolve, reject) {
            if (args.length === 0) return resolve([]);
            var remaining = args.length;

            function res(i, val) {
                try {
                    if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
                        var then = val.then;
                        if (typeof then === 'function') {
                            then.call(val, function (val) {
                                res(i, val);
                            }, reject);
                            return;
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                } catch (ex) {
                    reject(ex);
                }
            }

            for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
            }
        });
    };

    Promise.resolve = function (value) {
        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
            return value;
        }

        return new Promise(function (resolve) {
            resolve(value);
        });
    };

    Promise.reject = function (value) {
        return new Promise(function (resolve, reject) {
            reject(value);
        });
    };

    Promise.race = function (values) {
        return new Promise(function (resolve, reject) {
            for (var i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
            }
        });
    };

    // Use polyfill for setImmediate for performance gains
    Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
        setImmediate(fn);
    } || function (fn) {
        setTimeoutFunc(fn, 0);
    };

    Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
        if (typeof console !== 'undefined' && console) {
            console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
        }
    };

    /**
     * Set the immediate function to execute callbacks
     * @param fn {function} Function to execute
     * @deprecated
     */
    Promise._setImmediateFn = function _setImmediateFn(fn) {
        Promise._immediateFn = fn;
    };

    /**
     * Change the function to execute on unhandled rejection
     * @param {function} fn Function to execute on unhandled rejection
     * @deprecated
     */
    Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
        Promise._unhandledRejectionFn = fn;
    };

    if ( true && module.exports) {
        module.exports = Promise;
    } else if (!root.Promise) {
        root.Promise = Promise;
    }
})(window);

/* global Promise */
(function (window) {
    'use strict';

    if (!window.Promise) {
        window.Promise = Promise;
    }

    var RULE_REQUIRED = 'required',
        RULE_EMAIL = 'email',
        RULE_MINLENGTH = 'minLength',
        RULE_MAXLENGTH = 'maxLength',
        RULE_PASSWORD = 'password',
        RULE_ZIP = 'zip',
        RULE_PHONE = 'phone',
        RULE_REMOTE = 'remote',
        RULE_STRENGTH = 'strength',
        RULE_FUNCTION = 'function';

    var formatParams = function formatParams(params, method) {
        if (typeof params === 'string') {
            return params;
        }

        var letter = method.toLowerCase() === 'post' ? '' : '?';
        if (Array.isArray(params)) {
            return letter + params.map(function (obj) {
                return obj.name + '=' + obj.value;
            }).join('&');
        }
        return letter + Object.keys(params).map(function (key) {
            return key + '=' + params[key];
        }).join('&');
    };

    var ajax = function ajax(options) {
        var url = options.url,
            method = options.method,
            data = options.data,
            debug = options.debug,
            callback = options.callback,
            error = options.error;

        if (debug) {
            callback('test');
            return;
        }

        var async = options.async === false ? false : true;
        var xhr = new XMLHttpRequest();
        var params = formatParams(data, 'get');
        var body = null;

        if (method.toLowerCase() === 'post') {
            body = formatParams(data, 'post');
            params = '';
        }

        xhr.open(method, url + params, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    callback(this.responseText);
                } else {
                    error && error(this.responseText);
                }
            }
        };
        xhr.send(body);
    };

    var JustValidate = function JustValidate(selector, options) {
        this.options = options || {};
        this.rules = this.options.rules || {};
        this.messages = this.options.messages || undefined;
        this.colorWrong = this.options.colorWrong || '#B81111';
        this.result = {};
        this.elements = [];
        this.tooltip = this.options.tooltip || {};
        this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5000;
        this.tooltipFadeOutClass = this.tooltip.fadeOutClass || 'just-validate-tooltip-hide';
        this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll('.just-validate-tooltip-container');
        this.bindHandlerKeyup = this.handlerKeyup.bind(this);
        this.submitHandler = this.options.submitHandler || undefined;
        this.invalidFormCallback = this.options.invalidFormCallback || undefined;
        this.promisesRemote = [];
        this.isValidationSuccess = false;
        this.focusWrongField = this.options.focusWrongField || false;
        this.REGEXP = {
            // eslint-disable-next-line max-len
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            zip: /^\d{5}(-\d{4})?$/,
            phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
            password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
            strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
        };
        this.DEFAULT_REMOTE_ERROR = 'Error';
        this.state = {
            tooltipsTimer: null
        };

        this.setForm(document.querySelector(selector));
    };

    JustValidate.prototype = {
        defaultRules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minLength: 3,
                maxLength: 15
            },
            text: {
                required: true,
                maxLength: 300,
                minLength: 5
            },
            password: {
                required: true,
                password: true,
                minLength: 4,
                maxLength: 8
            },
            zip: {
                required: true,
                zip: true
            },
            phone: {
                phone: true
            }
        },

        defaultMessages: {
            required: 'The field is required',
            email: 'Please, type a valid email',
            maxLength: 'The field must contain a maximum of :value characters',
            minLength: 'The field must contain a minimum of :value characters',
            password: 'Password is not valid',
            remote: 'Email already exists',
            strength: 'Password must contents at least one uppercase letter, one lowercase letter and one number',
            function: 'Function returned false'
        },

        /**
         * Keyup handler
         * @param ev
         */
        handlerKeyup: function handlerKeyup(ev) {
            var elem = ev.target,
                item = {
                name: elem.getAttribute('data-validate-field'),
                value: elem.value
            };
            delete this.result[item.name];
            this.validateItem({
                name: item.name,
                value: item.value,
                group: [],
                isKeyupChange: true
            });
            this.renderErrors();
        },

        setterEventListener: function setterEventListener(item, event, handler, type) {
            if (event === 'keyup') {
                handler = this.bindHandlerKeyup;
            }
            switch (type) {
                case 'add':
                    {
                        item.addEventListener(event, handler);
                        break;
                    }
                case 'remove':
                    {
                        item.removeEventListener(event, handler);
                        break;
                    }
            }
        },

        getElementsRealValue: function getElementsRealValue() {
            var $elems = this.$form.querySelectorAll('*'),
                name = void 0,
                result = {};
            for (var i = 0, len = $elems.length; i < len; ++i) {
                name = $elems[i].getAttribute('name');
                if (name) {
                    if ($elems[i].type === 'checkbox') {
                        result[name] = $elems[i].checked;
                        continue;
                    }
                    result[name] = $elems[i].value;
                }
            }
            return result;
        },

        validationFailed: function validationFailed() {
            if (this.invalidFormCallback) {
                this.invalidFormCallback(this.result);
            }

            var $firstErrorField = document.querySelector('.js-validate-error-field');

            if (this.focusWrongField && $firstErrorField && $firstErrorField.focus) {
                $firstErrorField.focus();
            }
        },

        validationSuccess: function validationSuccess() {
            if (Object.keys(this.result).length === 0) {
                this.isValidationSuccess = false;
                if (this.submitHandler) {
                    var realValues = this.getElementsRealValue();
                    this.submitHandler(this.$form, realValues, ajax);
                    return;
                }

                this.$form.submit();
            }
        },

        setForm: function setForm(form) {
            var _this = this;

            this.$form = form;
            this.$form.setAttribute('novalidate', 'novalidate');
            this.$form.addEventListener('submit', function (ev) {
                ev.preventDefault();
                _this.result = [];
                _this.getElements();

                if (!_this.promisesRemote.length) {
                    if (_this.isValidationSuccess) {
                        _this.validationSuccess();
                    } else {
                        _this.validationFailed();
                    }
                    return;
                }

                Promise.all(_this.promisesRemote).then(function () {
                    _this.promisesRemote = [];

                    if (_this.isValidationSuccess) {
                        _this.validationSuccess();
                    } else {
                        _this.validationFailed();
                    }
                });
            });
        },

        isEmail: function isEmail(email) {
            return this.REGEXP.email.test(email);
        },

        isZip: function isZip(zip) {
            return this.REGEXP.zip.test(zip);
        },

        isPhone: function isPhone(phone) {
            return this.REGEXP.phone.test(phone);
        },

        isPassword: function isPassword(password) {
            return this.REGEXP.password.test(password);
        },

        isEmpty: function isEmpty(val) {
            var newVal = val;
            if (val.trim) {
                newVal = val.trim();
            }

            return !newVal;
        },

        checkLengthMax: function checkLengthMax(text, max) {
            return text.length <= max;
        },

        checkLengthMin: function checkLengthMin(text, min) {
            return text.length >= min;
        },

        checkStrengthPass: function checkStrengthPass(password) {
            return this.REGEXP.strengthPass.test(password);
        },

        getElements: function getElements() {
            var _this2 = this;

            var elems = this.$form.querySelectorAll('[data-validate-field]');
            this.elements = [];

            var _loop = function _loop(i, len) {
                var item = elems[i],
                    name = item.getAttribute('data-validate-field'),
                    value = item.value,
                    isElemInGroup = false,
                    group = [];

                if (item.type === 'checkbox') {
                    value = item.checked || '';
                    item.addEventListener('change', function (ev) {
                        var elem = ev.target,
                            item = {
                            name: elem.getAttribute('data-validate-field'),
                            value: elem.checked
                        };

                        delete _this2.result[item.name];
                        _this2.validateItem({
                            name: item.name,
                            value: item.value,
                            group: []
                        });
                        _this2.renderErrors();
                    });
                }

                if (item.type === 'radio') {
                    var findElem = _this2.elements.filter(function (item) {
                        if (item.name === name) {
                            return item;
                        }
                    })[0];

                    if (findElem) {
                        findElem.group.push(item.checked);
                        isElemInGroup = true;
                    } else {
                        group.push(item.checked);
                    }

                    item.addEventListener('change', function (ev) {
                        var elem = ev.target,
                            item = {
                            name: elem.getAttribute('data-validate-field'),
                            value: elem.checked
                        };

                        delete _this2.result[item.name];
                        _this2.validateItem({
                            name: item.name,
                            value: item.value,
                            group: []
                        });
                        _this2.renderErrors();
                    });
                }

                _this2.setterEventListener(item, 'keyup', _this2.handlerKeyup, 'add');

                if (!isElemInGroup) {
                    _this2.elements.push({
                        name: name,
                        value: value,
                        group: group
                    });
                }
            };

            for (var i = 0, len = elems.length; i < len; ++i) {
                _loop(i, len);
            }

            this.validateElements();
        },

        /**
         * Validate Required field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateRequired: function validateRequired(value) {
            return !this.isEmpty(value);
        },

        /**
         * Validate Email field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateEmail: function validateEmail(value) {
            return this.isEmail(value);
        },

        /**
         * Validate Phone field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validatePhone: function validatePhone(value) {
            return this.isPhone(value);
        },

        /**
         * Validate field for Min Length
         * @param {string} value Value for validate
         * @param {integer} min
         * @returns {boolean} True if validate is OK
         */
        validateMinLength: function validateMinLength(value, min) {
            return this.checkLengthMin(value, min);
        },

        /**
         * Validate field for Max Length
         * @param {string} value Value for validate
         * @param {integer} max
         * @returns {boolean} True if validate is OK
         */
        validateMaxLength: function validateMaxLength(value, max) {
            return this.checkLengthMax(value, max);
        },

        /**
         * Validate field for strength password
         * @param {string} password Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateStrengthPass: function validateStrengthPass(password) {
            return this.checkStrengthPass(password);
        },

        /**
         * Validate Password field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validatePassword: function validatePassword(value) {
            return this.isPassword(value);
        },

        /**
         * Validate ZIP field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateZip: function validateZip(value) {
            return this.isZip(value);
        },

        /**
         * Validate for remote check
         * @param value
         * @param name
         * @param {string} url
         * @param {string} successAnswer
         * @returns {boolean} True if validate is OK
         */
        validateRemote: function validateRemote(_ref) {
            var value = _ref.value,
                name = _ref.name,
                url = _ref.url,
                successAnswer = _ref.successAnswer,
                sendParam = _ref.sendParam,
                method = _ref.method;

            return new Promise(function (resolve) {
                ajax({
                    url: url,
                    method: method,
                    data: _defineProperty({}, sendParam, value),
                    async: true,
                    callback: function callback(data) {
                        if (data.toLowerCase() === successAnswer.toLowerCase()) {
                            resolve('ok');
                        }
                        resolve({
                            type: 'incorrect',
                            name: name
                        });
                    },
                    error: function error() {
                        resolve({
                            type: 'error',
                            name: name
                        });
                    }
                });
            });
        },

        generateMessage: function generateMessage(rule, name, value) {
            var messages = this.messages || this.defaultMessages;
            var customMessage = messages[name] && messages[name][rule] || this.messages && typeof this.messages[name] === 'string' && messages[name] ||
            // (messages[name][rule]) ||
            this.defaultMessages[rule] || this.DEFAULT_REMOTE_ERROR;

            if (value) {
                customMessage = customMessage.replace(':value', value.toString());
            }
            this.result[name] = {
                message: customMessage
            };
        },

        validateElements: function validateElements() {
            var _this3 = this;

            this.lockForm();
            this.elements.forEach(function (item) {
                _this3.validateItem({
                    name: item.name,
                    value: item.value,
                    group: item.group
                });
            });

            if (!this.promisesRemote.length) {
                this.renderErrors();
                return;
            }

            Promise.all(this.promisesRemote).then(function (resp) {
                resp.forEach(function (result) {
                    if (result === 'ok') {
                        _this3.renderErrors();
                        return;
                    }
                    if (result.type === 'error') {
                        alert('Server error occured. Please try later.');
                    }
                    _this3.generateMessage(RULE_REMOTE, result.name);
                    _this3.renderErrors();
                });
            });
        },

        validateItem: function validateItem(_ref2) {
            var _this4 = this;

            var name = _ref2.name,
                group = _ref2.group,
                value = _ref2.value,
                isKeyupChange = _ref2.isKeyupChange;

            var rules = this.rules[name] || this.defaultRules[name] || false;

            if (!rules) {
                return;
            }
            for (var rule in rules) {
                var ruleValue = rules[rule];

                if (rule !== RULE_REQUIRED && rule !== RULE_FUNCTION && value == '') {
                    return;
                }
                switch (rule) {
                    case RULE_FUNCTION:
                        {
                            if (typeof ruleValue !== 'function') {
                                break;
                            }
                            if (ruleValue(name, value)) {
                                break;
                            }
                            this.generateMessage(RULE_FUNCTION, name, ruleValue);
                            return;
                        }
                    case RULE_REQUIRED:
                        {
                            if (!ruleValue) {
                                break;
                            }

                            if (group.length) {
                                var isSuccessValidateGroup = false;

                                // At least one item in group
                                group.forEach(function (item) {
                                    if (_this4.validateRequired(item)) {
                                        isSuccessValidateGroup = true;
                                    }
                                });

                                if (isSuccessValidateGroup) {
                                    break;
                                }
                            } else {
                                if (this.validateRequired(value)) {
                                    break;
                                }
                            }

                            this.generateMessage(RULE_REQUIRED, name);
                            return;
                        }

                    case RULE_EMAIL:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateEmail(value)) {
                                break;
                            }
                            this.generateMessage(RULE_EMAIL, name);
                            return;
                        }

                    case RULE_MINLENGTH:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateMinLength(value, ruleValue)) {
                                break;
                            }
                            this.generateMessage(RULE_MINLENGTH, name, ruleValue);
                            return;
                        }

                    case RULE_MAXLENGTH:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateMaxLength(value, ruleValue)) {
                                break;
                            }
                            this.generateMessage(RULE_MAXLENGTH, name, ruleValue);
                            return;
                        }

                    case RULE_PHONE:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validatePhone(value)) {
                                break;
                            }
                            this.generateMessage(RULE_PHONE, name);
                            return;
                        }

                    case RULE_PASSWORD:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validatePassword(value)) {
                                break;
                            }
                            this.generateMessage(RULE_PASSWORD, name);
                            return;
                        }

                    case RULE_STRENGTH:
                        {
                            if (!ruleValue || (typeof ruleValue === 'undefined' ? 'undefined' : _typeof(ruleValue)) !== 'object') {
                                break;
                            }

                            if (ruleValue.default && this.validateStrengthPass(value)) {
                                break;
                            }

                            if (ruleValue.custom) {
                                var regexp = void 0;

                                try {
                                    regexp = new RegExp(ruleValue.custom);
                                } catch (e) {
                                    regexp = this.REGEXP.strengthPass;

                                    // eslint-disable-next-line no-console
                                    console.error('Custom regexp for strength rule is not valid. Default regexp was used.');
                                }

                                if (regexp.test(value)) {
                                    break;
                                }
                            }
                            this.generateMessage(RULE_STRENGTH, name);
                            return;
                        }

                    case RULE_ZIP:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateZip(value)) {
                                break;
                            }
                            this.generateMessage(RULE_ZIP, name);
                            return;
                        }

                    case RULE_REMOTE:
                        {
                            if (isKeyupChange) {
                                break;
                            }

                            if (!ruleValue) {
                                break;
                            }

                            var url = ruleValue.url,
                                successAnswer = ruleValue.successAnswer,
                                method = ruleValue.method,
                                sendParam = ruleValue.sendParam;

                            var $elem = this.$form.querySelector('input[data-validate-field="' + name + '"]');
                            this.setterEventListener($elem, 'keyup', this.handlerKeyup, 'remove');

                            this.promisesRemote.push(this.validateRemote({
                                name: name,
                                value: value,
                                url: url,
                                method: method,
                                sendParam: sendParam,
                                successAnswer: successAnswer
                            }));
                            return;
                        }
                }
            }
        },

        clearErrors: function clearErrors() {
            var $elems = document.querySelectorAll('.js-validate-error-label');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].remove();
            }

            $elems = document.querySelectorAll('.js-validate-error-field');
            for (var _i = 0, _len = $elems.length; _i < _len; ++_i) {
                $elems[_i].classList.remove('js-validate-error-field');
                $elems[_i].style.border = '';
                $elems[_i].style.color = '';
            }
        },

        renderErrors: function renderErrors() {
            var _this5 = this;

            this.clearErrors();
            this.unlockForm();

            this.isValidationSuccess = false;
            if (Object.keys(this.result).length === 0) {
                this.isValidationSuccess = true;
                return;
            }

            for (var _item in this.result) {
                var message = this.result[_item].message;
                var $elems = this.$form.querySelectorAll('[data-validate-field="' + _item + '"]');

                var $elem = $elems[$elems.length - 1];

                var div = document.createElement('div');

                div.innerHTML = message;
                div.className = 'js-validate-error-label';
                div.setAttribute('style', 'color: ' + this.colorWrong);
                $elem.style.border = '1px solid ' + this.colorWrong;
                $elem.style.color = '' + this.colorWrong;
                $elem.classList.add('js-validate-error-field');

                if ($elem.type === 'checkbox' || $elem.type === 'radio') {
                    var $label = document.querySelector('label[for="' + $elem.getAttribute('id') + '"]');

                    if ($elem.parentNode.tagName.toLowerCase() === 'label') {
                        $elem.parentNode.parentNode.insertBefore(div, null);
                    } else if ($label) {
                        $label.parentNode.insertBefore(div, $label.nextSibling);
                    } else {
                        $elem.parentNode.insertBefore(div, $elem.nextSibling);
                    }
                } else {
                    $elem.parentNode.insertBefore(div, $elem.nextSibling);
                }
            }

            if (!this.tooltipSelectorWrap.length) {
                return;
            }

            this.state.tooltipsTimer = setTimeout(function () {
                _this5.hideTooltips();
            }, this.tooltipFadeOutTime);
        },

        hideTooltips: function hideTooltips() {
            var _this6 = this;

            var $elemsErrorLabel = document.querySelectorAll('.js-validate-error-label');

            $elemsErrorLabel.forEach(function (item) {
                item.classList.add(_this6.tooltipFadeOutClass);
            });

            this.state.tooltipsTimer = null;
        },

        lockForm: function lockForm() {
            var $elems = this.$form.querySelectorAll('input, textarea, button, select');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].setAttribute('disabled', 'disabled');
                $elems[i].style.pointerEvents = 'none';
                $elems[i].style.webitFilter = 'grayscale(100%)';
                $elems[i].style.filter = 'grayscale(100%)';
            }
        },

        unlockForm: function unlockForm() {
            var $elems = this.$form.querySelectorAll('input, textarea, button, select');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].removeAttribute('disabled');
                $elems[i].style.pointerEvents = '';
                $elems[i].style.webitFilter = '';
                $elems[i].style.filter = '';
            }
        }
    };

    window.JustValidate = JustValidate;
})(window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/*! exports provided: extend, getDocument, getWindow, ssrDocument, ssrWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrDocument", function() { return ssrDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrWindow", function() { return ssrWindow; });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/esm/components/a11y/a11y.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/a11y/a11y.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var A11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
      });
    }
  },
  init: function init() {
    var swiper = this;
    swiper.$el.append(swiper.a11y.liveRegion); // Navigation

    var params = swiper.params.a11y;
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      a11y: _extends(_extends({}, A11y), {}, {
        liveRegion: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/autoplay/autoplay.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/autoplay/autoplay.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-underscore-dangle: "off" */


var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      autoplay: _extends(_extends({}, Autoplay), {}, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/controller/controller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/controller/controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-cube/effect-cube.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-cube/effect-cube.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-flip/effect-flip.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-flip/effect-flip.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || false);
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/history/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/history/history.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var History = {
  init: function init() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));

    if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/keyboard/keyboard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/keyboard/keyboard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }

      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/lazy/lazy.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/lazy/lazy.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).attr('data-swiper-slide-index') : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/mousewheel/mousewheel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/mousewheel/mousewheel.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");




function isEventSupported() {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var eventName = 'onwheel';
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events

          }

          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

          var firstEvent = _recentWheelEvents[0];

          _recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

            _recentWheelEvents.splice(0);

            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(); // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).

    if (newEvent.delta >= 6 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }

      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }

      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/navigation/navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    click: function click(swiper, e) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($prevEl) && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($nextEl)) {
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/pagination/pagination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
      $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find("." + params.bulletClass);
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', "." + params.bulletClass, function onClick(e) {
        e.preventDefault();
        var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', "." + params.bulletClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    click: function click(swiper, e) {
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/parallax/parallax.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/parallax/parallax.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }

    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/thumbs/thumbs.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/thumbs/thumbs.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/virtual/virtual.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/virtual/virtual.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      virtual: _extends(_extends({}, Virtual), {}, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/zoom/zoom.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/zoom/zoom.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTranslate"])(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTranslate"])(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }

        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/utils/dom.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__["styles"],
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7__WEBPACK_IMPORTED_MODULE_0__["children"],
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__["filter"],
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__["remove"]
};
Object.keys(Methods).forEach(function (methodName) {
  dom7__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = Methods[methodName];
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__["$"]);

/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/*! exports provided: getBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-device.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/*! exports provided: getDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevice", function() { return getDevice; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "./node_modules/swiper/esm/utils/get-support.js");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = Object(_get_support__WEBPACK_IMPORTED_MODULE_1__["getSupport"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-support.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/*! exports provided: getSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupport", function() { return getSupport; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/utils.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/*! exports provided: deleteProps, nextTick, now, getTranslate, isObject, extend, bindModuleMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProps", function() { return deleteProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslate", function() { return getTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModuleMethods", function() { return bindModuleMethods; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = window.getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource));

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}



/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/*! exports provided: Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs, default, Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _esm_utils_get_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/utils/get-support */ "./node_modules/swiper/esm/utils/get-support.js");
/* harmony import */ var _esm_utils_get_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esm/utils/get-device */ "./node_modules/swiper/esm/utils/get-device.js");
/* harmony import */ var _esm_utils_get_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./esm/utils/get-browser */ "./node_modules/swiper/esm/utils/get-browser.js");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esm/components/virtual/virtual */ "./node_modules/swiper/esm/components/virtual/virtual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Virtual", function() { return _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esm/components/keyboard/keyboard */ "./node_modules/swiper/esm/components/keyboard/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esm/components/mousewheel/mousewheel */ "./node_modules/swiper/esm/components/mousewheel/mousewheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mousewheel", function() { return _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./esm/components/navigation/navigation */ "./node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./esm/components/pagination/pagination */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./esm/components/scrollbar/scrollbar */ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esm/components/parallax/parallax */ "./node_modules/swiper/esm/components/parallax/parallax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./esm/components/zoom/zoom */ "./node_modules/swiper/esm/components/zoom/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./esm/components/lazy/lazy */ "./node_modules/swiper/esm/components/lazy/lazy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./esm/components/controller/controller */ "./node_modules/swiper/esm/components/controller/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./esm/components/a11y/a11y */ "./node_modules/swiper/esm/components/a11y/a11y.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A11y", function() { return _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _esm_components_history_history__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./esm/components/history/history */ "./node_modules/swiper/esm/components/history/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "History", function() { return _esm_components_history_history__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./esm/components/hash-navigation/hash-navigation */ "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashNavigation", function() { return _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./esm/components/autoplay/autoplay */ "./node_modules/swiper/esm/components/autoplay/autoplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autoplay", function() { return _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./esm/components/effect-fade/effect-fade */ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectFade", function() { return _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./esm/components/effect-cube/effect-cube */ "./node_modules/swiper/esm/components/effect-cube/effect-cube.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectCube", function() { return _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./esm/components/effect-flip/effect-flip */ "./node_modules/swiper/esm/components/effect-flip/effect-flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectFlip", function() { return _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./esm/components/effect-coverflow/effect-coverflow */ "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectCoverflow", function() { return _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./esm/components/thumbs/thumbs */ "./node_modules/swiper/esm/components/thumbs/thumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thumbs", function() { return _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/**
 * Swiper 6.0.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 9, 2020
 */



























function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var modular = {
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
};

/* eslint-disable no-underscore-dangle */
var eventsEmitter = {
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  var swiper = this;
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  function slidesForMargin(slideEl, slideIndex) {
    if (!params.cssMode) return true;

    if (slideIndex === slides.length - 1) {
      return false;
    }

    return true;
  }

  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = window.getComputedStyle(slide[0], null);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
          var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
          var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
          var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
          var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
          var boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
          var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
          var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
          var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
          var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

          var _boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (_boxSizing && _boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = slideSize + "px";
        } else {
          slides[i].style.height = slideSize + "px";
        }
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.filter(slidesForMargin).css({
        marginLeft: spaceBetween + "px"
      });else slides.filter(slidesForMargin).css({
        marginRight: spaceBetween + "px"
      });
    } else slides.filter(slidesForMargin).css({
      marginBottom: spaceBetween + "px"
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTranslate"])($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
};

function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd
};

function slideTo(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append(Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend(Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

function onTouchStart(event) {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
    return;
  }

  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;

    if (document.activeElement && Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
  Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper.on('observerUpdate', onResize, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");

      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }

      swiper.emitContainerClasses();
    }

    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, breakpointParams);
    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoints(breakpoints) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(); // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = window.innerHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (value <= window.innerWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoints
};

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device;
  var suffixes = [];
  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }

  if (params.autoHeight) {
    suffixes.push('autoheight');
  }

  if (rtl) {
    suffixes.push('rtl');
  }

  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');

    if (params.slidesPerColumnFill === 'column') {
      suffixes.push('multirow-column');
    }
  }

  if (device.android) {
    suffixes.push('android');
  }

  if (device.ios) {
    suffixes.push('ios');
  }

  if (params.cssMode) {
    suffixes.push('css-mode');
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

var prototypes = {
  modular: modular,
  eventsEmitter: eventsEmitter,
  update: update,
  translate: translate,
  transition: transition,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params);
    if (el && !params.el) params.el = el; // Swiper Instance

    var swiper = this;
    swiper.support = Object(_esm_utils_get_support__WEBPACK_IMPORTED_MODULE_2__["getSupport"])();
    swiper.device = Object(_esm_utils_get_device__WEBPACK_IMPORTED_MODULE_3__["getDevice"])({
      userAgent: params.userAgent
    });
    swiper.browser = Object(_esm_utils_get_browser__WEBPACK_IMPORTED_MODULE_4__["getBrowser"])();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, defaults);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, swiper.params);
    swiper.passedParams = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    } // Save Dom lib


    swiper.$ = _esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"]; // Find el

    var $el = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (containerEl) {
        var newParams = Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper; // Find Wrapper

    var $wrapperEl;

    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

      $wrapperEl.children = function (options) {
        return $el.children(options);
      };
    } else {
      $wrapperEl = $el.children("." + swiper.params.wrapperClass);
    } // Extend Swiper


    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: Object(_esm_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    swiper.slides.each(function (slideEl) {
      var classes = slideEl.className.split(' ').filter(function (className) {
        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
      });
      swiper.emit('_slideClass', slideEl, classes.join(' '));
    });
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.init = function init() {
    var swiper = this;
    if (swiper.initialized) return;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["deleteProps"])(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["now"])();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }]);

  return Swiper;
}();

var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(); // Emit resize

      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};

var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    Object(_esm_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      observer: _extends(_extends({}, Observer), {}, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
};

// Swiper Class
var components = [Resize, Observer$1];
Swiper.use(components);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);



/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map