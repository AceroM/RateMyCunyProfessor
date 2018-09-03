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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fetchTeacherName = async name => {
    let parsedName = encodeURIComponent(name);
    const response = await fetch(`https://www.ratemyprofessors.com/search.jsp?query=${parsedName}`, {
        credentials: "same-origin",
        method: 'get'
    });
    var body = await response.text();
    return body;
};

/* harmony default export */ __webpack_exports__["a"] = (fetchTeacherName);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__processPage__ = __webpack_require__(3);
// import processPage from './process-page'


const run = () => {
  var loop = setInterval(() => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    if (iframe != null) {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      // var iframeContent = iframeDocument.querySelectorAll('[title="View Details"]')[0].textContent;
      var iframeContent = iframeDocument.querySelectorAll("[id='MTG_INSTR$0']");
      if (iframeContent && iframeContent.length > 0) {
        clearInterval(loop);
        // console.log(iframeContent[0].textContent)
        Object(__WEBPACK_IMPORTED_MODULE_0__processPage__["a" /* default */])(iframeDocument);
      }
    } else {
      // console.log(iframeContent);
    }
  }, 2500);
};

const handleNavigation = () => {
  // const pageContainer = document.getElementById('js-repo-pjax-container')
  // var iframe = document.querySelector('#ptifrmtgtframe');
  // var iframe = document.getElementById('ptifrmtgtframe');
  // var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const pageContainer = document.querySelectorAll("[id='MTG_INSTR$0']");
  var iframeDocument = pageContainer.contentDocument || pageContainer.contentWindow.document;
  if (!pageContainer || pageContainer.length == 0) {
    window.setTimeout(handleNavigation, 1000);
    return;
  }

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      console.log(mutation.addedNodes[0]);
      if (mutation.addedNodes.length > 0) {
        console.log(iframeDocument);
        console.log(pageContainer);
        Object(__WEBPACK_IMPORTED_MODULE_0__processPage__["a" /* default */])(iframeDocument);
      }
      // for (const addedNode of mutation.addedNodes) {
      // if (addedNode.classList.contains('pagehead')) {
      // break
      // }
      // }
    }
  });
  observer.observe(pageContainer[0], { childList: true, attributes: true });
};

if (!process || !process.env || process.env.NODE_ENV !== 'test') {
  run();
}

/* harmony default export */ __webpack_exports__["default"] = (run);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderContent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_teacher_name_fetchTeacherName__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_teacher_name_fetchTeacherData__ = __webpack_require__(5);




const processPage = async doc => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    // console.log(doc);
    var ttUnParsed = doc.querySelectorAll(".SSSGROUPBOX")[0].textContent.split(' ')[0];
    var totalTeachers = parseInt(ttUnParsed);
    var teacherArr = [];
    for (let i = 0; i < totalTeachers; i++) {
        var iframeContent = iframeDocument.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var teach = doc.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var button = doc.querySelectorAll(`[id="win0divBOOKSTORE_LINK$${i}"]`);
        var bookStoreText = doc.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$${i}"]`);
        bookStoreText[0].innerHTML = "RateMyProfessor";
        // SSR_CLSRCH_MTG1$srt12$ 
        var name = teach[0].textContent;
        if (name == "Staff") continue;
        var webBody = await Object(__WEBPACK_IMPORTED_MODULE_1__get_teacher_name_fetchTeacherName__["a" /* default */])(name);
        var data = await Object(__WEBPACK_IMPORTED_MODULE_2__get_teacher_name_fetchTeacherData__["a" /* default */])(webBody);
        console.log(data);
        const li = document.createElement('p');
        li.className = "ratings";
        if (data[0]) li.innerText = `rating: ${data[0]}/5`;else li.innerText = 'unavailable';
        console.log(`${name} : ${data[0]} : ${data[1]}`);
        teach[0].appendChild(li);
        const rmp = document.createElement('a');
        rmp.className = "PSHYPERLINK";
        rmp.style.cssText = 'margin-top:10px';
        rmp.href = data[1];
        // rmp.onclick = function() {
        // console.log(btlink)
        // var tabOrWindow = window.open(btlink, '_blank');
        // tabOrWindow.focus();
        // }
        rmp.innerText = "open profile";
        button[0].appendChild(rmp);
        // teacherArr.push(school);
    }
    // console.log(teacherArr)
};

/* harmony default export */ __webpack_exports__["a"] = (processPage);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const renderContent = num => {
    const li = document.createElement('li');
    li.className = "ratings";
    li.innerHTML = `
        <li> ${num} </li>
    `;
    return li;
};

/* unused harmony default export */ var _unused_webpack_default_export = (renderContent);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchTeacherName__ = __webpack_require__(0);


const fetchTeacherData = async body => {
    //add school detection
    var idRegex = /(?<=ShowRatings.jsp\?tid=)(.*)(?=")/;
    var id = body.match(idRegex);
    var invalid = false;
    id == null ? invalid = true : id = id[0];
    if (invalid) return false;
    var url = `https://www.ratemyprofessors.com/paginate/professors/ratings?tid=${id}`;
    let resp = await fetch(url, {
        credentials: "same-origin",
        method: 'get'
    });
    let data = await resp.json();
    if (data == undefined) return '';
    // let parsed = JSON.parse(data);
    let ratings = data.ratings;
    if (ratings.length == 0) return false;
    // let rating = ratings[0].rOverallString;
    let averageRating = 0;
    let counter = 0;
    ratings.forEach(comment => {
        averageRating += comment.rOverall;
    });
    averageRating = Math.round(100 * (averageRating / ratings.length)) / 100;
    var buttonLink = `https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${id}`;
    return [averageRating.toString(), buttonLink];
};

/* harmony default export */ __webpack_exports__["a"] = (fetchTeacherData);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map