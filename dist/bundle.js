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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__processPage__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(6);
// import processPage from './process-page'



const run = () => {
  var loop = setInterval(() => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    if (iframe != null) {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      var iframeContent = iframeDocument.querySelectorAll("[id='MTG_INSTR$0']");
      // var shoppingCart = iframeDocument.querySelectorAll("[id='win0divDERIVED_REGFRM1_GROUP6GP']");
      var schedule = iframeDocument.querySelectorAll("[id='win0divSTDNT_WEEK_SCHDGP$0']");
      var enrollCart = iframeDocument.querySelectorAll("[id='STDNT_ENRL_SSVW$scroll$0'");
      // var iframeHTML = iframeDocument.body.innerHTML;
      if (schedule) {
        if (iframeDocument.getElementById('exportSchedule') == null) Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["a" /* default */])(iframeDocument, "schedule");
      } else if (enrollCart) {
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["a" /* default */])(iframeDocument, "enrolled");
      } else if (iframeContent && iframeContent.length > 0) {
        clearInterval(loop);
        setInterval(() => {
          var bookStoreText = iframeDocument.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$0"]`);
          if (bookStoreText[0].innerHTML != "RateMyProfessor") Object(__WEBPACK_IMPORTED_MODULE_0__processPage__["a" /* default */])(iframeDocument);
        }, 2000);
      }
    }
  }, 1500);
};

run();

/* harmony default export */ __webpack_exports__["default"] = (run);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderContent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_teacher_name_fetchTeacherName__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_teacher_name_fetchTeacherData__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classInfo__ = __webpack_require__(5);





const processPage = async doc => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var ttUnParsed = doc.querySelectorAll(".SSSGROUPBOX")[0].textContent.split(' ')[0];
    console.log(ttUnParsed);
    var totalTeachers = parseInt(ttUnParsed);
    for (let i = 0; i < totalTeachers; i++) {
        var iframeContent = iframeDocument.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var teach = doc.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var button = doc.querySelectorAll(`[id="win0divBOOKSTORE_LINK$${i}"]`);
        var bookStoreText = doc.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$${i}"]`);
        bookStoreText[0].innerHTML = "RateMyProfessor";
        var name = teach[0].textContent;
        if (name == "Staff") continue;
        var classInfo = await Object(__WEBPACK_IMPORTED_MODULE_3__classInfo__["a" /* default */])("MTG_CLASSNAME", i);
        var webBody = await Object(__WEBPACK_IMPORTED_MODULE_1__get_teacher_name_fetchTeacherName__["a" /* default */])(name);
        var data = await Object(__WEBPACK_IMPORTED_MODULE_2__get_teacher_name_fetchTeacherData__["a" /* default */])(webBody);
        console.log(data);
        console.log(classInfo);
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
    }
};

/* harmony default export */ __webpack_exports__["a"] = (processPage);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const renderContent = (content, type) => {
    if (type == 'rating') {
        const rate = document.createElement('a');
        rate.className = "";
        rate.innerHTML = `

        `;
    }
    const li = document.createElement('li');
    li.className = "ratings";
    li.innerHTML = `
        <li> </li>
    `;
    return li;
};

/* unused harmony default export */ var _unused_webpack_default_export = (renderContent);

/***/ }),
/* 4 */
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
async function retrieveInfo(classStr, number) {
    // MTG_CLASSNAME$2
    var resp = await fetch("https://hrsa.cunyfirst.cuny.edu/psc/cnyhcprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL", {
        "credentials": "same-origin",
        "referrer": "https://hrsa.cunyfirst.cuny.edu/psc/cnyhcprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ExactKeys=Y&TargetFrameName=None",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "ICAJAX=1&ICNAVTYPEDROPDOWN=1&ICType=Panel&ICElementNum=0&ICStateNum=32&ICAction=" + classStr + "%24" + number + "&ICXPos=0&ICYPos=505.6000061035156&ResponsetoDiffFrame=-1&TargetFrameName=None&FacetPath=None&ICFocus=&ICSaveWarningFilter=0&ICChanged=-1&ICAutoSave=0&ICResubmit=0&ICSID=WhDgZ7SB75eR5qWXtRV0inLLgTdHKVQ4Ryr%2B2SDamF4%3D&ICActionPrompt=false&ICBcDomData=C~HC_SSR_SSENRL_CART_GBL~EMPLOYEE~HRMS~SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL~UnknownValue~Enrollment%3A%20%20Add%20Classes~UnknownValue~UnknownValue~https%3A%2F%2Fhome.cunyfirst.cuny.edu%2Fpsp%2Fcnyepprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL~UnknownValue*C~HC_SSS_STUDENT_CENTER~EMPLOYEE~HRMS~SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL~UnknownValue~Student%20Center~UnknownValue~UnknownValue~https%3A%2F%2Fhome.cunyfirst.cuny.edu%2Fpsp%2Fcnyepprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL~UnknownValue&ICFind=&ICAddCount=&ICAPPCLSDATA=&DERIVED_SSTSNAV_SSTS_MAIN_GOTO$7$=9999&DERIVED_SSTSNAV_SSTS_MAIN_GOTO$8$=9999&ptus_defaultlocalnode=PSFT_CNYHCPRD&ptus_dbname=CNYHCPRD&ptus_portal=EMPLOYEE&ptus_node=HRMS&ptus_workcenterid=&ptus_componenturl=https%3A%2F%2Fhrsa.cunyfirst.cuny.edu%2Fpsp%2Fcnyhcprd%2FEMPLOYEE%2FHRMS%2Fc%2FSA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL",
        "method": "POST",
        "mode": "cors"
    });
    var body = await resp.text();
    return body;
}

/* harmony default export */ __webpack_exports__["a"] = (retrieveInfo);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// sample courseStr = 
function courseStrToObj(timeStr, locationStr, instructorStr = "") {
    let obj = {};
    timeStr = timeStr.split(' ');
    console.log(`timeStr: ${timeStr}`);
    obj["startHour"] = parseInt(timeStr[1].split(':')[0]);
    obj["startMinute"] = parseInt(timeStr[1].split(':')[1].substring(0, timeStr[1].split(':')[1].length - 2));
    obj["startIsAM"] = timeStr[1].split(':')[1].slice(-2) == "AM" ? true : false;
    obj["endHour"] = parseInt(timeStr[3].split(':')[0]);
    obj["endMinute"] = parseInt(timeStr[3].split(':')[1].substring(0, timeStr[1].split(':')[1].length - 2));
    obj["endIsAM"] = timeStr[3].split(':')[1].slice(-2) == "AM" ? true : false;
    obj["meetsOnMonday"] = timeStr[0].indexOf("Mo") >= 0 ? true : false;
    obj["meetsOnTuesday"] = timeStr[0].indexOf("Tu") >= 0 ? true : false;
    obj["meetsOnWednesday"] = timeStr[0].indexOf("We") >= 0 ? true : false;
    obj["meetsOnThursday"] = timeStr[0].indexOf("Th") >= 0 ? true : false;
    obj["meetsOnFriday"] = timeStr[0].indexOf("Fr") >= 0 ? true : false;
    obj["meetsOnSaturday"] = timeStr[0].indexOf("Sa") >= 0 ? true : false;
    obj["meetsOnSunday"] = timeStr[0].indexOf("Su") >= 0 ? true : false;
    obj["classType"] = "";
    obj["location"] = locationStr;
    obj["instructor"] = instructorStr;
    return obj;
}

function courseToObj(course, col) {
    console.log('course: ' + JSON.stringify(course));
    let d = {};
    d["title"] = course['title'];
    d["color"] = col;
    d["SAVE_VERSION"] = 3;
    d["DATA_CHECK"] = "69761aa6-de4c-4013-b455-eb2a91fb2b76";
    d["meetingTimes"] = [courseStrToObj(course['time'], course['location'], course['instructor'])];
    return d;
}

/*
@PARAMS
    html: the iframe document HTML
    type: 3 types of schedules: the home menu schedule, the schedule of enrolled classes and the classes in your shopping cart 
*/
function handleSchedule(html, type) {
    if (html.getElementById('win0divSTDNT_WEEK_SCHDGP$0').innerText.indexOf('Schedule') == -1) return;
    var css = `font-family: Arial,sans-serif; font-size: 11px; font-weight: normal; font-style: normal; font-variant: small-caps; color: rgb(64,111,53); background-color: rgb(222,235,181); letter-spacing: 1px; text-decoration: none; text-transform: capitalize; text-align: center; line-height: 20px; margin-left: 4px; border-width: 1px; border-top-color: rgb(142,203,98); border-bottom-color: rgb(114,175,69); border-left-color: rgb(142,203,98); border-right-color: rgb(114,175,69); border-top-style: none; border-bottom-style: solid; border-left-style: solid; border-right-style: solid; height: 20px; display: block; white-space: nowrap; cursor: pointer;`;
    var expSched = document.createElement('a');
    expSched.style.cssText = css;
    expSched.innerText = "Export Schedule";
    var info = document.createElement('a');
    info.innerText = "To visualize schedule, please visit https://freecollegeschedulemaker.com";
    info.href = 'https://freecollegeschedulemaker.com';
    info.style.cssText = '';
    var colors = ["#FFE37D", "#C8F7C5", "#E08283", "#99CCCC", "#CC99CC", "#ffa500"];
    var classes = [];
    for (let i = 1; i < 10; i++) {
        let course = null;
        if (type == "enrolled") {
            course = html.getElementById('trSTDNT_ENRL_SSVW$0_row' + i.toString());
        } else if (type == "cart") {
            course = html.getElementById('trSSR_REGFORM_VW$0_row' + i.toString());
        } else {
            course = html.getElementById('trSTDNT_WEEK_SCHD$0_row' + i.toString());
        }
        if (course) classes.push(course);
    }
    let courseObjs = [];
    classes = classes.map(m => m.innerText.split('\n').map(m => m.trim()).filter(m => m != ""));
    console.dir(classes);
    let fileNameStr = "currentSchedule";
    if (type == 'enrolled') {
        fileNameStr = 'enrolledSchedule';
    } else if (type == 'shoppingCart') {
        fileNameStr = 'shoppingCartSchedule';
    } else {
        classes.forEach(m => {
            let courseObj = {};
            courseObj['title'] = m[0];
            courseObj['time'] = m[2];
            courseObj['location'] = m[3];
            courseObj['instructor'] = '';
            courseObjs.push(courseObj);
        });
    }
    classes = courseObjs.map(m => courseToObj(m, colors.pop()));
    console.dir(classes);
    let schedule = {};
    chrome.storage.sync.set({
        [fileNameStr]: {
            "scheduleTitle": "schedule",
            "courses": classes
        }
    });
    chrome.storage.sync.get(items => {
        console.log("getting schedule from local storage...");
        expSched.download = "Schedule.csmo";
        expSched.id = "exportSchedule";
        expSched.href = "data:text/plain," + JSON.stringify(items[fileNameStr]);
        console.dir(items);
    });
    if (type == "schedule") {
        html.getElementById('trSTDNT_WEEK_SCHD$0_row5').appendChild(expSched);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (handleSchedule);

/***/ })
/******/ ]);