(function() {
	'use strict';

	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var googleAdsAndServices = "www.googleadservices.com";
		var addUrl = "adurl";

		var url = new URL(details.url);

		if (url.hostname.toLowerCase() == googleAdsAndServices && url.searchParams.has(addUrl)) {
			chrome.tabs.update(details.tabId, { url: url.searchParams.get(addUrl) })
		}
	});

})();
