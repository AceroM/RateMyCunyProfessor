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
      // var iframeHTML = iframeDocument.body.innerHTML;
      if (schedule) {
        clearInterval(loop);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["a" /* default */])(iframeDocument);
      } else if (iframeContent && iframeContent.length > 0) {
        clearInterval(loop);
        setInterval(() => {
          var bookStoreText = iframeDocument.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$0"]`);
          if (bookStoreText[0].innerHTML != "RateMyProfessor") Object(__WEBPACK_IMPORTED_MODULE_0__processPage__["a" /* default */])(iframeDocument);
        }, 2000);
      }
    } else {
      // console.log(iframeContent);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_constants__);


function courseStrToObj(courseStr, locationStr) {
    let obj = {};
    courseStr = courseStr.split(' ');
    obj["startHour"] = parseInt(courseStr[1].split(':')[0]);
    obj["startMinute"] = parseInt(courseStr[1].split(':')[1].substring(0, courseStr[1].split(':')[1].length - 2));
    obj["startIsAM"] = courseStr[1].split(':')[1].slice(-2) == "AM" ? true : false;
    obj["endHour"] = parseInt(courseStr[3].split(':')[0]);
    obj["endMinute"] = parseInt(courseStr[3].split(':')[1].substring(0, courseStr[1].split(':')[1].length - 2));
    obj["endIsAM"] = courseStr[3].split(':')[1].slice(-2) == "AM" ? true : false;
    obj["meetsOnMonday"] = courseStr[0].indexOf("Mo") >= 0 ? true : false;
    obj["meetsOnTuesday"] = courseStr[0].indexOf("Tu") >= 0 ? true : false;
    obj["meetsOnWednesday"] = courseStr[0].indexOf("We") >= 0 ? true : false;
    obj["meetsOnThursday"] = courseStr[0].indexOf("Th") >= 0 ? true : false;
    obj["meetsOnFriday"] = courseStr[0].indexOf("Fr") >= 0 ? true : false;
    obj["meetsOnSaturday"] = courseStr[0].indexOf("Sa") >= 0 ? true : false;
    obj["meetsOnSunday"] = courseStr[0].indexOf("Su") >= 0 ? true : false;
    obj["classType"] = "";
    obj["location"] = locationStr;
    obj["instructor"] = "";
    return obj;
}

function courseToObj(course, col) {
    let d = {};
    d["title"] = course[0];
    d["color"] = col;
    d["SAVE_VERSION"] = 3;
    d["DATA_CHECK"] = "69761aa6-de4c-4013-b455-eb2a91fb2b76";
    d["meetingTimes"] = [courseStrToObj(course[2], course[3])];
    return d;
}

function handleSchedule(html) {
    var css = `font-family: Arial,sans-serif; font-size: 11px; font-weight: normal; font-style: normal; font-variant: small-caps; color: rgb(64,111,53); background-color: rgb(222,235,181); letter-spacing: 1px; text-decoration: none; text-transform: capitalize; text-align: center; line-height: 20px; margin-left: 4px; border-width: 1px; border-top-color: rgb(142,203,98); border-bottom-color: rgb(114,175,69); border-left-color: rgb(142,203,98); border-right-color: rgb(114,175,69); border-top-style: none; border-bottom-style: solid; border-left-style: solid; border-right-style: solid; height: 20px; display: block; white-space: nowrap; cursor: pointer;`;
    var expSched = document.createElement('a');
    expSched.style.cssText = css;
    expSched.innerText = "Export Schedule";
    var colors = ["#FFE37D", "#C8F7C5", "#E08283", "#99CCCC", "#CC99CC"];
    var classes = [];
    for (let i = 1; i < 10; i++) {
        const course = html.getElementById('trSTDNT_WEEK_SCHD$0_row' + i.toString());
        if (course) classes.push(course);
    }
    classes = classes.map(m => m.innerText.split('\n').map(m => m.trim()).filter(m => m != ""));
    classes = classes.map(m => courseToObj(m, colors.pop()));
    console.dir(classes);
    chrome.storage.sync.set({
        "currentSchedule": {
            "scheduleTitle": "schedule",
            "courses": classes
        }
    });
    chrome.storage.sync.get(items => {
        console.log("getting schedule from local storage...");
        expSched.download = "Schedule.csmo";
        expSched.href = "data:text/plain," + JSON.stringify(items.currentSchedule);
        console.log(items.currentSchedule);
    });
    // expSched.downlaod = JSON.stringify(chrome.storage.sync.get())
    html.getElementById('trSTDNT_WEEK_SCHD$0_row5').appendChild(expSched);
}
/* harmony default export */ __webpack_exports__["a"] = (handleSchedule);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}

/***/ })
/******/ ]);