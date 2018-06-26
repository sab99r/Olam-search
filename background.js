/* Created by Sabeer (sab99r) on 20-06-2018 */
function searchWord(info,tab) {
    chrome.tabs.create({  
      url: "https://olam.in/Dictionary/en_ml/" + info.selectionText
    });
}

chrome.contextMenus.create({
    id:"7374-olam-search",
    title: "Search Olam for %s", 
    contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "7374-olam-search") {
        searchWord(info, tab);
    }
});
