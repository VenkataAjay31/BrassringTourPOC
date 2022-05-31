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

function actualInject()
{
loadJSInclude("https://venkataajay31.github.io/BrassringTourPOC/js/lib/shepherd.min.js")
loadJSInclude("https://venkataajay31.github.io/BrassringTourPOC/js/app/tour.js")

loadCSSInclude("https://venkataajay31.github.io/BrassringTourPOC/css/lib/shepherd.css")
loadCSSInclude("https://venkataajay31.github.io/BrassringTourPOC/css/lib/custom.css")
}
