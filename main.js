readFileHLV = function (word) {
  var urlDoc = word.linkUrl || word.selectionText;
  chrome.tabs.create({ url: "https://docs.google.com/viewer?embedded=true&url=" + urlDoc });
};

chrome.contextMenus.create({
  title: "Readfile by HuyDZ",
  contexts: ["all"],
  onclick: readFileHLV
});