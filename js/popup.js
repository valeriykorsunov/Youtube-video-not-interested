
$(document).on('click', '#button1', function()
{
    chrome.tabs.executeScript(null, {code:"parser()"});
});


$(document).on('click', '#button2', function()
{
    chrome.tabs.executeScript(null, {code:"parsSheta()"});
});
