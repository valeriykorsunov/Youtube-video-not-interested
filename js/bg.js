chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;

    if(url.indexOf('https://reg.tensor.ru/#ws-nc=Tabs=list;Menu=UCService.Sbis.Prolongation_1;') != -1) {
        chrome.tabs.executeScript(null, {code:"parser()"});
    }
    else if(url.indexOf('https://reg.tensor.ru/#ws-nc=Tabs=list;Menu=Partners.Contracts') != -1) {
        chrome.tabs.executeScript(null, {code:"parsSheta()"});
    }
    else {
        alert('Неверный Url :: '+tab.url);
    }

});

// chrome.tabs.onUpdated.addListener(function(id,info,tab) {
//     if(info.url)
//     {
//         var url = info.url;
//         if(url.indexOf('https://reg.tensor.ru/#ws-nc=Tabs=list;Menu=UCService.Sbis.Prolongation_1;') != -1) {
//             chrome.pageAction.show(id);
//         }
//         else {
//             chrome.pageAction.hide(id);
//         }
//         if(url.indexOf('https://reg.tensor.ru/#ws-nc=Tabs=list;Menu=Partners.Contracts') != -1) {
//             chrome.pageAction.show(id);
//         }
//         else {
//             chrome.pageAction.hide(id);
//         }
//
//     }
// });


