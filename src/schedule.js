// sample courseStr = 
function courseStrToObj(timeStr, locationStr, instructorStr = "") {
    let obj = {};
    timeStr = timeStr.split(' ')
    console.log(`timeStr: ${timeStr}`);
    obj["startHour"] = parseInt(timeStr[1].split(':')[0]);
    obj["startMinute"] = parseInt(timeStr[1].split(':')[1].substring(0, timeStr[1].split(':')[1].length-2));
    obj["startIsAM"] = timeStr[1].split(':')[1].slice(-2) == "AM" ? true : false;
    obj["endHour"] = parseInt(timeStr[3].split(':')[0]);
    obj["endMinute"] = parseInt(timeStr[3].split(':')[1].substring(0, timeStr[1].split(':')[1].length-2));
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
    return obj
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
    var css = `font-family: Arial,sans-serif; font-size: 11px; font-weight: normal; font-style: normal; font-variant: small-caps; color: rgb(64,111,53); background-color: rgb(222,235,181); letter-spacing: 1px; text-decoration: none; text-transform: capitalize; text-align: center; line-height: 20px; margin-left: 4px; border-width: 1px; border-top-color: rgb(142,203,98); border-bottom-color: rgb(114,175,69); border-left-color: rgb(142,203,98); border-right-color: rgb(114,175,69); border-top-style: none; border-bottom-style: solid; border-left-style: solid; border-right-style: solid; height: 20px; display: block; white-space: nowrap; cursor: pointer;`;
    var expSched = document.createElement('a');
    expSched.style.cssText = css;
    expSched.innerText = "Export Schedule";
    var info = document.createElement('a');
    info.innerText = "To visualize schedule, please visit https://freecollegeschedulemaker.com";
    info.href = 'https://freecollegeschedulemaker.com';
    info.style.cssText = '';
    var colors = ["#FFE37D", "#C8F7C5","#E08283","#99CCCC","#CC99CC", "#ffa500"];
    var classes = [];
    for(let i = 1; i < 10; i++) {
        let course = null;
        if (type == "enrolled") {
            course = html.getElementById('trSTDNT_ENRL_SSVW$0_row' + i.toString());
            
        }
        else if (type == "cart") {
            course = html.getElementById('trSSR_REGFORM_VW$0_row' + i.toString());
        }
        else {
            course = html.getElementById('trSTDNT_WEEK_SCHD$0_row' + i.toString());
        }
        if (course)
            classes.push(course);
    }
    let courseObjs = []
    classes = classes.map(m => m.innerText.split('\n').map(m => m.trim()).filter(m => m!=""));
    console.dir(classes)
    let fileNameStr = "currentSchedule";
    if (type == 'enrolled') {
        fileNameStr = 'enrolledSchedule'
    }
    else if(type == 'shoppingCart') {
        fileNameStr = 'shoppingCartSchedule';
    }
    else {
        classes.forEach(m => {
            let courseObj = {};
            courseObj['title'] = m[0];
            courseObj['time'] = m[2];
            courseObj['location'] = m[3];
            courseObj['instructor'] = '';
            courseObjs.push(courseObj);
        })
    }
    classes = courseObjs.map(m => courseToObj(m, colors.pop()));
    console.dir(classes);
    let schedule = {};
    chrome.storage.sync.set({
        [fileNameStr]: {
            "scheduleTitle": "schedule",
            "courses": classes
        }
    })
    chrome.storage.sync.get((items) => {
        console.log("getting schedule from local storage...");
        expSched.download = "Schedule.csmo"
        expSched.id="exportSchedule";
        expSched.href = "data:text/plain," + JSON.stringify(items[fileNameStr]);
        console.dir(items);
    })
    if (type == "schedule") {
        html.getElementById('trSTDNT_WEEK_SCHD$0_row5').appendChild(expSched);
    }
}

export default handleSchedule;