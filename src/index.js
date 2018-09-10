// import processPage from './process-page'
import processPage from './processPage';

const run = () => {
  var loop = setInterval(() => {
    var iframe = document.querySelector('#ptifrmtgtframe');
    if (iframe != null) {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      var iframeContent = iframeDocument.querySelectorAll("[id='MTG_INSTR$0']");
      if (iframeContent && iframeContent.length > 0) {
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
