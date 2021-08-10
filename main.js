/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
  var contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");
  var contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "containerDiv");
  var imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "imageDiv");
  var banner = document.createElement("h1");
  banner.textContent = "Contact Us";
  var streetAddress = document.createElement("p");
  streetAddress.textContent = "2049 Fillmore St San Francisco, CA 94115";
  var phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(222)-888 5555";
  var frontImage = document.createElement("img");
  frontImage.src = "../src/images/churros.jpg";
  frontImage.alt = "Churros";
  contactContainer.appendChild(banner);
  contactContainer.appendChild(streetAddress);
  contactContainer.appendChild(phoneNumber);
  imageContainer.appendChild(frontImage);
  contactDiv.appendChild(contactContainer);
  contactDiv.appendChild(imageContainer);
  return contactDiv;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  var footer = document.createElement('footer');
  var footerText = document.createElement('p');
  footerText.textContent = "Antonio Melena";
  footer.appendChild(footerText);
  return footer;
}
;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavBar": () => (/* binding */ makeNavBar),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
function createHtmlElement(type, content) {
  var element = document.createElement(type);

  if (content) {
    element.innerText = content;
    element.setAttribute("id", content);
  }

  return element;
}

function makeNavBar() {
  var header = document.createElement("HEADER");
  var nav = document.createElement("nav");
  var navItems = ["home", "menu", "contact"];
  var unorderedList = document.createElement("ul");
  navItems.forEach(function (item) {
    var listTags = document.createElement("li");
    listTags.setAttribute("id", "#".concat(item, "ListItem"));
    listTags.setAttribute("class", "tab");
    var element = createHtmlElement("a", item);
    listTags.appendChild(element);
    unorderedList.appendChild(listTags);
  });
  nav.appendChild(unorderedList);
  header.appendChild(nav);
  return header;
}
function pageLoad() {
  var homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");
  var homeImg = document.createElement("div");
  homeImg.setAttribute("id", "homeImg");
  var homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", 'homeContainer');
  var banner = document.createElement("h1");
  banner.textContent = "Vesuvio";
  var restaurantReview = document.createElement("p");
  var moreAbout = document.createElement("p");
  restaurantReview.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque.";
  moreAbout.textContent = "Driving down High Street it's a bit odd to come upon a vintage relic of a building in a funky little neighborhood. For almost 100 years High Street Market and Deli has been serving the city of San Luis Obispo. Built in 1927, High Street Market and Deli carried everything from milk, butter, chewing tobacco and fishing gear. The area was known as the railroad district and housed many of the workers and their families. When High Street was still a dirt road, those workers would stop in to get a pint of milk, cigarettes and a deli sandwich on the way to and from the railroad station. Throughout a century High Street Market and Deli has been a lot of people's corner store but in the recent years, it's become San Luis Obispo's original sandwich joint."; //   const frontImage = document.createElement("img");
  //   frontImage.src = "./images/churros.jpg";
  //   frontImage.alt = "Churros";

  homeContainer.appendChild(banner);
  homeContainer.appendChild(restaurantReview);
  homeContainer.appendChild(moreAbout); //   homeDiv.appendChild(frontImage);

  homeDiv.appendChild(homeImg);
  homeDiv.appendChild(homeContainer);
  return homeDiv;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
function createMenuSection(headerTitle) {
  var menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  var menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-section-header");
  var menuHeaderTitle = document.createElement("h2");
  menuHeaderTitle.textContent = headerTitle;
  menuHeader.appendChild(menuHeaderTitle);
  menuSection.appendChild(menuHeader);
  return menuSection;
}

function createMenuItem(itemName, itemPrice, itemInfo) {
  var menuItem = document.createElement("li");
  var menuItemHeading = document.createElement("p");
  menuItemHeading.textContent = itemName;
  var menuItemPrice = document.createElement("p");
  menuItemPrice.textContent = itemPrice;
  var menuItemInfo = document.createElement("p");
  menuItemInfo.textContent = itemInfo;
  menuItem.appendChild(menuItemHeading);
  menuItem.appendChild(menuItemPrice);
  menuItem.appendChild(menuItemInfo);
  return menuItem;
}

function menuPage() {
  var menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");
  var banner = document.createElement("h1");
  banner.textContent = "Menu";
  var menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");
  var gShots = createMenuSection("GOLGAPPA SHOTS");
  var menuListOne = document.createElement("ul");
  var cjp = createMenuItem("CLASSIC JALJEERA & POTATO (EACH)", 4, "vegan");
  var spa = createMenuItem("SPICED TEQUILA & AVOCADO (EACH)", 6, "vegetarian");
  var vpp = createMenuItem("VODKA PAANI & PICKLED BEETS (EACH)", 6, "vegetarian");
  menuListOne.appendChild(cjp);
  menuListOne.appendChild(spa);
  menuListOne.appendChild(vpp);
  gShots.appendChild(menuListOne);
  var sPlates = createMenuSection("SMALL PLATES");
  var menuListTwo = document.createElement("ul");
  var gtc = createMenuItem("GOAT CHEESE & SPINACH SAMOSA", 14, "vegetarian");
  var rsk = createMenuItem("ROCK SHRIMP KOLIWADA", 14, "gluten free");
  var ogr = createMenuItem("OCTOPUS GHEE ROAST", 14, "gluten free");
  menuListTwo.appendChild(gtc);
  menuListTwo.appendChild(rsk);
  menuListTwo.appendChild(ogr);
  sPlates.appendChild(menuListTwo);
  menuContainer.appendChild(banner);
  menuContainer.appendChild(gShots);
  menuContainer.appendChild(sPlates);
  menuDiv.appendChild(menuContainer);
  return menuDiv;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bakery.jpg */ "./src/images/bakery.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/*================= start ==================*/\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #fff;\n  line-height: 1.5;\n  color: #272a2e;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  /* height: 100vh; */\n}\n\nheader {\n  border-bottom: 1px solid #000;\n  background-color: #fff;\n  color: #000;\n}\n\nnav {\n  margin: 0 auto;\n  position: relative;\n  background-color: #aaa;\n  width: 500px;\n}\n\nnav ul {\n  display: flex;\n}\n\n/* nav li */\n.tab {\n  border-top: 1px solid rgb(200, 200, 200);\n  border-left: 1px solid rgb(200, 200, 200);\n  border-right: 1px solid rgb(200, 200, 200);\n  border-radius: 2px;\n  cursor: pointer;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-family: sans-serif;\n  font-weight: 500;\n  font-size: 1.2rem;\n  text-decoration: none;\n  position: relative;\n  flex: 1;\n}\n\n\n\n.showing {\n   background-color: #272a2e;\n   color: #fff;\n}\n\n.tab:hover::before {\n  content: \"\";\n  position: absolute;\n  top: 2.01rem;\n  background: gold;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 100%;\n  left: calc(49%);\n}\n\n#content {\n   height: calc(100vh - 45px);\n}\n\nh1 {\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n\nli {\n  text-align: center;\n}\n\np {\n  text-align: center;\n  display: block;\n  margin-bottom: 1rem;\n}\n\nimg {\n  height: 100vh;\n}\n\n#homeDiv,\n#menudiv,\n#contactDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(145, 215, 155);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n}\n\n.homeDiv {\n   height: 90vh;\n   padding: 15px;\n}\n.homeDiv p {\n   padding: 10px 40px;\n}\n\n#homeImg {\n   height: calc(100vh - 45px);\n   width: 100vw;\n   background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n   background-repeat: no-repeat;\n   background-size: cover;\n   background-position: center center;\n}\n\n#homeContainer {\n   color: #fff;\n   height: calc(100vh - 45px);\n   width: 100vw;\n   background-color: #272a2e;\n}\n\n#homeContainer h1 {\n   margin: 2rem;\n}\n\n#homeContainer p {\n   padding: 10px 10vw;\n   margin-bottom: 45px;\n}\n\n.menu-section-header h2 {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.menu-section p {\n  margin-bottom: 0.4rem;\n}\n.menu-section li:last-child {\n  margin-bottom: 3.5rem;\n}\n.menu-section-header {\n  margin-bottom: 1rem;\n  margin-top: 2.5rem;\n}\n#menuContainer {\n  background-color: #272a2e;\n  margin: 0 auto;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  width: 80%;\n  border: 10px double#fff;\n  border-radius: 5px;\n  border-width: 9px;\n}\n\n\n#contactDiv {\n  height: calc(100vh - 45px);\n  flex-direction: row;\n}\n#containerDiv {\n  background-color:#272a2e;\n  margin: 10px;\n  border: 10px double #fff;\n  border-radius: 5px;\n  padding: 5vw;\n  align-items: normal;\n}\n#contactDiv h1 {\n  padding: 5px;\n}\n#contactDiv p {\n  padding: 10px;\n}\n#contactDiv img {\n   height: calc(100vh - 45px);\n}\n\n\nfooter {\n  height: 25px;\n  width: 100vw;\n  padding: 10px;\n  background-color: #fff;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA,6CAA6C;AAC7C;EACE,yCAAyC;EACzC,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,WAAW;AACX;EACE,wCAAwC;EACxC,yCAAyC;EACzC,0CAA0C;EAC1C,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,OAAO;AACT;;;;AAIA;GACG,yBAAyB;GACzB,WAAW;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;GACG,0BAA0B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,WAAW;EACX,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;GACG,YAAY;GACZ,aAAa;AAChB;AACA;GACG,kBAAkB;AACrB;;AAEA;GACG,0BAA0B;GAC1B,YAAY;GACZ,yDAA0C;GAC1C,4BAA4B;GAC5B,sBAAsB;GACtB,kCAAkC;AACrC;;AAEA;GACG,WAAW;GACX,0BAA0B;GAC1B,YAAY;GACZ,yBAAyB;AAC5B;;AAEA;GACG,YAAY;AACf;;AAEA;GACG,kBAAkB;GAClB,mBAAmB;AACtB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,0BAA0B;EAC1B,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;GACG,0BAA0B;AAC7B;;;AAGA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/*================= start ==================*/\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #fff;\n  line-height: 1.5;\n  color: #272a2e;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  /* height: 100vh; */\n}\n\nheader {\n  border-bottom: 1px solid #000;\n  background-color: #fff;\n  color: #000;\n}\n\nnav {\n  margin: 0 auto;\n  position: relative;\n  background-color: #aaa;\n  width: 500px;\n}\n\nnav ul {\n  display: flex;\n}\n\n/* nav li */\n.tab {\n  border-top: 1px solid rgb(200, 200, 200);\n  border-left: 1px solid rgb(200, 200, 200);\n  border-right: 1px solid rgb(200, 200, 200);\n  border-radius: 2px;\n  cursor: pointer;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-family: sans-serif;\n  font-weight: 500;\n  font-size: 1.2rem;\n  text-decoration: none;\n  position: relative;\n  flex: 1;\n}\n\n\n\n.showing {\n   background-color: #272a2e;\n   color: #fff;\n}\n\n.tab:hover::before {\n  content: \"\";\n  position: absolute;\n  top: 2.01rem;\n  background: gold;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 100%;\n  left: calc(49%);\n}\n\n#content {\n   height: calc(100vh - 45px);\n}\n\nh1 {\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n\nli {\n  text-align: center;\n}\n\np {\n  text-align: center;\n  display: block;\n  margin-bottom: 1rem;\n}\n\nimg {\n  height: 100vh;\n}\n\n#homeDiv,\n#menudiv,\n#contactDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(145, 215, 155);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n}\n\n.homeDiv {\n   height: 90vh;\n   padding: 15px;\n}\n.homeDiv p {\n   padding: 10px 40px;\n}\n\n#homeImg {\n   height: calc(100vh - 45px);\n   width: 100vw;\n   background-image: url(./images/bakery.jpg);\n   background-repeat: no-repeat;\n   background-size: cover;\n   background-position: center center;\n}\n\n#homeContainer {\n   color: #fff;\n   height: calc(100vh - 45px);\n   width: 100vw;\n   background-color: #272a2e;\n}\n\n#homeContainer h1 {\n   margin: 2rem;\n}\n\n#homeContainer p {\n   padding: 10px 10vw;\n   margin-bottom: 45px;\n}\n\n.menu-section-header h2 {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.menu-section p {\n  margin-bottom: 0.4rem;\n}\n.menu-section li:last-child {\n  margin-bottom: 3.5rem;\n}\n.menu-section-header {\n  margin-bottom: 1rem;\n  margin-top: 2.5rem;\n}\n#menuContainer {\n  background-color: #272a2e;\n  margin: 0 auto;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  width: 80%;\n  border: 10px double#fff;\n  border-radius: 5px;\n  border-width: 9px;\n}\n\n\n#contactDiv {\n  height: calc(100vh - 45px);\n  flex-direction: row;\n}\n#containerDiv {\n  background-color:#272a2e;\n  margin: 10px;\n  border: 10px double #fff;\n  border-radius: 5px;\n  padding: 5vw;\n  align-items: normal;\n}\n#contactDiv h1 {\n  padding: 5px;\n}\n#contactDiv p {\n  padding: 10px;\n}\n#contactDiv img {\n   height: calc(100vh - 45px);\n}\n\n\nfooter {\n  height: 25px;\n  width: 100vw;\n  padding: 10px;\n  background-color: #fff;\n  color: #000;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/bakery.jpg":
/*!*******************************!*\
  !*** ./src/images/bakery.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c30fa45a4adda7cd1d81.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





var container = document.getElementById("content");
var nav = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
document.body.insertBefore(nav, document.body.firstChild);
var home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
container.appendChild(home);
var footer = (0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)();
container.appendChild(footer);
var homeTab = document.querySelector("#home");
homeTab.parentElement.classList.add('showing');
var menuTab = document.querySelector("#menu");
var contactTab = document.querySelector("#contact");
homeTab.addEventListener("click", function () {
  container.textContent = "";
  container.appendChild(home);
  container.appendChild(footer);
  menuTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.add('showing');
});
menuTab.addEventListener("click", function () {
  container.textContent = "";
  var menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
  container.appendChild(menu);
  container.appendChild(footer);
  homeTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  menuTab.parentElement.classList.add('showing');
});
contactTab.addEventListener("click", function () {
  container.textContent = "";
  var contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();
  container.appendChild(contact);
  container.appendChild(footer);
  contactTab.parentElement.classList.add('showing');
  menuTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.remove('showing');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map