import renderContent from './renderContent';
import fetchTeacherName from './get-teacher-name/fetchTeacherName';
import fetchTeacherData from './get-teacher-name/fetchTeacherData';

const processPage = async (doc) => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    // console.log(doc);
    var ttUnParsed = doc.querySelectorAll(".SSSGROUPBOX")[0].textContent.split(' ')[0];
    var totalTeachers = parseInt(ttUnParsed);
    var teacherArr = [];
    for(let i = 0; i < totalTeachers; i++) {
        var iframeContent = iframeDocument.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var teach = doc.querySelectorAll(`[id="MTG_INSTR$${i}"]`);
        var button = doc.querySelectorAll(`[id="win0divBOOKSTORE_LINK$${i}"]`);
        var bookStoreText = doc.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$${i}"]`);
        bookStoreText[0].innerHTML = "RateMyProfessor"
        // SSR_CLSRCH_MTG1$srt12$ 
        var name = teach[0].textContent;
        if (name == "Staff") continue;
        var webBody = await fetchTeacherName(name);
        var data = await fetchTeacherData(webBody);
        console.log(data)
        const li = document.createElement('p')
        li.className = "ratings";
        if (data[0])
            li.innerText = `rating: ${data[0]}/5`  ;
        else li.innerText = 'unavailable'
        console.log(`${name} : ${data[0]} : ${data[1]}`)
        teach[0].appendChild(li)
        const rmp = document.createElement('a')
        rmp.className = "PSHYPERLINK";
        rmp.style.cssText = 'margin-top:10px';
        rmp.href = data[1]
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
}

export default processPage