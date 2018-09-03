// import processPage from './process-page'
import processPage from './processPage';

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
        processPage(iframeDocument);
      }
    }
    else {
      // console.log(iframeContent);
    }
  }, 2500);
}

const handleNavigation = () => {
  // const pageContainer = document.getElementById('js-repo-pjax-container')
  // var iframe = document.querySelector('#ptifrmtgtframe');
  // var iframe = document.getElementById('ptifrmtgtframe');
  // var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const pageContainer = document.querySelectorAll("[id='MTG_INSTR$0']");
  var iframeDocument = pageContainer.contentDocument || pageContainer.contentWindow.document;
  if (!pageContainer || pageContainer.length == 0) {
    window.setTimeout(handleNavigation,1000);
    return;
  }

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      console.log(mutation.addedNodes[0])
        if (mutation.addedNodes.length > 0) {
          console.log(iframeDocument)
          console.log(pageContainer)
          processPage(iframeDocument);
      }
      // for (const addedNode of mutation.addedNodes) {
        // if (addedNode.classList.contains('pagehead')) {
          // break
        // }
      // }
    }
  })
  observer.observe(pageContainer[0], { childList: true , attributes: true})
}

if (!process || !process.env || process.env.NODE_ENV !== 'test') {
  run()
}

export default run
