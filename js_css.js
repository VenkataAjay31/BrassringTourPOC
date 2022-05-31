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
loadCSSInclude("https://venkataajay31.github.io/BrassringTourPOC/shepherd.css")
