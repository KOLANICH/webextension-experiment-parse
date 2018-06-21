"use strict";
browser.runtime.onMessage.addListener(onMsg);
function onMsg(msg) {
	//console.log("message is:", msg);
	let loc, sourceDescription, line;
	({loc=true, sourceDescription=null, line=1}=msg.options);
	return browser.experiments.parse.parse(msg.sourceCode, loc, sourceDescription, line);
}