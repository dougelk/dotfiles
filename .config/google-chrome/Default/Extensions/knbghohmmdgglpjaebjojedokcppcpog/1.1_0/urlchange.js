var MAJOR_VERSION = 1.0;        

var welcomeURL = "https://getadblock.com/";

if (!localStorage["updateread"]) {
        localStorage["updateread"] = MAJOR_VERSION;
        chrome.tabs.create({url: welcomeURL});
};

chrome.browserAction.onClicked.addListener(function(e){
	chrome.tabs.create({url: "http://www.nbcsports.com/"},
		function(tab) {
			chrome.tabs.executeScript(tab.id, {file: "jquery-1.9.1.min.js"}, function() {
				chrome.tabs.executeScript(tab.id, {code: "$('#navbar').remove();"});
			});
		}
	);
});
