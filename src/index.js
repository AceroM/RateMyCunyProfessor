// import processPage from './process-page'
import processPage from './processPage';
import handleSchedule from './schedule';

const run = () => {
  var loop = setInterval(() => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    if (iframe != null) {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      var iframeContent = iframeDocument.querySelectorAll("[id='MTG_INSTR$0']");
      // var shoppingCart = iframeDocument.querySelectorAll("[id='win0divDERIVED_REGFRM1_GROUP6GP']");
      var schedule = iframeDocument.querySelectorAll("[id='win0divSTDNT_WEEK_SCHDGP$0']");
      // var enrollCart = iframeDocument.querySelectorAll("[id=''");
      // var iframeHTML = iframeDocument.body.innerHTML;
      if (schedule) {
        clearInterval(loop);
        handleSchedule(iframeDocument, "schedule")
      }
      else if (iframeContent && iframeContent.length > 0) {
        clearInterval(loop);
        setInterval(() => {
          var bookStoreText = iframeDocument.querySelectorAll(`[id="SSR_CLSRCH_MTG1$srt12$0"]`);
          if(bookStoreText[0].innerHTML != "RateMyProfessor") 
            processPage(iframeDocument);
        }, 2000)
      }
    }
    else {
      // console.log(iframeContent);
    }
  }, 1500);
}

run();

export default run
