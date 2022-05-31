function loadJSInclude(scriptPath, callback)
{
    var scriptNode = document.createElement('SCRIPT');
    scriptNode.type = 'text/javascript';
    scriptNode.src = scriptPath;

    var headNode = document.getElementsByTagName('HEAD');
    if (headNode[0] != null)
        headNode[0].appendChild(scriptNode);

    if (callback != null)    
    {
        scriptNode.onreadystagechange = callback;            
        scriptNode.onload = callback;
    }
}


function loadCSSInclude(cssPath, callback)
{
    var scriptNode = document.createElement('link');
    scriptNode.rel = 'stylesheet';
    scriptNode.href = cssPath;

    var headNode = document.getElementsByTagName('HEAD');
    if (headNode[0] != null)
        headNode[0].appendChild(scriptNode);

    if (callback != null)    
    {
        scriptNode.onreadystagechange = callback;            
        scriptNode.onload = callback;
    }
}

loadJSInclude("https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/js/shepherd.min.js")
loadCSSInclude("https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/css/shepherd.css")

 const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
  classes: 'shadow-md bg-purple-dark',
  scrollTo: true
}
});



//Step-1//
tour.addStep({
id : 1, 
text: 'Hey! Welcome to TinDog.',
attachTo: {
element: '#_4rCVYtbsBZ2QseMPgbuD8A45',
on: 'bottom'
},

buttons: [
{
  text: 'Next',
  action: tour.next
}
]
});


tour.start();
